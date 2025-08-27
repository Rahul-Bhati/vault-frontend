// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import VaultIDL from './vault_dapp.json'
import type { VaultDapp } from './vault_dapp'

// Re-export the generated IDL and type
export { VaultDapp, VaultIDL }

// The programId is imported from the program IDL.
export const BASIC_PROGRAM_ID = new PublicKey(VaultIDL.address)

// This is a helper function to get the Basic Anchor program.
export function getVaultProgram(provider: AnchorProvider, address?: PublicKey): Program<VaultDapp> {
  return new Program({ ...VaultIDL, address: address ? address.toBase58() : VaultIDL.address } as VaultDapp, provider)
}

export function getVaultProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
      return new PublicKey('H3Ksfne1kwnxp1tvc6Fi3xWjpzDiNgSn4BB3JodoAV2A')
    case 'testnet':
      return new PublicKey('H3Ksfne1kwnxp1tvc6Fi3xWjpzDiNgSn4BB3JodoAV2A')
    case 'mainnet-beta':
    default:
      return BASIC_PROGRAM_ID
  }
}
