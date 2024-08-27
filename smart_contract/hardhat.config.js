require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    optimism: {
      url: 'https://opt-mainnet.g.alchemy.com/v2/5oChbHINQXVHoVdwNK_Se7on65iH8_1S',
      accounts: ['d87744191ebaedf3849ea9c15b83e1eea39d6c4380d6c985b1bd8794eaaf56ca'],
    },
  },
};