import React, { useState } from 'react';
import './index.css'

import { WagmiConfig } from 'wagmi'
import { goerli, mainnet } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi';
import { useWeb3ModalState } from '@web3modal/wagmi/react'


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

export default function ExampleReactNpmModule({ backgroundColor, height }) {

    console.log('goerli', goerli);

    const projectId = 'ec34b7ce08621ea43343eaf71e71e86b';
    // // createWeb3Modal()
    const metadata = {
      name: 'Web3Modal',
      description: 'Web3Modal Example',
      url: 'https://web3modal.com',
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }
  
    const chains = [mainnet, goerli]
  
    const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
    createWeb3Modal({ wagmiConfig, projectId, chains })
    // const { open, selectedNetworkId } = useWeb3ModalState()

    
    const style = {
        background: backgroundColor,
        margin: 'auto',
        width: '40rem',
        minHeight: height,
        border: '3px solid',
        marginTop: '2rem',
    }

    return (
        <WagmiConfig config={wagmiConfig} >

        <div style={style} >
            <h1 style={{
                alignSelf: 'flex-start',
                marginBottom: 'var(--dl-space-space-halfunit)',
                textAlign: 'center'

            }} >Transfer funds connect button :)</h1>
            <br />
            <div style={{
                float: 'left',
            }}>
                <span style={{ fontSize: '1.7rem', fontWeight: '500', paddingLeft: '0.4rem', fontStyle: 'normal' }} >Token A</span>
                <input
                    type="number"
                    // value={amountA}
                    style={{
                        color: 'black',
                        width: 'var(--dl-size-size-xxlarge)',
                        backgroundColor: 'var(--dl-color-gray-900)',
                        width: '18rem',
                        height: '2rem',
                        borderRadius: '5px',
                        marginLeft: '3rem'
                    }}
                    onChange={(e) => {
                        console.log('change')
                        console.log('e', e)
                        // setAmountA(e.target.value)
                    }}
                />
                <button
                    style={{
                        width: 'var(--dl-size-size-large)',
                        height: '36px',
                        fontSize: '24px',
                        backgroundColor: 'var(--dl-color-gray-900)',
                        marginLeft: '2.2rem',
                        borderRadius: '5px',
                        width: '9rem'

                    }}
                    onClick={() => console.log('amount', amountA)}

                >Send</button>
            </div>
            <ConnectButton />
        {/* <button onClick={() => {console.log('state of wallet', open, selectedNetworkId)}} >Get wallet details</button>
        <h4>network id: {selectedNetworkId}</h4> */}
      
        </div>
        </WagmiConfig>
        
    )
}