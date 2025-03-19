import { Address } from "pers-shared-lib";

export class GetWeb3ContractByAddressAndChainIdCommand {
    constructor(
        public readonly contractAddress: Address,
        public readonly chainId: number
    ) {}
}