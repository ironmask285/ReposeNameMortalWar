// SPDX-License-Identifier:MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MWT is ERC20 {
    constructor(uint256 initialSupply) ERC20("MWT", "MWT", 0) {
        _mint(msg.sender, initialSupply);
    }
}
