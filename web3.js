// frontend/src/web3.js
import { ethers } from 'ethers';
import BRICS from './artifacts/BRICS.json'; // Make sure this path is correct

// Set up provider and signer
let provider;
let signer;
let bricsContract;

export const connectWallet = async () => {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        signer = provider.getSigner();
        bricsContract = new ethers.Contract('YOUR_CONTRACT_ADDRESS', BRICS.abi, signer);
    } else {
        console.error('Metamask is required to interact with this application.');
    }
};

export const getBalance = async (address) => {
    const balance = await bricsContract.balanceOf(address);
    return balance.toString();
};

// more functions to interact with your contract as needed
