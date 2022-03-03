const DEX = artifacts.require("DEX")
const MortalWars = artifacts.require("MWT")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("DEX", async (accounts) => {
  let dexInstance
  let mortalWarsInstance
  let owner
  let user
  let amount
  let idGame
  before("should setup before test", async () => {
    owner = accounts[0]
    user = accounts[1]
    dexInstance = await DEX.deployed()
    mortalWarsInstance = await MortalWars.deployed()
    amount = "2609"
    idGame = "1103"
  })
  xit("should assert true", async () => {
    console.log(dexInstance.address)
    return assert.isTrue(true)
  })
  xit("should balance of admin is 1000000000", async () => {
    const balance = await mortalWarsInstance.balanceOf(owner)
    const blanceToWei = await web3.utils.toWei(balance)
    const balanceToNumber = await web3.utils.fromWei(blanceToWei)
    return assert.equal(balanceToNumber, "1000000000")
  })
  xit("should approve and deposit token", async () => {
    tx = await mortalWarsInstance.approve(dexInstance.address, amount, {
      from: owner,
    })
    await dexInstance.deposit(amount, idGame, { from: owner })
    const balance = await mortalWarsInstance.balanceOf(dexInstance.address)
    const blanceToWei = await web3.utils.toWei(balance)
    const balanceToNumber = await web3.utils.fromWei(blanceToWei)
    // const allowanceToNumber = allowance.toString()
    assert.equal(amount, balanceToNumber)
  })
  xit("should approve widthdraw token", async () => {
    await mortalWarsInstance.transfer(dexInstance.address, amount, {
      from: owner,
    })
    // let balance = await mortalWarsInstance.balanceOf(dexInstance.address)
    // console.log(balance)
    // console.log(dexInstance.address)

    // console.log(balanceToNumber)

    await dexInstance.withdraw("1000", { from: owner })
    let balanceOwner = await mortalWarsInstance.balanceOf(dexInstance.address)
    let blanceToWei = await web3.utils.toWei(balanceOwner)
    let balanceToNumber = await web3.utils.fromWei(blanceToWei)
    assert.equal(balanceToNumber, "1609")
  })
  xit("should deposit coin function", async () => {
    await mortalWarsInstance.transfer(dexInstance.address, amount, {
      from: owner,
    })
    balance = await mortalWarsInstance.balanceOf(dexInstance.address, {
      from: user,
    })
    const blanceToWei = await web3.utils.toWei(balance)
    const balanceToNumber = await web3.utils.fromWei(blanceToWei)
    // const allowanceToNumber = allowance.toString()
    assert.equal(balanceToNumber, amount)
  })
  it("should claim token from user", async () => {
    // Deposit to smart contract
    await mortalWarsInstance.transfer(dexInstance.address, amount, {
      from: owner,
    })
    //
    await dexInstance.claimWithdraw(user, "1000", { from: owner })
    balance = await mortalWarsInstance.balanceOf(user, {
      from: user,
    })
    const blanceToWei = await web3.utils.toWei(balance)
    const balanceToNumber = await web3.utils.fromWei(blanceToWei)
    // const allowanceToNumber = allowance.toString()
    assert.equal(balanceToNumber, "1000")
  })
})
