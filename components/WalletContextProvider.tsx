import { FC, ReactNode } from "react"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack"
import { useMemo } from "react"
require("@solana/wallet-adapter-react-ui/styles.css")

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const url = useMemo(() => clusterApiUrl("devnet"), [])
  const phantom = new PhantomWalletAdapter()
  const backpack = new BackpackWalletAdapter()


  return (
    <ConnectionProvider endpoint={url}>
        <WalletProvider wallets={[phantom, backpack]}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletContextProvider