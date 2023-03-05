// https://eth-goerli.g.alchemy.com/v2/sOXsrD94RRdyYHrgEJv9seYnWedNv4Xw

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/sOXsrD94RRdyYHrgEJv9seYnWedNv4Xw",
      accounts: [
        "c9c1fd5913da0d1921c30ba2d58243065a57d1f6b7263b92e2f422b4f7a3f346",
      ],
    },
  },
};
