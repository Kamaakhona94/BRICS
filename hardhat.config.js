require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.22", // Ensure this matches the version used in your contract
    networks: {
        ropsten: {
            url: `https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID`,
            accounts: [`0x${YOUR_PRIVATE_KEY}`]
        }
        // Add additional network configurations as needed
    }
};
