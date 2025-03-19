import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Web3ContractDTO } from "pers-shared-lib";
import { LocalStorageServiceInterface } from "../../../local-storage/application/local-storage.service.interface";
import { Web3ContractServiceInterface } from "../web3-contract.service.interface";
import { GetLatestWeb3ContractByTypeAndChainIdCommand } from "../commands/get-latest-web3-contract-by-type-and-chain-id.command";


@Injectable()
@CommandHandler(GetLatestWeb3ContractByTypeAndChainIdCommand)
export class GetLatestWeb3ContractByTypeAndChainIdCommandHandler implements ICommandHandler<GetLatestWeb3ContractByTypeAndChainIdCommand> {

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
    async execute(command: GetLatestWeb3ContractByTypeAndChainIdCommand): Promise<Web3ContractDTO> {

        // Create a new context ID for resolving services in a scoped context
        const contextId = this.localStorage.getContextIdOrCreateNew();

        const contractService = await this.moduleRef.resolve(Web3ContractServiceInterface, contextId);

        const contract = await contractService.getLatestContractByTypeAndChainId(command.type, command.chainId);

        return contract;
    }

}