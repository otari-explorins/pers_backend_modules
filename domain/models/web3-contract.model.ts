import { NativeTokenType } from "@explorins/web3-ts";
import { BaseModel } from "../../../base/domain/base.model"
import { Web3ContractTypes } from "pers-shared-lib";


export class Web3ContractModel extends BaseModel {
    implementationAddress?: string;
    contractAddress: string = '';
    ownerAddress: string = '';
    chainId: number = 0;
    // this is same as tenantId in the database but we are using referenceId because of RLS policies (automatically sets policy if tenantId column is present) in the database, which should not be applied here because this can be a shared contract
    tenantReferenceId: string | null = null;
    abiUrl: string = '';
    contractVersion: string = '';
    isProxy: boolean = false;
    nativeTokenType: NativeTokenType | null = null;
    salt?: string;
    contractType: Web3ContractTypes = Web3ContractTypes.SMART_WALLET_PROXY;
}