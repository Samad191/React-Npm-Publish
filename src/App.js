import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleReactNpmModule from 'samad-uni-test-widget';
// import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

// import { WagmiConfig } from 'wagmi'
// import { goerli, mainnet } from 'viem/chains'
// import ConnectButton from './hooks/connectWallet';
// import { useWeb3ModalState } from '@web3modal/wagmi/react'
// import { useAccount } from 'wagmi';

function App() {

  // const projectId = 'ec34b7ce08621ea43343eaf71e71e86b';
  // // createWeb3Modal()
  // const metadata = {
  //   name: 'Web3Modal',
  //   description: 'Web3Modal Example',
  //   url: 'https://web3modal.com',
  //   icons: ['https://avatars.githubusercontent.com/u/37784886']
  // }

  // const chains = [mainnet, goerli]

  // const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
  // createWeb3Modal({ wagmiConfig, projectId, chains })
  // const { open, selectedNetworkId } = useWeb3ModalState()

  // return (
  //   <WagmiConfig config={wagmiConfig} >
  //     <div className="App">
  //       <ExampleReactNpmModule backgroundColor='#D0D0D0' height='10rem' />
  //       <ConnectButton />
  //       <button onClick={() => {console.log('state of wallet', open, selectedNetworkId)}} >Get wallet details</button>
  //       <h4>network id: {selectedNetworkId}</h4>
  //     </div>
  //   </WagmiConfig>
  // );

  return (
      <div className="App">
        <ExampleReactNpmModule backgroundColor='#D0D0D0' height='10rem' />
      </div>
  );
}

export default App;
