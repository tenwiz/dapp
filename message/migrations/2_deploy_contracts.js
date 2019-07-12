var MessageEth = artifacts.require("./MessageEth.sol");

module.exports = function(deployer) {
  deployer.deploy(MessageEth,['Thread-1', 'Thread-2', 'Thread-3'], {gas: 6700000});
};
