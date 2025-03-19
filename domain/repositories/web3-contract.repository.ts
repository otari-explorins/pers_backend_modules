import { Web3ContractTypes } from "pers-shared-lib";
import { Web3ContractModel } from "../models/web3-contract.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export abstract class Web3ContractRepository {
    abstract save(model: Web3ContractModel): Promise<Web3ContractModel>;
    abstract getAll(conractType: Web3ContractTypes): Promise<Web3ContractModel[]>;
    abstract findByAddressAndChainIdOrFail(contractAddress: string, chainId: number): Promise<Web3ContractModel>;
    abstract findLatestContractByTypeAndChainIdOrFail(contractType: Web3ContractTypes, chainId: number): Promise<Web3ContractModel>;
}