import { PublicKey, Connection, clusterApiUrl } from '@solana/web3.js'

async function getBalanceUsingWeb3(address: PublicKey): Promise<number> {
  const connection = new Connection(clusterApiUrl('devnet'));
  return connection.getBalance(address);
}

const publicKey = new PublicKey('J2Rnp3AkbHWzXnGC9rnYnnKesA4ft63xXZKSmnURypoH')
getBalanceUsingWeb3(publicKey).then(balance => {
  console.log('Balance:', balance);
})