
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Web3ContractTypes } from "pers-shared-lib";
import { DataSource, ILike, Repository } from "typeorm";
import { Web3ContractModel } from "../../domain/models/web3-contract.model";
import { Web3ContractRepository } from "../../domain/repositories/web3-contract.repository";
import { Web3ContractSchema } from "./web3-contract.schema";

@Injectable()
export class Web3ContractTypeormRepository implements Web3ContractRepository {

    private repository: Repository<Web3ContractModel>;

    constructor(
        datasource: DataSource
    ) {
    
        if (!datasource?.isInitialized) {
              throw new Error('TenantTypeormRepository Datasource not initialized in constructor');
            }
            this.repository = datasource.getRepository(Web3ContractSchema)
          
        }

    async save(model: Web3ContractModel): Promise<Web3ContractModel> {
        try {
            return await this.repository.save(model);
        } catch (error) {
            console.error('Error saving deployed contract', error);
            throw new InternalServerErrorException('Error saving deployed contract', error.message);
        }
    }

    async getAll(contractType: Web3ContractTypes): Promise<Web3ContractModel[]> {
        try {
            return await this.repository.find({ where: { contractType } });
        } catch (error) {
            throw new InternalServerErrorException('Error fetching deployed contracts', error.message);
        }
    }

    async findByAddressAndChainIdOrFail(contractAddress: string, chainId: number): Promise<Web3ContractModel> {
        try {
            return await this.repository.findOneOrFail({ where: { contractAddress: ILike(contractAddress), chainId } });
        } catch (error) {
            throw new InternalServerErrorException(`Error finding deployed contract by address ${contractAddress} and chainId ${chainId}`, error.message);
        }
    }

    async findLatestContractByTypeAndChainIdOrFail(contractType: Web3ContractTypes, chainId: number): Promise<Web3ContractModel> {
        try {
            return await this.repository.createQueryBuilder('deployedContract')
                .where('deployedContract.contractType = :contractType', { contractType })
                .andWhere('deployedContract.chainId = :chainId', { chainId })
                .orderBy('deployedContract.contractVersion', 'DESC')
                .getOneOrFail();
        } catch (error) {
            throw new InternalServerErrorException('Error finding latest deployed contract by type and chainId', error.message);
        }
    }
}