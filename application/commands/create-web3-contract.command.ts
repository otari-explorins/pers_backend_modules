import { Web3ContractCreateRequestDTO } from "pers-shared-lib";

export class CreateWeb3ContractCommand {
    constructor(
        public readonly dto: Web3ContractCreateRequestDTO,
        public readonly tenantId: string | null
    ) {}
}