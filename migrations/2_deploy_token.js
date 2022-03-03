const MortalWars = artifacts.require("MWT")
const DEX = artifacts.require("DEX")
const INITIAL_SUPPLY = 1000000000

module.exports = async function (deployer) {
  await deployer.deploy(MortalWars, INITIAL_SUPPLY)
}
