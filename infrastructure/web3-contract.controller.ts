import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Web3ContractServiceInterface } from '../application/web3-contract.service.interface';
import { Web3ContractCreateRequestDTO, Web3ContractDTO } from 'pers-shared-lib';
import { GlobalRequest } from '../../auth/application/decorators/global.decorator';

@ApiTags('Web3 Contract')
@Controller('contract')
export class Web3ContractController {
  
  constructor(
    private readonly web3ContractService: Web3ContractServiceInterface
  ) {}

  // TODO: Add the missing decorators, in particular those for authentication and authorization
  @Post('')
  @GlobalRequest()
  @ApiOperation({ summary: 'Create a new contract' })
  @ApiBody({ type: Web3ContractCreateRequestDTO })
  @ApiOkResponse({ description: 'Contract created', type: Web3ContractDTO })
  async create(
    @Body() dto: Web3ContractCreateRequestDTO
  ) {
    try {
      return await this.web3ContractService.createContract(dto, null)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}