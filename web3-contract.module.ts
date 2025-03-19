import { forwardRef, Module } from "@nestjs/common";
import { Web3ContractService } from "./application/web3-contract.service";
import { Web3ContractServiceInterface } from "./application/web3-contract.service.interface";
import { Web3ContractDomainService } from "./domain/web3-contract.domain.service";
import { GetLatestWeb3ContractByTypeAndChainIdCommandHandler } from "./application/command-handler/get-web3-contract-by-type-and-address-and-chain-id.command.handler";
import { CqrsModule } from "@nestjs/cqrs";
import { GetWeb3ContractByTypeAndAddressAndChainIdCommandHandler } from "./application/command-handler/get-latest-web3-contract-by-type-and-chain-id.command.handler";
import { AppBaseModule } from "../app/app.module";
import { Web3ContractSchema } from "./infrastructure/typeorm/web3-contract.schema";
import { Web3ContractRepository } from "./domain/repositories/web3-contract.repository";
import { Web3ContractTypeormRepository } from "./infrastructure/typeorm/web3-contract.typeorm.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Web3ContractMapper } from "./application/mapper/deployed-contract.mapper";
import { Web3ContractController } from "./infrastructure/web3-contract.controller";
import { CreateWeb3ContractCommandHandler } from "./application/command-handler/create-web3-contract.command.handler";

@Module({
  imports: [
    CqrsModule,
    forwardRef(() => AppBaseModule),
    // AppBaseModule,
    TypeOrmModule.forFeature([
      Web3ContractSchema
    ]),
  ],
  providers: [
    Web3ContractDomainService,
    GetWeb3ContractByTypeAndAddressAndChainIdCommandHandler,
    GetLatestWeb3ContractByTypeAndChainIdCommandHandler,
    CreateWeb3ContractCommandHandler,
    {
      provide: Web3ContractServiceInterface,
      useClass: Web3ContractService
    },
    {
      provide: Web3ContractRepository,
      useClass: Web3ContractTypeormRepository
    },
    Web3ContractMapper
  ],
  exports: [
    GetLatestWeb3ContractByTypeAndChainIdCommandHandler,
    GetWeb3ContractByTypeAndAddressAndChainIdCommandHandler,
    CreateWeb3ContractCommandHandler,
  ],
  controllers: [
    Web3ContractController
  ]
})

export class Web3ContractModule { }