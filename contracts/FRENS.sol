// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FrensToken is ERC20, Ownable {
    
    constructor() ERC20("FrensToken", "$FRENS") {}
        
    function mint(
    address _to,
    uint256 _amount // Amount of tokens
    ) external onlyOwner {  
        _mint(_to, _amount * 10 ** decimals());  // checks that addres is not 0
    }
    
}