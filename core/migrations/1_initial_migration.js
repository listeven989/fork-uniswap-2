const Factory = artifacts.require("UniswapV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");

module.exports = function (deployer, _network, addresses) {
  // deploy from the first address, the address that deployed this contract
  deployer.deploy(Factory, addresses[0]);
  const factory = Factory.deployed

  if (network == "mainnet") {
    token1Address = ''
    token2Address = ''
  } else {
    await deployer.deploy(Token1)
    await deployer.deploy(Token2)
    const token1 = Token1.deployed()
    const token2 = Token2.deployed()
    token1Address = token1.address
    token2Address = token2.address
  }

  await factory.createPair(token1Address, token2Address)
};
