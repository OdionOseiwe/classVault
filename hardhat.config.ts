require("@nomicfoundation/hardhat-toolbox");
import "@nomiclabs/hardhat-ethers";
require("dotenv").config({ path: ".env" });

const ALCHEMY_RINKEBY_API_KEY_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

const ALCHEMY_GOERLI_API_KEY_URL = process.env.ALCHEMY_GOERLI_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY_GOERLI = process.env.ACCOUNT_PRIVATE_KEY_GOERLI;

const ALCHEMY_ROSPTEN_API_KEY_URL = process.env.ALCHEMY_ROSPTEN_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY_ROSPTEN = process.env.ACCOUNT_PRIVATE_KEY_ROSPTEN;


const API_TOKEN = process.env.API_TOKEN;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_ROSPTEN_API_KEY_URL,
        blockGasLimit: 200000000000,
        gasPrice: 10000000000,
      }
    },
    rinkeby: {
      url: ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    goerli: {
      url: ALCHEMY_GOERLI_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY_GOERLI],
    },
    ropsten: {
      url: ALCHEMY_ROSPTEN_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY_ROSPTEN],
    }
  }
};