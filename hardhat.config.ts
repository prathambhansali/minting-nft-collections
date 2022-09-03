import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
require("dotenv").config({ path: ".env" });

const config: HardhatUserConfig = {
  solidity: "0.8.1",
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY!],
    },
  },
};

export default config;