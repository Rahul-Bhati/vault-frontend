import { Metadata } from 'next'

const { title } = {
  title: 'Vault – Secure Vault for Solana',
}

export const siteConfig: Metadata = {
  title,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  applicationName: 'Solana Vault dApp',
  alternates: {
    canonical: "",
  },
  keywords: [
    'Solana',
    'Vault',
    'DeFi',
    'dApp',
    'Web3',
    'crypto vault',
    'Solana dApp',
    'secure storage',
  ],
}
