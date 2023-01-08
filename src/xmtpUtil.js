import { Client,NumberCodec,MediaCodec } from '@xmtp/xmtp-js'
import { Wallet } from 'ethers'
import { ethers } from 'ethers'


const provider = new ethers.providers.Web3Provider(window.ethereum)
// await provider.send("eth_requestAccounts", []);
                    
export const newsigner = provider.getSigner()


