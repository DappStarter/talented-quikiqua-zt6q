require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind concert harvest forget fox typical'; 
let testAccounts = [
"0x2b3b916c434801fccfcbeff763672c1df063bc9bcf67ce9480a9283df23b3bac",
"0x4a8af65619d74ffc37b2ea65942c05a3297d85ea23143086e46f77939d98e571",
"0x90c46169b004c873423d3c99a8c40ef2a0e6d5c1941e299af8026c46fd4a2baa",
"0x879dda214e934e660490844a1d3ee5421964f4d021e19962908901ce59591c61",
"0xc3d1edb9aff75d5ff4897b333ea27d962f2e2e8125802139f8d2fd0cff86f7b3",
"0x05c08574777d825168bebec1f66f41b464cf518b9e64025d9734f82d5eed567d",
"0x1fa1a57ac76759eb8ec4cc5788dec29336f0520d7f1e545f07cd473d9277279f",
"0xe536cd768736d8b683cd13cbf20555809b752da1492a44ec701a2dd227d3c4b4",
"0xbdeec777c588343f987a060119b4b254d1e2a7e0edb08c12f60cc2deaa6029c4",
"0x391aec5accb88db63c5eece56152098481fa998f8a3137c959b4c931e957bbf2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


