import { EntitySchema } from "typeorm";
import { Web3ContractModel } from "../../domain/models/web3-contract.model";
import { sharedFields } from "../../../base/infrastructure/typeorm/shared-fields.schema";

export const Web3ContractSchema = new EntitySchema<Web3ContractModel>({
    name: 'web3Contract',
    columns: {
        ...sharedFields,

        implementationAddress: {
            type: String,
            nullable: true
        },
        contractAddress: {
            type: String
        },
        ownerAddress: {
            type: String
        },
        chainId: {
            type: Number
        },
        abiUrl: {
            type: String
        },
        contractVersion: {
            type: String
        },
        isProxy: {
            type: Boolean
        },
        nativeTokenType: {
            type: String,
            nullable: true
        },
        salt: {
            type: String,
            nullable: true
        },
        contractType: {
            type: String
        },
        // this is same as tenantId in the database but we are using referenceId because of RLS policies (automatically sets policy if tenantId column is present) in the database, which should not be applied here because this can be a shared contract
        tenantReferenceId: {
            type: String,
            nullable: true
        }
    }
});