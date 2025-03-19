import { Web3ContractDTO, Web3ContractTypes } from "pers-shared-lib";
import { NativeTokenType } from "@explorins/web3-ts";


const deployedTokenContracts: Web3ContractDTO[] = [
    {
        contractAddress: '0xdd4fea7bc95430c1e9a5a0abcc7fe3a5dbdcd664',
        ownerAddress: '0xfd5b4625ad353d962257194712a7bd91c12013ab',
        chainId: 80002,
        abi: [],
        abiUrl: 'https://s3.eu-west-1.amazonaws.com/pers.assets.prod/contract/PERS_StatusToken.abi.json',
        contractVersion: '1',
        nativeTokenType: NativeTokenType.ERC721,
        isProxy: true,
        contractType: Web3ContractTypes.TOKEN_CONTRACT,
        tenantId: null
    },
    {
        contractAddress: '0x11908a7f56911e68da0e8284d84503ada2e4ec2f',
        ownerAddress: '0xfd5b4625ad353d962257194712a7bd91c12013ab',
        chainId: 80002,
        abi: [],
        abiUrl: 'https://s3.eu-west-1.amazonaws.com/pers.assets.prod/contract/PERS_StatusToken.abi.json',
        contractVersion: '1',
        isProxy: true,
        nativeTokenType: NativeTokenType.ERC721,
        contractType: Web3ContractTypes.TOKEN_CONTRACT,
        tenantId: null
    },
    {
        contractAddress: '0xe287c59c6f7db6a7c2df7b2eb436c3d16c69c379',
        ownerAddress: '0x1dB5953497ca86E4E3B7450915a215183a9f8968',
        chainId: 39123,
        abi: [],
        abiUrl: 'https://s3.eu-west-1.amazonaws.com/pers.assets.prod/contract/PERS_CreditToken.abi.json',
        contractVersion: '1',
        isProxy: true,
        nativeTokenType: NativeTokenType.ERC20,
        contractType: Web3ContractTypes.TOKEN_CONTRACT,
        tenantId: null
    },
    {
        contractAddress: '0x3cFA65dcb74c8729Cf6792D2999eF84504e814F3',
        ownerAddress: '0x1dB5953497ca86E4E3B7450915a215183a9f8968',
        chainId: 39123,
        abi: [],
        abiUrl: 'https://s3.eu-west-1.amazonaws.com/pers.assets.prod/contract/PERS_CreditToken.abi.json',
        contractVersion: '1',
        isProxy: true,
        nativeTokenType: NativeTokenType.ERC20,
        contractType: Web3ContractTypes.TOKEN_CONTRACT,
        tenantId: null
    },
    {
        contractAddress: '0xccd14f7a239de17a34219a6a12b70be7bf339b73',
        ownerAddress: '0xfd5b4625ad353d962257194712a7bd91c12013ab',
        chainId: 80002,
        abi: [],
        abiUrl: 'https://s3.eu-west-1.amazonaws.com/pers.assets.prod/contract/PERS_CreditToken.abi.json',
        contractVersion: '1',
        isProxy: true,
        nativeTokenType: NativeTokenType.ERC20,
        contractType: Web3ContractTypes.TOKEN_CONTRACT,
        tenantId: null
    },
    {
        contractAddress: '0xc2ec86ab10b0883eeac8ab6a417a2f7673c8f045',
        ownerAddress: '0xfd5b4625ad353d962257194712a7bd91c12013ab',
        chainId: 80002,
        abi: [],
        abiUrl: 'https://s3.eu-west-1.amazonaws.com/pers.assets.prod/contract/PERS_RewardToken.abi.json',
        contractVersion: '1',
        isProxy: true,
        nativeTokenType: NativeTokenType.ERC1155,
        contractType: Web3ContractTypes.TOKEN_CONTRACT,
        tenantId: null
    },
]