import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateWeb3ContractCommand } from "../commands/create-web3-contract.command";
import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { Web3ContractDTO } from "pers-shared-lib";
import { LocalStorageServiceInterface } from "../../../local-storage/application/local-storage.service.interface";
import { Web3ContractServiceInterface } from "../web3-contract.service.interface";

@Injectable()
@CommandHandler(CreateWeb3ContractCommand)
export class CreateWeb3ContractCommandHandler implements ICommandHandler<CreateWeb3ContractCommand> {
    
    constructor(
        private readonly moduleRef: ModuleRef, // Module reference to resolve scoped providers
        private readonly localStorage: LocalStorageServiceInterface,
    ) { }

    /**
     * Executes the CreateWeb3ContractCommand.
     * 
     * @param {CreateWeb3ContractCommand} command.
     * @returns {Promise<Web3ContractDTO>} 
     */
    async execute(command: CreateWeb3ContractCommand): Promise<Web3ContractDTO> {

        // Create a new context ID for resolving services in a scoped context
        const contextId = this.localStorage.getContextIdOrCreateNew();

        const contractService = await this.moduleRef.resolve(Web3ContractServiceInterface, contextId);

        const contract = await contractService.createContract(command.dto, command.tenantId);

        return contract;
    }
}