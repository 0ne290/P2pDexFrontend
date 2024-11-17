import { useSDK } from "@metamask/sdk-react";
import { useState } from 'react'
import './App.css'
import Web3 from 'web3'

function App() {
  const [account, setAccount] = useState<string>();
  const { sdk, connected, chainId, provider } = useSDK();
  const web3 = new Web3();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
      const params1 = [ { from: accounts?.[0], to: "0xb73d998d706d006dd22e678bcb787cf1de1351e2", value: "0x1BC16D674EC80000" } ]
      console.log(params1)
      await provider?.request({method: "eth_sendTransaction", params: params1 })
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  return (
    <div className="App">
      <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect
      </button>
      {connected && (
        <div>
          <>
            {chainId && `Connected chain: ${chainId}`}
            <p></p>
            {account && `Connected account: ${account}`}
          </>
        </div>
      )}
    </div>
  );
}

export default App
