import { Web3ContractTypes, Web3ContractDTO, Address, Web3ContractCreateRequestDTO, TenantDTO } from "pers-shared-lib";

export abstract class Web3ContractServiceInterface {

    abstract getContractByAddressAndChainId(contractAddress: Address, chainId: number): Promise<Web3ContractDTO>
    abstract getLatestContractByTypeAndChainId(type: Web3ContractTypes, chainId: number): Promise<Web3ContractDTO>
    abstract createContract(dto: Web3ContractCreateRequestDTO, tenantId: string | null): Promise<Web3ContractDTO>
}