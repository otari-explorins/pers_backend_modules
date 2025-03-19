import { Injectable } from "@nestjs/common";
import { Address, Web3ContractTypes } from "pers-shared-lib";
import { Web3ContractModel } from "./models/web3-contract.model";
import { Web3ContractRepository } from "./repositories/web3-contract.repository";


@Injectable()
export class Web3ContractDomainService {

    constructor(
        private readonly repository: Web3ContractRepository
    ) {}

    public async getContractByAddressAndChainId(contractAddress: Address, chainId: number): Promise<Web3ContractModel> {

        return await this.repository.findByAddressAndChainIdOrFail(contractAddress.getValue(), chainId)
    }


    public async getLatestContractByTypeAndChainId(type: Web3ContractTypes, chainId: number): Promise<Web3ContractModel> {

        return await this.repository.findLatestContractByTypeAndChainIdOrFail(type, chainId)

    }

    public async createContract(contractData: Partial<Web3ContractModel>, tenantReferenceId: string | null): Promise<Web3ContractModel> {
        const contract = new Web3ContractModel()

        if(contractData){
            Object.assign(contract, contractData)
        }
        contract.tenantReferenceId = tenantReferenceId

        return this.repository.save(contract)
    }
}