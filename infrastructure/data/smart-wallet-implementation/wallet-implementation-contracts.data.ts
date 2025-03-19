import { Web3ContractDTO, Web3ContractTypes } from "pers-shared-lib";


/**
 * Interface representing the deployed contract data.
 * This should be handled with db and s3 however as a temp backup here referenced data.
 */
const walletImplementationDeployedContracts: Web3ContractDTO[] = [
    {
        "contractAddress": "0x5088bAa8013f8c4A3453E13b1b98E38d7F0E9a73",
        "ownerAddress": "0x0C3610651B5c85E5b49D9FcaE67f03F9e78350e7",
        "chainId": 39123,
        "contractVersion": "4.5.0",
        "contractType": Web3ContractTypes.SMART_WALLET_IMPLEMENTATION,
        "isProxy": false,
        "nativeTokenType": null,
        "abi": [],
        tenantId: null,
        "abiUrl": "https://s3.eu-west-1.amazonaws.com/pers.assets.prod/contract/PERS_smartWalletAbi_v4.5.0.json"
      }
]