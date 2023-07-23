import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { abi } from "../../frens_test_wagmi/src/ABI"
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { gnosisChiado } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
 
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [gnosisChiado],
  [infuraProvider({ apiKey: 'yourInfuraApiKey' })],
)

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

function App() {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    abi: abi,
    functionName: 'mint',
    args: ["0x0bBC0CE97721aE44caBDe8cc34Ef05be14717c0E", 1],
    account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
  })
 
  return (
    <div>
      <button onClick={() => write()}>Feed</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
}