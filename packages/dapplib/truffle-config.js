require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth spice punch gesture lobster flock giant'; 
let testAccounts = [
"0x88fec2be42bba6ec4973e49681c8f44a61dbf4a72f3ff4c77358aaee562880bd",
"0xe17f3da1eda363ce3a0f7edbc25ec6e23f5d3d248d156605d6836033b709d04f",
"0x7c9c256060d7a13c9f7bee1e356812172828c0fa8d91083dd31b14847fae9706",
"0x401fd6471a8c8cae49ac84b92417d2e17c8d714209ad2c3f779da2077c6235fd",
"0xbfb6de27c00197b6d676c0185ef5c1ad58162acf52e100746721856c9316f2c9",
"0xf3de75733402915fa323085f6fcd09e4bf5e730fd417073035d7b476c0efb244",
"0xe5f81884b8913860be178ad2f3b04ea1f6f6fd2e5cdf0dcad7c4ac68e48e8696",
"0x6b3d67667fdc7317761f0cdf1f933c0d3583a6e5a2d5f734b8db10290b15fdd3",
"0xa74712f29eb0736fe1a32ffdc80e596f66ebdcbd2ef29abb4d926a55b08578b7",
"0x86ba7a69ad3f5044208030b2d562390908ee7f7035892e79b068c21863215251"
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


