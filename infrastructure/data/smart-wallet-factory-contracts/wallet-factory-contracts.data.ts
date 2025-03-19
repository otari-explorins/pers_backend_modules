import { Web3ContractDTO, Web3ContractTypes } from "pers-shared-lib";

/**
 * Interface representing the deployed contract data.
 */
// This should be handled with db and s3 however as a temp backup here referenced data.
const walletFactoryDeployedContracts: Web3ContractDTO[] = [
    
    {
        "contractAddress": "0x6E755D29Ae00427dDcbEEe9Fc642cc082dBfd217",
        "ownerAddress": "0x0C3610651B5c85E5b49D9FcaE67f03F9e78350e7",
        "chainId": 39123,
        "abiUrl": "https://s3.eu-west-1.amazonaws.com/pers.assets.prod/contract/PERS_smartWalletFactoryAbi_v5.0.0.json",
        "contractType": Web3ContractTypes.SMART_WALLET_FACTORY,
        "contractVersion": "5.0.0",
        "salt": "0x3fa8c08efb0a8a024c3e7234a8fb81d1b3a64f8a6827735460de4a6b5f6e2b94",
        nativeTokenType: null,
        tenantId: null,
        isProxy: false,
        abi: [],
    }
]