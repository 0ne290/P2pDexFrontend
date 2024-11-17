import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MetaMaskProvider } from "@metamask/sdk-react"
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "P2P DEX",
          url: window.location.href,
        }
      }}
    >
      <App />
    </MetaMaskProvider>
  </StrictMode>
);