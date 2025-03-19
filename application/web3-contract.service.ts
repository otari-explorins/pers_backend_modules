import { Injectable } from "@nestjs/common";
import { Web3ContractServiceInterface } from "./web3-contract.service.interface";
import { Address, Web3ContractDTO, Web3ContractCreateRequestDTO, Web3ContractTypes, TenantDTO } from "pers-shared-lib";
import { Web3ContractDomainService } from "../domain/web3-contract.domain.service";
import { Web3ContractMapper } from "./mapper/deployed-contract.mapper";


@Injectable()
export class Web3ContractService implements Web3ContractServiceInterface {

    constructor(
        private readonly web3ContractDomainService: Web3ContractDomainService,
        private readonly mapper: Web3ContractMapper
    ) {}

    public async getContractByAddressAndChainId(contractAddress: Address, chainId: number): Promise<Web3ContractDTO> {
        const contract = await this.web3ContractDomainService.getContractByAddressAndChainId(contractAddress, chainId)
        return await this.mapper.toDTO(contract)
    }

    public async getLatestContractByTypeAndChainId(type: Web3ContractTypes, chainId: number): Promise<Web3ContractDTO> {
        const contract = await this.web3ContractDomainService.getLatestContractByTypeAndChainId(type, chainId)
        return await this.mapper.toDTO(contract)
    }

    public async createContract(dto: Web3ContractCreateRequestDTO, tenantId: string | null): Promise<Web3ContractDTO> {
        
        const contract = await this.web3ContractDomainService.createContract(dto, tenantId)
        return await this.mapper.toDTO(contract)
    }
}