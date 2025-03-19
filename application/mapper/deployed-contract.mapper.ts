import { Web3ContractDTO } from "pers-shared-lib";
import { Web3ContractModel } from "../../domain/models/web3-contract.model";
import { ContractAbi } from "web3";
import { Injectable } from "@nestjs/common";


@Injectable()
export class Web3ContractMapper {
    private abiCache: Map<string, ContractAbi> = new Map(); // ✅ In-memory cache
  
    /**
     * Maps a DeployedContractModel to Web3ContractDTO, fetching ABI if needed.
     */
    public async toDTO(contract: Web3ContractModel): Promise<Web3ContractDTO> {
      const cachedAbi = this.abiCache.get(contract.contractAddress);
      
      if (cachedAbi) {
        console.log(`✅ Using cached ABI for contract: ${contract.contractAddress}`);
        return this.parseModelToDTO(contract, cachedAbi);
      }
  
      try {
        const { abi } = await this.getTokenAbiJsonFromUrl(contract.abiUrl);
        this.abiCache.set(contract.contractAddress, abi); // ✅ Store in cache
        return this.parseModelToDTO(contract, abi);
      } catch (error) {
        console.error(`❌ Failed to fetch ABI for ${contract.contractAddress}:`, error);
        throw new Error('Failed to fetch ABI');
      }
    }

    private parseModelToDTO(contract: Web3ContractModel, abi: ContractAbi): Web3ContractDTO {
        return {
            implementationAddress: contract.implementationAddress,
            contractAddress: contract.contractAddress,
            ownerAddress: contract.ownerAddress,
            chainId: contract.chainId,
            abiUrl: contract.abiUrl,
            abi,
            contractVersion: contract.contractVersion,
            isProxy: contract.isProxy,
            nativeTokenType: contract.nativeTokenType,
            salt: contract.salt,
            contractType: contract.contractType,
            tenantId: contract.tenantReferenceId
        };
    }


    /**
     * Fetches ABI JSON data from a given URL.
     * 
     * @param {string} url - The URL to fetch the ABI from.
     * @returns {Promise<{abi: ContractAbi}>} - The ABI of the contract.
     * @throws {Error} - Throws an error if the ABI cannot be fetched.
     */
    private async getTokenAbiJsonFromUrl(url: string): Promise<{ abi: ContractAbi }> {
        let response;
        try {
            response = await fetch(url).then(res => res.json());
        } catch (e) {
            throw new Error('Could not fetch ABI from URL');
        }

        if (Array.isArray(response)) {
            return { abi: response };
        } else {
            // Try parsing the response to find ABI data
            let abiData: any[] = [];
            for (let key in response) {
                try {
                    response[key] = typeof response[key] === 'string' ? JSON.parse(response[key]) : response[key];
                } catch (e) {
                    // Ignore parsing errors
                }

                if (Array.isArray(response[key])) {
                    abiData = response[key];
                    break;
                }
            }
            return { abi: abiData };
        }
    }

  }