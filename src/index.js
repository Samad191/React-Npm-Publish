import React, { useState } from 'react';
import './index.css'

import { WagmiConfig } from 'wagmi'
import { goerli, mainnet } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi';
import { useWeb3ModalState } from '@web3modal/wagmi/react'
import { providers, utils, Wallet, ethers } from 'ethers'
import { fallback } from 'viem';

function ConnectButton() {
    // 4. Use modal hook
    const { open } = useWeb3Modal()
    const { address } = useAccount()
    const { selectedNetworkId } = useWeb3ModalState()
    console.log('account', address, selectedNetworkId)


    return (
        <>
            <button onClick={() => {
                open();
                console.log('address click', address)
            }}>Open Connect Modal</button>
            <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
            <h4>Address: {address}</h4>
            <button
                onClick={() => {
                    console.log('details', address, selectedNetworkId);

                }}

            >Get details</button>
        </>
    )
}

// export default function ExampleReactNpmModule({ backgroundColor, height }) {

//     console.log('goerli', goerli);

//     const projectId = 'ec34b7ce08621ea43343eaf71e71e86b';
//     // // createWeb3Modal()
//     const metadata = {
//       name: 'Web3Modal',
//       description: 'Web3Modal Example',
//       url: 'https://web3modal.com',
//       icons: ['https://avatars.githubusercontent.com/u/37784886']
//     }

//     const chains = [mainnet, goerli]

//     const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
//     createWeb3Modal({ wagmiConfig, projectId, chains })
//     // const { open, selectedNetworkId } = useWeb3ModalState()


//     const style = {
//         background: backgroundColor,
//         margin: 'auto',
//         width: '40rem',
//         minHeight: height,
//         border: '3px solid',
//         marginTop: '2rem',
//     }

//     return (
//         <WagmiConfig config={wagmiConfig} >

//         <div style={style} >
//             <h1 style={{
//                 alignSelf: 'flex-start',
//                 marginBottom: 'var(--dl-space-space-halfunit)',
//                 textAlign: 'center'

//             }} >Transfer funds connect button :)</h1>
//             <br />
//             <div style={{
//                 float: 'left',
//             }}>
//                 <span style={{ fontSize: '1.7rem', fontWeight: '500', paddingLeft: '0.4rem', fontStyle: 'normal' }} >Token A</span>
//                 <input
//                     type="number"
//                     // value={amountA}
//                     style={{
//                         color: 'black',
//                         width: 'var(--dl-size-size-xxlarge)',
//                         backgroundColor: 'var(--dl-color-gray-900)',
//                         width: '18rem',
//                         height: '2rem',
//                         borderRadius: '5px',
//                         marginLeft: '3rem'
//                     }}
//                     onChange={(e) => {
//                         console.log('change')
//                         console.log('e', e)
//                         // setAmountA(e.target.value)
//                     }}
//                 />
//                 <button
//                     style={{
//                         width: 'var(--dl-size-size-large)',
//                         height: '36px',
//                         fontSize: '24px',
//                         backgroundColor: 'var(--dl-color-gray-900)',
//                         marginLeft: '2.2rem',
//                         borderRadius: '5px',
//                         width: '9rem'

//                     }}
//                     onClick={() => console.log('amount', amountA)}

//                 >Send</button>
//             </div>
//             <ConnectButton />
//         {/* <button onClick={() => {console.log('state of wallet', open, selectedNetworkId)}} >Get wallet details</button>
//         <h4>network id: {selectedNetworkId}</h4> */}

//         </div>
//         </WagmiConfig>

//     )
// }


