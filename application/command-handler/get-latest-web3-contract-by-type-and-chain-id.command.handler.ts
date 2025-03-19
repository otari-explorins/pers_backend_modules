import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Web3ContractDTO } from "pers-shared-lib";
import { LocalStorageServiceInterface } from "../../../local-storage/application/local-storage.service.interface";
import { GetWeb3ContractByAddressAndChainIdCommand } from "../commands/get-web3-contract-by-type-and-address-and-chain-id.command";
import { Web3ContractServiceInterface } from "../web3-contract.service.interface";


@Injectable()
@CommandHandler(GetWeb3ContractByAddressAndChainIdCommand)
export class GetWeb3ContractByTypeAndAddressAndChainIdCommandHandler implements ICommandHandler<GetWeb3ContractByAddressAndChainIdCommand> {

    constructor(
        private readonly moduleRef: ModuleRef, // Module reference to resolve scoped providers
        private readonly localStorage: LocalStorageServiceInterface,
    ) { }

    /**
     * Executes the GetWeb3ContractByTypeAndAddressAndChainIdCommand.
     * 
     * @param {GetWeb3ContractByTypeAndAddressAndChainIdCommand} command.
     * @returns {Promise<DeployedContract>} 
     */
    async execute(command: GetWeb3ContractByAddressAndChainIdCommand): Promise<Web3ContractDTO> {

        // Create a new context ID for resolving services in a scoped context
        const contextId = this.localStorage.getContextIdOrCreateNew();

        const contractService = await this.moduleRef.resolve(Web3ContractServiceInterface, contextId);

        const contract = await contractService.getContractByAddressAndChainId(command.contractAddress, command.chainId);

        return contract;
    }
}