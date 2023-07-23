// Allows us to use ES6 in our migrations and tests.
require('babel-register');
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();
const privateKey = process.env.WALLET_PRIVATE_KEY;
const gnosisscanAPIKey = process.env.BLOCK_SCOUT_API_KEY;
const etherScanPrivateKey = process.env.ETHERSCAN_PRIVATE_KEY;
module.exports = {
  networks: {
    live: {
      provider: function () {
        return new HDWalletProvider([privateKey], 'https://rpc.chiadochain.net')
      },
      network_id: 10200,
      /*host: "178.25.19.88", // Random IP for example purposes (do not use)
      port: 80,
      network_id: 1,        // Ethereum public network,
      */
    },
    chiado: {
      provider: function() {
            return new HDWalletProvider( [privateKey], "https://rpc.chiadochain.net")},
      network_id: 10200,
      gas: 500000,
      gasPrice: 1000000000
},
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: "^0.8.9"
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: etherScanPrivateKey,
    gnosisscan: gnosisscanAPIKey
  }
}