// this code is working ethreum provider not for wagmi
export default function ExampleReactNpmModule({ address, backgroundColor, height, publicClient }) {

    console.log('address', address);

    // console.log('provider', provider);

    // window ethereum
    // const sendTxUsingProvider = async () => {
    //     const accounts = await ethereumProvider.request({ method: 'eth_requestAccounts' });

    //     // Get the first account (you can choose the account based on your requirements)
    //     const fromAddress = accounts[0];

    //     // Your transaction data
    //     const transactionData = {
    //       from: fromAddress,
    //       to: '0xc38B74526c8Bf385111E75C5230388b7ec4E8D72', // Replace with the recipient's Ethereum address
    //       value: '100', // Replace with the amount to send in Wei
    //       gas: '100000', // Replace with the gas limit
    //       gasPrice: '100000', // Replace with the gas price
    //     };

    //     // Send the transaction
    //     const transactionHash = await ethereumProvider.request({
    //       method: 'eth_sendTransaction',
    //       params: [transactionData],
    //     });
    //     console.log('tx hash', transactionHash)
    // }

    const sendTxUsingProvider = async () => {
        const contractAddress = '0x9D233A907E065855D2A9c7d4B552ea27fB2E5a36';
        const contractABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }, { "internalType": "uint256", "name": "initialSupply", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
        try {

            await window.ethereum.enable()
            console.log('npm here send tx', address)
            // const { transport } = ethereumProvider;

            console.log('eth provider 1', transport);

            const provider = new providers.Web3Provider(transport)
            console.log('provider', provider);

            const contract = new ethers.Contract(contractAddress, contractABI, provider);
            console.log('contract ins', contract);

            const name = await contract.name()
            console.log('contract name', name);

            const symbol = await contract.symbol()
            console.log('contract symbol', symbol);

            const signer2 = await provider.getSigner(address)
            console.log('signer 2', signer2);

            console.log('signer 2 ka addr', signer2._address)

            const accounts = await provider.listAccounts()
            console.log('list accounts', accounts);

            const txRes = await signer2.sendTransaction({
                to: '0x12F10F35F3816A0003720a326038E18573af0829',
                value: utils.parseEther('0.01'),
                gasLimit: 10000000,
                from: signer2._address,
            });

            // console.log('txRes', txRes)

            // const nonce = await provider.getTransactionCount(address);
            // console.log('nonce', nonce);



            // console.log('Parsed value:', utils.parseEther('0.1'));

            // const signer = await provider.getSigner()

            // console.log('Signer Address 1:', signer);
            // console.log('Signer Address 2:', signer2);

            // const signer2 = await provider.getSigner()
            // console.log('signer from metamask', signer2);

            // console.log('parsed value', utils.parseEther('0.1'));

            // const txRes = await signer2.signMessage('hello')



            // seed phrase
            // this is working fine
            // const privateKey = '';
            // const signer = new Wallet(privateKey, provider);
            // const txRes = await signer.sendTransaction({
            //     to: '0x12F10F35F3816A0003720a326038E18573af0829',
            //     value: utils.parseEther('0.001'),
            //     gasLimit: 10000000
            // })
            console.log('tx res', txRes)
            console.log('hash', txRes.hash)
        } catch (err) {
            console.log('error', err)
        }
    }

    const txUsingEthersWithWagmi = async () => {
        try {

        const { chain, transport } = publicClient
        console.log('chain and transport', chain, transport);
        const network = {
            chainId: chain.id,
            name: chain.name,
            ensAddress: chain.contracts?.ensRegistry?.address,
        }
        // const provider = new providers.JsonRpcProvider(transport.url, network)

        const provider = new providers.Web3Provider(transport, network)
        console.log('provider', provider);

        const signer = provider.getSigner(address)
        console.log('signer', signer);

        const txRes = await signer.sendTransaction({
            to: '0x12F10F35F3816A0003720a326038E18573af0829',
            value: utils.parseEther('0.01'),
            gasLimit: 10000000,
            from: signer._address,
        });

        console.log('tx res', txRes)
        console.log('hash', txRes.hash)
        } catch(err) {
            console.log('error', err)
        }
    }

    const style = {
        background: backgroundColor,
        margin: 'auto',
        width: '40rem',
        minHeight: height,
        border: '3px solid',
        marginTop: '2rem',
    }

    return (

        <div style={style} >
            <h1 style={{
                alignSelf: 'flex-start',
                marginBottom: 'var(--dl-space-space-halfunit)',
                textAlign: 'center'

            }} >Tx using provider :)</h1>
            <p>Address ${address}</p>

            {/* <button onClick={sendTxUsingProvider} >send tx</button> */}
            {/* <button onClick={() => console.log('provider', ethereumProvider)} >Get provider</button> */}
            <button
                onClick={txUsingEthersWithWagmi}
            >Wagmi</button>
        </div>

    )
}
