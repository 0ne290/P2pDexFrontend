import { useSDK } from "@metamask/sdk-react";
import './App.css'
import Web3 from 'web3'

function App() {
  const { sdk, connected, chainId, provider } = useSDK();
  const web3 = new Web3();

  const connect = async () => {
    const accounts = await sdk?.connect();
    try {
      var transactionHash = await provider?.request({method: "eth_sendTransaction", params: [ { from: accounts?.[0], to: "0xb73d998d706d006dd22e678bcb787cf1de1351e2", value: web3.utils.toHex(web3.utils.toWei("0.25", "ether")) } ] })
      console.log("Transaction successful. Hash: " + transactionHash)
    }
    catch (e) {
      console.log("Transaction failed. Error code: " + e.code)
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
