const MWT = artifacts.require("MWT")
const MortalWarsDex = artifacts.require("DEX")

module.exports = async function (deployer) {
  const MortalWars = await MWT.deployed()
  await deployer.deploy(MortalWarsDex, MortalWars.address)
}
