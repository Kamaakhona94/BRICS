const express = require('express');
const Web3 = require('web3');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Setup Web3 provider
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));

// Replace with your smart contract's ABI and address
const contractABI = [ /* Your contract's ABI goes here */ ];
const contractAddress = process.env.CONTRACT_ADDRESS; // Your deployed contract address
const myTokenContract = new web3.eth.Contract(contractABI, contractAddress);

// Middleware
app.use(express.json());

// API endpoint to get balance
app.get('/balance/:address', async (req, res) => {
    const { address } = req.params;

    try {
        const balance = await myTokenContract.methods.balanceOf(address).call();
        res.status(200).json({ address, balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
