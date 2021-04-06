const Factory = artifacts.require("UniswapV2Factory.sol");

module.exports = function (deployer, _network, addresses) {
  // deploy from the first address, the address that deployed this contract
  deployer.deploy(Factory, addresses[0]);
  const factory = Factory.deployed
};
