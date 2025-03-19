import { Web3ContractTypes } from "pers-shared-lib";

export class GetLatestWeb3ContractByTypeAndChainIdCommand {
    constructor(
        public readonly type: Web3ContractTypes,
        public readonly chainId: number
    ) {}
}