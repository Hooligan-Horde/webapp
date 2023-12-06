"use client"
import TerraStationMobileWallet from '@terra-money/terra-station-mobile'
import { WalletProvider, getInitialConfig } from '@terra-money/wallet-kit'
import { App } from 'App'
import React from 'react'
import AddressViewerWallet from 'wallets/viewer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return getInitialConfig().then((defaultNetworks) => {

    const viewer_wallet = new AddressViewerWallet();

    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.png" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="terra-wallet" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Cavern protocol is a lending and borrowing protocol that provides everyone a semi-stable high interest rate, offering up to 10% yield on stablecoin deposits!" />
          <meta name="robots" content="nofollow" />
          <meta name="google-site-verification" content="N6n4BYbWghfBh-jkUDybBLxZaI1k2GN_2S65zhpf058" />
          <link rel="manifest" href="/manifest.json" />
          <title>Cavern Protocol</title>
          {/* <style>
              .loader {
                border: 8px solid rgba(255, 255, 255, 0.5); 
              border-top: 8px solid #1b1e31; 
              border-radius: 50%;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
              margin: auto;
              }
    
              @keyframes spin {
                0 % { transform: rotate(0deg); }
               100% {transform: rotate(360deg); }
              }
    
              #no-site-container, #root:empty{
                width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              z-index:-1;
    
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
    
              background-color: #1b1e31;
              }
    
            </style>*/}

        </head>
        <body style={{ margin: 0 }}>
          <div id="root" data-nosnippet>
            <div id="no-site-container">
              <div className="loader"></div>
            </div>
            {(typeof window !== 'undefined') && <WalletProvider
              extraWallets={[
                new TerraStationMobileWallet(),
                viewer_wallet
              ]}
              defaultNetworks={defaultNetworks}
            >
              <App viewer_wallet={viewer_wallet} >
                {children}
              </App>
            </WalletProvider>
            }
          </div>
          <script type="module" src="/src/index.tsx"></script>
        </body>
      </html >
    )
  });
}