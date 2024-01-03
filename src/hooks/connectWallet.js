import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, usePublicClient, useWalletClient } from 'wagmi';
import { useWeb3ModalState } from '@web3modal/wagmi/react'

import ExampleReactNpmModule from 'samad-uni-test-widget';

export default function ConnectButton() {
    // 4. Use modal hook
    const { open } = useWeb3Modal()
    const { address, connector } = useAccount()
    const { selectedNetworkId } = useWeb3ModalState()

    // const publicClient = usePublicClient({ chainId: 5 });
    const { data } = useWalletClient()

    console.log('connect provider frontend', data);
    console.log('connect account', address)


    return (
        <>
            <button onClick={() => open()}>Open Connect Modal</button>
            <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
            <h4>Address: {address}</h4>
            <button
                onClick={() => {
                    console.log('details', address, selectedNetworkId)
                }}
            >Get details</button>
            <ExampleReactNpmModule address={address} backgroundColor='#D0D0D0' height='10rem' publicClient={data} />
        </>
    )
}