export const abi = [
    {
        "contractName": "FrensToken",
        "abi": [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
              }
            ],
            "name": "decreaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
              }
            ],
            "name": "increaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
              }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.8.21+commit.d9974bed\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FRENS.sol\":\"FrensToken\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xa56ca923f70c1748830700250b19c61b70db9a683516dc5e216694a50445d99c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cac938788bc4be12101e59d45588b4e059579f4e61062e1cda8d6b06c0191b15\",\"dweb:/ipfs/QmV2JKCyjTVH3rkWNrfdJRhAT7tZ3usAN2XcnD4h53Mvih\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd39944e8fc06be6dbe2dd1d8449b5336e23c6a7ba3e8e9ae5ae0f37f35283f5\",\"dweb:/ipfs/QmPV3FGYjVwvKSgAXKUN3r9T9GwniZz83CxBpM7vyj2G53\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"project:/contracts/FRENS.sol\":{\"keccak256\":\"0x24861f6eaa74ba19eb2fc0499163240f68da9426ea0af428a287b4db38aa6a2f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://122bd1f8c26ea650026c6fcf20159d282eef8045e22b2621989f0c7d8a7df887\",\"dweb:/ipfs/QmRnjGWuRnvur1LF5aP3g8rny1jtwdG9FK5G7PkcL3Dz1m\"]}},\"version\":1}",
        "bytecode": "0x608060405234801562000010575f80fd5b506040518060400160405280600a81526020017f4672656e73546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600681526020017f244652454e53000000000000000000000000000000000000000000000000000081525081600390816200008e9190620003f7565b508060049081620000a09190620003f7565b505050620000c3620000b7620000c960201b60201c565b620000d060201b60201c565b620004db565b5f33905090565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200020f57607f821691505b602082108103620002255762000224620001ca565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620002897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200024c565b6200029586836200024c565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620002df620002d9620002d384620002ad565b620002b6565b620002ad565b9050919050565b5f819050919050565b620002fa83620002bf565b620003126200030982620002e6565b84845462000258565b825550505050565b5f90565b620003286200031a565b62000335818484620002ef565b505050565b5b818110156200035c57620003505f826200031e565b6001810190506200033b565b5050565b601f821115620003ab5762000375816200022b565b62000380846200023d565b8101602085101562000390578190505b620003a86200039f856200023d565b8301826200033a565b50505b505050565b5f82821c905092915050565b5f620003cd5f1984600802620003b0565b1980831691505092915050565b5f620003e78383620003bc565b9150826002028217905092915050565b620004028262000193565b67ffffffffffffffff8111156200041e576200041d6200019d565b5b6200042a8254620001f7565b6200043782828562000360565b5f60209050601f8311600181146200046d575f841562000458578287015190505b620004648582620003da565b865550620004d3565b601f1984166200047d866200022b565b5f5b82811015620004a6578489015182556001820191506020850194506020810190506200047f565b86831015620004c65784890151620004c2601f891682620003bc565b8355505b6001600288020188555050505b505050505050565b61192f80620004e95f395ff3fe608060405234801561000f575f80fd5b50600436106100f3575f3560e01c806370a0823111610095578063a457c2d711610064578063a457c2d714610273578063a9059cbb146102a3578063dd62ed3e146102d3578063f2fde38b14610303576100f3565b806370a08231146101fd578063715018a61461022d5780638da5cb5b1461023757806395d89b4114610255576100f3565b806323b872dd116100d157806323b872dd14610163578063313ce5671461019357806339509351146101b157806340c10f19146101e1576100f3565b806306fdde03146100f7578063095ea7b31461011557806318160ddd14610145575b5f80fd5b6100ff61031f565b60405161010c9190610f09565b60405180910390f35b61012f600480360381019061012a9190610fba565b6103af565b60405161013c9190611012565b60405180910390f35b61014d6103d1565b60405161015a919061103a565b60405180910390f35b61017d60048036038101906101789190611053565b6103da565b60405161018a9190611012565b60405180910390f35b61019b610408565b6040516101a891906110be565b60405180910390f35b6101cb60048036038101906101c69190610fba565b610410565b6040516101d89190611012565b60405180910390f35b6101fb60048036038101906101f69190610fba565b610446565b005b610217600480360381019061021291906110d7565b61047a565b604051610224919061103a565b60405180910390f35b6102356104bf565b005b61023f6104d2565b60405161024c9190611111565b60405180910390f35b61025d6104fa565b60405161026a9190610f09565b60405180910390f35b61028d60048036038101906102889190610fba565b61058a565b60405161029a9190611012565b60405180910390f35b6102bd60048036038101906102b89190610fba565b6105ff565b6040516102ca9190611012565b60405180910390f35b6102ed60048036038101906102e8919061112a565b610621565b6040516102fa919061103a565b60405180910390f35b61031d600480360381019061031891906110d7565b6106a3565b005b60606003805461032e90611195565b80601f016020809104026020016040519081016040528092919081815260200182805461035a90611195565b80156103a55780601f1061037c576101008083540402835291602001916103a5565b820191905f5260205f20905b81548152906001019060200180831161038857829003601f168201915b5050505050905090565b5f806103b9610725565b90506103c681858561072c565b600191505092915050565b5f600254905090565b5f806103e4610725565b90506103f18582856108ef565b6103fc85858561097a565b60019150509392505050565b5f6012905090565b5f8061041a610725565b905061043b81858561042c8589610621565b61043691906111f2565b61072c565b600191505092915050565b61044e610be6565b6104768261045a610408565b600a6104669190611354565b83610471919061139e565b610c64565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104c7610be6565b6104d05f610db2565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461050990611195565b80601f016020809104026020016040519081016040528092919081815260200182805461053590611195565b80156105805780601f1061055757610100808354040283529160200191610580565b820191905f5260205f20905b81548152906001019060200180831161056357829003601f168201915b5050505050905090565b5f80610594610725565b90505f6105a18286610621565b9050838110156105e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd9061144f565b60405180910390fd5b6105f3828686840361072c565b60019250505092915050565b5f80610609610725565b905061061681858561097a565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6106ab610be6565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610719576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610710906114dd565b60405180910390fd5b61072281610db2565b50565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361079a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107919061156b565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ff906115f9565b60405180910390fd5b8060015f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108e2919061103a565b60405180910390a3505050565b5f6108fa8484610621565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109745781811015610966576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095d90611661565b60405180910390fd5b610973848484840361072c565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109df906116ef565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4d9061177d565b60405180910390fd5b610a61838383610e75565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610ae4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610adb9061180b565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550815f808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bcd919061103a565b60405180910390a3610be0848484610e7a565b50505050565b610bee610725565b73ffffffffffffffffffffffffffffffffffffffff16610c0c6104d2565b73ffffffffffffffffffffffffffffffffffffffff1614610c62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5990611873565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc9906118db565b60405180910390fd5b610cdd5f8383610e75565b8060025f828254610cee91906111f2565b92505081905550805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055508173ffffffffffffffffffffffffffffffffffffffff165f73ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d9b919061103a565b60405180910390a3610dae5f8383610e7a565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610eb6578082015181840152602081019050610e9b565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610edb82610e7f565b610ee58185610e89565b9350610ef5818560208601610e99565b610efe81610ec1565b840191505092915050565b5f6020820190508181035f830152610f218184610ed1565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610f5682610f2d565b9050919050565b610f6681610f4c565b8114610f70575f80fd5b50565b5f81359050610f8181610f5d565b92915050565b5f819050919050565b610f9981610f87565b8114610fa3575f80fd5b50565b5f81359050610fb481610f90565b92915050565b5f8060408385031215610fd057610fcf610f29565b5b5f610fdd85828601610f73565b9250506020610fee85828601610fa6565b9150509250929050565b5f8115159050919050565b61100c81610ff8565b82525050565b5f6020820190506110255f830184611003565b92915050565b61103481610f87565b82525050565b5f60208201905061104d5f83018461102b565b92915050565b5f805f6060848603121561106a57611069610f29565b5b5f61107786828701610f73565b935050602061108886828701610f73565b925050604061109986828701610fa6565b9150509250925092565b5f60ff82169050919050565b6110b8816110a3565b82525050565b5f6020820190506110d15f8301846110af565b92915050565b5f602082840312156110ec576110eb610f29565b5b5f6110f984828501610f73565b91505092915050565b61110b81610f4c565b82525050565b5f6020820190506111245f830184611102565b92915050565b5f80604083850312156111405761113f610f29565b5b5f61114d85828601610f73565b925050602061115e85828601610f73565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806111ac57607f821691505b6020821081036111bf576111be611168565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6111fc82610f87565b915061120783610f87565b925082820190508082111561121f5761121e6111c5565b5b92915050565b5f8160011c9050919050565b5f808291508390505b600185111561127a57808604811115611256576112556111c5565b5b60018516156112655780820291505b808102905061127385611225565b945061123a565b94509492505050565b5f82611292576001905061134d565b8161129f575f905061134d565b81600181146112b557600281146112bf576112ee565b600191505061134d565b60ff8411156112d1576112d06111c5565b5b8360020a9150848211156112e8576112e76111c5565b5b5061134d565b5060208310610133831016604e8410600b84101617156113235782820a90508381111561131e5761131d6111c5565b5b61134d565b6113308484846001611231565b92509050818404811115611347576113466111c5565b5b81810290505b9392505050565b5f61135e82610f87565b9150611369836110a3565b92506113967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611283565b905092915050565b5f6113a882610f87565b91506113b383610f87565b92508282026113c181610f87565b915082820484148315176113d8576113d76111c5565b5b5092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f775f8201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b5f611439602583610e89565b9150611444826113df565b604082019050919050565b5f6020820190508181035f8301526114668161142d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f20615f8201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b5f6114c7602683610e89565b91506114d28261146d565b604082019050919050565b5f6020820190508181035f8301526114f4816114bb565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f206164645f8201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b5f611555602483610e89565b9150611560826114fb565b604082019050919050565b5f6020820190508181035f83015261158281611549565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f2061646472655f8201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b5f6115e3602283610e89565b91506115ee82611589565b604082019050919050565b5f6020820190508181035f830152611610816115d7565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000005f82015250565b5f61164b601d83610e89565b915061165682611617565b602082019050919050565b5f6020820190508181035f8301526116788161163f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f2061645f8201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b5f6116d9602583610e89565b91506116e48261167f565b604082019050919050565b5f6020820190508181035f830152611706816116cd565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f20616464725f8201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b5f611767602383610e89565b91506117728261170d565b604082019050919050565b5f6020820190508181035f8301526117948161175b565b9050919050565b7f45524332303a207472616e7366657220616d6f756e74206578636565647320625f8201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b5f6117f5602683610e89565b91506118008261179b565b604082019050919050565b5f6020820190508181035f830152611822816117e9565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725f82015250565b5f61185d602083610e89565b915061186882611829565b602082019050919050565b5f6020820190508181035f83015261188a81611851565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f2061646472657373005f82015250565b5f6118c5601f83610e89565b91506118d082611891565b602082019050919050565b5f6020820190508181035f8301526118f2816118b9565b905091905056fea2646970667358221220d48873036b4a507ef18bf78c6aa4bfb95fd547a528eaba54c76ff2fe87dc8ab764736f6c63430008150033",
        "deployedBytecode": "0x608060405234801561000f575f80fd5b50600436106100f3575f3560e01c806370a0823111610095578063a457c2d711610064578063a457c2d714610273578063a9059cbb146102a3578063dd62ed3e146102d3578063f2fde38b14610303576100f3565b806370a08231146101fd578063715018a61461022d5780638da5cb5b1461023757806395d89b4114610255576100f3565b806323b872dd116100d157806323b872dd14610163578063313ce5671461019357806339509351146101b157806340c10f19146101e1576100f3565b806306fdde03146100f7578063095ea7b31461011557806318160ddd14610145575b5f80fd5b6100ff61031f565b60405161010c9190610f09565b60405180910390f35b61012f600480360381019061012a9190610fba565b6103af565b60405161013c9190611012565b60405180910390f35b61014d6103d1565b60405161015a919061103a565b60405180910390f35b61017d60048036038101906101789190611053565b6103da565b60405161018a9190611012565b60405180910390f35b61019b610408565b6040516101a891906110be565b60405180910390f35b6101cb60048036038101906101c69190610fba565b610410565b6040516101d89190611012565b60405180910390f35b6101fb60048036038101906101f69190610fba565b610446565b005b610217600480360381019061021291906110d7565b61047a565b604051610224919061103a565b60405180910390f35b6102356104bf565b005b61023f6104d2565b60405161024c9190611111565b60405180910390f35b61025d6104fa565b60405161026a9190610f09565b60405180910390f35b61028d60048036038101906102889190610fba565b61058a565b60405161029a9190611012565b60405180910390f35b6102bd60048036038101906102b89190610fba565b6105ff565b6040516102ca9190611012565b60405180910390f35b6102ed60048036038101906102e8919061112a565b610621565b6040516102fa919061103a565b60405180910390f35b61031d600480360381019061031891906110d7565b6106a3565b005b60606003805461032e90611195565b80601f016020809104026020016040519081016040528092919081815260200182805461035a90611195565b80156103a55780601f1061037c576101008083540402835291602001916103a5565b820191905f5260205f20905b81548152906001019060200180831161038857829003601f168201915b5050505050905090565b5f806103b9610725565b90506103c681858561072c565b600191505092915050565b5f600254905090565b5f806103e4610725565b90506103f18582856108ef565b6103fc85858561097a565b60019150509392505050565b5f6012905090565b5f8061041a610725565b905061043b81858561042c8589610621565b61043691906111f2565b61072c565b600191505092915050565b61044e610be6565b6104768261045a610408565b600a6104669190611354565b83610471919061139e565b610c64565b5050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104c7610be6565b6104d05f610db2565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461050990611195565b80601f016020809104026020016040519081016040528092919081815260200182805461053590611195565b80156105805780601f1061055757610100808354040283529160200191610580565b820191905f5260205f20905b81548152906001019060200180831161056357829003601f168201915b5050505050905090565b5f80610594610725565b90505f6105a18286610621565b9050838110156105e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd9061144f565b60405180910390fd5b6105f3828686840361072c565b60019250505092915050565b5f80610609610725565b905061061681858561097a565b600191505092915050565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6106ab610be6565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610719576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610710906114dd565b60405180910390fd5b61072281610db2565b50565b5f33905090565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361079a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107919061156b565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ff906115f9565b60405180910390fd5b8060015f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108e2919061103a565b60405180910390a3505050565b5f6108fa8484610621565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109745781811015610966576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095d90611661565b60405180910390fd5b610973848484840361072c565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109df906116ef565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4d9061177d565b60405180910390fd5b610a61838383610e75565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610ae4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610adb9061180b565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550815f808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bcd919061103a565b60405180910390a3610be0848484610e7a565b50505050565b610bee610725565b73ffffffffffffffffffffffffffffffffffffffff16610c0c6104d2565b73ffffffffffffffffffffffffffffffffffffffff1614610c62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5990611873565b60405180910390fd5b565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cd2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc9906118db565b60405180910390fd5b610cdd5f8383610e75565b8060025f828254610cee91906111f2565b92505081905550805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055508173ffffffffffffffffffffffffffffffffffffffff165f73ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d9b919061103a565b60405180910390a3610dae5f8383610e7a565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610eb6578082015181840152602081019050610e9b565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610edb82610e7f565b610ee58185610e89565b9350610ef5818560208601610e99565b610efe81610ec1565b840191505092915050565b5f6020820190508181035f830152610f218184610ed1565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610f5682610f2d565b9050919050565b610f6681610f4c565b8114610f70575f80fd5b50565b5f81359050610f8181610f5d565b92915050565b5f819050919050565b610f9981610f87565b8114610fa3575f80fd5b50565b5f81359050610fb481610f90565b92915050565b5f8060408385031215610fd057610fcf610f29565b5b5f610fdd85828601610f73565b9250506020610fee85828601610fa6565b9150509250929050565b5f8115159050919050565b61100c81610ff8565b82525050565b5f6020820190506110255f830184611003565b92915050565b61103481610f87565b82525050565b5f60208201905061104d5f83018461102b565b92915050565b5f805f6060848603121561106a57611069610f29565b5b5f61107786828701610f73565b935050602061108886828701610f73565b925050604061109986828701610fa6565b9150509250925092565b5f60ff82169050919050565b6110b8816110a3565b82525050565b5f6020820190506110d15f8301846110af565b92915050565b5f602082840312156110ec576110eb610f29565b5b5f6110f984828501610f73565b91505092915050565b61110b81610f4c565b82525050565b5f6020820190506111245f830184611102565b92915050565b5f80604083850312156111405761113f610f29565b5b5f61114d85828601610f73565b925050602061115e85828601610f73565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806111ac57607f821691505b6020821081036111bf576111be611168565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6111fc82610f87565b915061120783610f87565b925082820190508082111561121f5761121e6111c5565b5b92915050565b5f8160011c9050919050565b5f808291508390505b600185111561127a57808604811115611256576112556111c5565b5b60018516156112655780820291505b808102905061127385611225565b945061123a565b94509492505050565b5f82611292576001905061134d565b8161129f575f905061134d565b81600181146112b557600281146112bf576112ee565b600191505061134d565b60ff8411156112d1576112d06111c5565b5b8360020a9150848211156112e8576112e76111c5565b5b5061134d565b5060208310610133831016604e8410600b84101617156113235782820a90508381111561131e5761131d6111c5565b5b61134d565b6113308484846001611231565b92509050818404811115611347576113466111c5565b5b81810290505b9392505050565b5f61135e82610f87565b9150611369836110a3565b92506113967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611283565b905092915050565b5f6113a882610f87565b91506113b383610f87565b92508282026113c181610f87565b915082820484148315176113d8576113d76111c5565b5b5092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f775f8201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b5f611439602583610e89565b9150611444826113df565b604082019050919050565b5f6020820190508181035f8301526114668161142d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f20615f8201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b5f6114c7602683610e89565b91506114d28261146d565b604082019050919050565b5f6020820190508181035f8301526114f4816114bb565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f206164645f8201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b5f611555602483610e89565b9150611560826114fb565b604082019050919050565b5f6020820190508181035f83015261158281611549565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f2061646472655f8201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b5f6115e3602283610e89565b91506115ee82611589565b604082019050919050565b5f6020820190508181035f830152611610816115d7565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000005f82015250565b5f61164b601d83610e89565b915061165682611617565b602082019050919050565b5f6020820190508181035f8301526116788161163f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f2061645f8201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b5f6116d9602583610e89565b91506116e48261167f565b604082019050919050565b5f6020820190508181035f830152611706816116cd565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f20616464725f8201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b5f611767602383610e89565b91506117728261170d565b604082019050919050565b5f6020820190508181035f8301526117948161175b565b9050919050565b7f45524332303a207472616e7366657220616d6f756e74206578636565647320625f8201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b5f6117f5602683610e89565b91506118008261179b565b604082019050919050565b5f6020820190508181035f830152611822816117e9565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725f82015250565b5f61185d602083610e89565b915061186882611829565b602082019050919050565b5f6020820190508181035f83015261188a81611851565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f2061646472657373005f82015250565b5f6118c5601f83610e89565b91506118d082611891565b602082019050919050565b5f6020820190508181035f8301526118f2816118b9565b905091905056fea2646970667358221220d48873036b4a507ef18bf78c6aa4bfb95fd547a528eaba54c76ff2fe87dc8ab764736f6c63430008150033",
        "immutableReferences": {},
        "generatedSources": [
          {
            "ast": {
              "nativeSrc": "0:5231:18",
              "nodeType": "YulBlock",
              "src": "0:5231:18",
              "statements": [
                {
                  "body": {
                    "nativeSrc": "66:40:18",
                    "nodeType": "YulBlock",
                    "src": "66:40:18",
                    "statements": [
                      {
                        "nativeSrc": "77:22:18",
                        "nodeType": "YulAssignment",
                        "src": "77:22:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "93:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "93:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "87:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "87:5:18"
                          },
                          "nativeSrc": "87:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "87:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nativeSrc": "77:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "77:6:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_length_t_string_memory_ptr",
                  "nativeSrc": "7:99:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "49:5:18",
                      "nodeType": "YulTypedName",
                      "src": "49:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nativeSrc": "59:6:18",
                      "nodeType": "YulTypedName",
                      "src": "59:6:18",
                      "type": ""
                    }
                  ],
                  "src": "7:99:18"
                },
                {
                  "body": {
                    "nativeSrc": "140:152:18",
                    "nodeType": "YulBlock",
                    "src": "140:152:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "157:1:18",
                              "nodeType": "YulLiteral",
                              "src": "157:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "160:77:18",
                              "nodeType": "YulLiteral",
                              "src": "160:77:18",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "150:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "150:6:18"
                          },
                          "nativeSrc": "150:88:18",
                          "nodeType": "YulFunctionCall",
                          "src": "150:88:18"
                        },
                        "nativeSrc": "150:88:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "150:88:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "254:1:18",
                              "nodeType": "YulLiteral",
                              "src": "254:1:18",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "257:4:18",
                              "nodeType": "YulLiteral",
                              "src": "257:4:18",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "247:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "247:6:18"
                          },
                          "nativeSrc": "247:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "247:15:18"
                        },
                        "nativeSrc": "247:15:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "247:15:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "278:1:18",
                              "nodeType": "YulLiteral",
                              "src": "278:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "281:4:18",
                              "nodeType": "YulLiteral",
                              "src": "281:4:18",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "271:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "271:6:18"
                          },
                          "nativeSrc": "271:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "271:15:18"
                        },
                        "nativeSrc": "271:15:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "271:15:18"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nativeSrc": "112:180:18",
                  "nodeType": "YulFunctionDefinition",
                  "src": "112:180:18"
                },
                {
                  "body": {
                    "nativeSrc": "326:152:18",
                    "nodeType": "YulBlock",
                    "src": "326:152:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "343:1:18",
                              "nodeType": "YulLiteral",
                              "src": "343:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "346:77:18",
                              "nodeType": "YulLiteral",
                              "src": "346:77:18",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "336:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "336:6:18"
                          },
                          "nativeSrc": "336:88:18",
                          "nodeType": "YulFunctionCall",
                          "src": "336:88:18"
                        },
                        "nativeSrc": "336:88:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "336:88:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "440:1:18",
                              "nodeType": "YulLiteral",
                              "src": "440:1:18",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "443:4:18",
                              "nodeType": "YulLiteral",
                              "src": "443:4:18",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "433:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "433:6:18"
                          },
                          "nativeSrc": "433:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "433:15:18"
                        },
                        "nativeSrc": "433:15:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "433:15:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "464:1:18",
                              "nodeType": "YulLiteral",
                              "src": "464:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "467:4:18",
                              "nodeType": "YulLiteral",
                              "src": "467:4:18",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "457:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "457:6:18"
                          },
                          "nativeSrc": "457:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "457:15:18"
                        },
                        "nativeSrc": "457:15:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "457:15:18"
                      }
                    ]
                  },
                  "name": "panic_error_0x22",
                  "nativeSrc": "298:180:18",
                  "nodeType": "YulFunctionDefinition",
                  "src": "298:180:18"
                },
                {
                  "body": {
                    "nativeSrc": "535:269:18",
                    "nodeType": "YulBlock",
                    "src": "535:269:18",
                    "statements": [
                      {
                        "nativeSrc": "545:22:18",
                        "nodeType": "YulAssignment",
                        "src": "545:22:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nativeSrc": "559:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "559:4:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "565:1:18",
                              "nodeType": "YulLiteral",
                              "src": "565:1:18",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nativeSrc": "555:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "555:3:18"
                          },
                          "nativeSrc": "555:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "555:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nativeSrc": "545:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "545:6:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "576:38:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "576:38:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nativeSrc": "606:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "606:4:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "612:1:18",
                              "nodeType": "YulLiteral",
                              "src": "612:1:18",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "602:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "602:3:18"
                          },
                          "nativeSrc": "602:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "602:12:18"
                        },
                        "variables": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nativeSrc": "580:18:18",
                            "nodeType": "YulTypedName",
                            "src": "580:18:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "653:51:18",
                          "nodeType": "YulBlock",
                          "src": "653:51:18",
                          "statements": [
                            {
                              "nativeSrc": "667:27:18",
                              "nodeType": "YulAssignment",
                              "src": "667:27:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nativeSrc": "681:6:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "681:6:18"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "689:4:18",
                                    "nodeType": "YulLiteral",
                                    "src": "689:4:18",
                                    "type": "",
                                    "value": "0x7f"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "677:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "677:3:18"
                                },
                                "nativeSrc": "677:17:18",
                                "nodeType": "YulFunctionCall",
                                "src": "677:17:18"
                              },
                              "variableNames": [
                                {
                                  "name": "length",
                                  "nativeSrc": "667:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "667:6:18"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nativeSrc": "633:18:18",
                              "nodeType": "YulIdentifier",
                              "src": "633:18:18"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "626:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "626:6:18"
                          },
                          "nativeSrc": "626:26:18",
                          "nodeType": "YulFunctionCall",
                          "src": "626:26:18"
                        },
                        "nativeSrc": "623:81:18",
                        "nodeType": "YulIf",
                        "src": "623:81:18"
                      },
                      {
                        "body": {
                          "nativeSrc": "756:42:18",
                          "nodeType": "YulBlock",
                          "src": "756:42:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x22",
                                  "nativeSrc": "770:16:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "770:16:18"
                                },
                                "nativeSrc": "770:18:18",
                                "nodeType": "YulFunctionCall",
                                "src": "770:18:18"
                              },
                              "nativeSrc": "770:18:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "770:18:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nativeSrc": "720:18:18",
                              "nodeType": "YulIdentifier",
                              "src": "720:18:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "743:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "743:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "751:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "751:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nativeSrc": "740:2:18",
                                "nodeType": "YulIdentifier",
                                "src": "740:2:18"
                              },
                              "nativeSrc": "740:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "740:14:18"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "717:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "717:2:18"
                          },
                          "nativeSrc": "717:38:18",
                          "nodeType": "YulFunctionCall",
                          "src": "717:38:18"
                        },
                        "nativeSrc": "714:84:18",
                        "nodeType": "YulIf",
                        "src": "714:84:18"
                      }
                    ]
                  },
                  "name": "extract_byte_array_length",
                  "nativeSrc": "484:320:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nativeSrc": "519:4:18",
                      "nodeType": "YulTypedName",
                      "src": "519:4:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nativeSrc": "528:6:18",
                      "nodeType": "YulTypedName",
                      "src": "528:6:18",
                      "type": ""
                    }
                  ],
                  "src": "484:320:18"
                },
                {
                  "body": {
                    "nativeSrc": "864:87:18",
                    "nodeType": "YulBlock",
                    "src": "864:87:18",
                    "statements": [
                      {
                        "nativeSrc": "874:11:18",
                        "nodeType": "YulAssignment",
                        "src": "874:11:18",
                        "value": {
                          "name": "ptr",
                          "nativeSrc": "882:3:18",
                          "nodeType": "YulIdentifier",
                          "src": "882:3:18"
                        },
                        "variableNames": [
                          {
                            "name": "data",
                            "nativeSrc": "874:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "874:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "902:1:18",
                              "nodeType": "YulLiteral",
                              "src": "902:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "name": "ptr",
                              "nativeSrc": "905:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "905:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "895:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "895:6:18"
                          },
                          "nativeSrc": "895:14:18",
                          "nodeType": "YulFunctionCall",
                          "src": "895:14:18"
                        },
                        "nativeSrc": "895:14:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "895:14:18"
                      },
                      {
                        "nativeSrc": "918:26:18",
                        "nodeType": "YulAssignment",
                        "src": "918:26:18",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "936:1:18",
                              "nodeType": "YulLiteral",
                              "src": "936:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "939:4:18",
                              "nodeType": "YulLiteral",
                              "src": "939:4:18",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nativeSrc": "926:9:18",
                            "nodeType": "YulIdentifier",
                            "src": "926:9:18"
                          },
                          "nativeSrc": "926:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "926:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "data",
                            "nativeSrc": "918:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "918:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_dataslot_t_string_storage",
                  "nativeSrc": "810:141:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "ptr",
                      "nativeSrc": "851:3:18",
                      "nodeType": "YulTypedName",
                      "src": "851:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "data",
                      "nativeSrc": "859:4:18",
                      "nodeType": "YulTypedName",
                      "src": "859:4:18",
                      "type": ""
                    }
                  ],
                  "src": "810:141:18"
                },
                {
                  "body": {
                    "nativeSrc": "1001:49:18",
                    "nodeType": "YulBlock",
                    "src": "1001:49:18",
                    "statements": [
                      {
                        "nativeSrc": "1011:33:18",
                        "nodeType": "YulAssignment",
                        "src": "1011:33:18",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "1029:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1029:5:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1036:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "1036:2:18",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "1025:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "1025:3:18"
                              },
                              "nativeSrc": "1025:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "1025:14:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1041:2:18",
                              "nodeType": "YulLiteral",
                              "src": "1041:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nativeSrc": "1021:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "1021:3:18"
                          },
                          "nativeSrc": "1021:23:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1021:23:18"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "1011:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "1011:6:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "divide_by_32_ceil",
                  "nativeSrc": "957:93:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "984:5:18",
                      "nodeType": "YulTypedName",
                      "src": "984:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nativeSrc": "994:6:18",
                      "nodeType": "YulTypedName",
                      "src": "994:6:18",
                      "type": ""
                    }
                  ],
                  "src": "957:93:18"
                },
                {
                  "body": {
                    "nativeSrc": "1109:54:18",
                    "nodeType": "YulBlock",
                    "src": "1109:54:18",
                    "statements": [
                      {
                        "nativeSrc": "1119:37:18",
                        "nodeType": "YulAssignment",
                        "src": "1119:37:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "bits",
                              "nativeSrc": "1144:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "1144:4:18"
                            },
                            {
                              "name": "value",
                              "nativeSrc": "1150:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "1150:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nativeSrc": "1140:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "1140:3:18"
                          },
                          "nativeSrc": "1140:16:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1140:16:18"
                        },
                        "variableNames": [
                          {
                            "name": "newValue",
                            "nativeSrc": "1119:8:18",
                            "nodeType": "YulIdentifier",
                            "src": "1119:8:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "shift_left_dynamic",
                  "nativeSrc": "1056:107:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "bits",
                      "nativeSrc": "1084:4:18",
                      "nodeType": "YulTypedName",
                      "src": "1084:4:18",
                      "type": ""
                    },
                    {
                      "name": "value",
                      "nativeSrc": "1090:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1090:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "newValue",
                      "nativeSrc": "1100:8:18",
                      "nodeType": "YulTypedName",
                      "src": "1100:8:18",
                      "type": ""
                    }
                  ],
                  "src": "1056:107:18"
                },
                {
                  "body": {
                    "nativeSrc": "1245:317:18",
                    "nodeType": "YulBlock",
                    "src": "1245:317:18",
                    "statements": [
                      {
                        "nativeSrc": "1255:35:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "1255:35:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "shiftBytes",
                              "nativeSrc": "1276:10:18",
                              "nodeType": "YulIdentifier",
                              "src": "1276:10:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1288:1:18",
                              "nodeType": "YulLiteral",
                              "src": "1288:1:18",
                              "type": "",
                              "value": "8"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "1272:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "1272:3:18"
                          },
                          "nativeSrc": "1272:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1272:18:18"
                        },
                        "variables": [
                          {
                            "name": "shiftBits",
                            "nativeSrc": "1259:9:18",
                            "nodeType": "YulTypedName",
                            "src": "1259:9:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "1299:109:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "1299:109:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "shiftBits",
                              "nativeSrc": "1330:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "1330:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1341:66:18",
                              "nodeType": "YulLiteral",
                              "src": "1341:66:18",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "shift_left_dynamic",
                            "nativeSrc": "1311:18:18",
                            "nodeType": "YulIdentifier",
                            "src": "1311:18:18"
                          },
                          "nativeSrc": "1311:97:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1311:97:18"
                        },
                        "variables": [
                          {
                            "name": "mask",
                            "nativeSrc": "1303:4:18",
                            "nodeType": "YulTypedName",
                            "src": "1303:4:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "1417:51:18",
                        "nodeType": "YulAssignment",
                        "src": "1417:51:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "shiftBits",
                              "nativeSrc": "1448:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "1448:9:18"
                            },
                            {
                              "name": "toInsert",
                              "nativeSrc": "1459:8:18",
                              "nodeType": "YulIdentifier",
                              "src": "1459:8:18"
                            }
                          ],
                          "functionName": {
                            "name": "shift_left_dynamic",
                            "nativeSrc": "1429:18:18",
                            "nodeType": "YulIdentifier",
                            "src": "1429:18:18"
                          },
                          "nativeSrc": "1429:39:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1429:39:18"
                        },
                        "variableNames": [
                          {
                            "name": "toInsert",
                            "nativeSrc": "1417:8:18",
                            "nodeType": "YulIdentifier",
                            "src": "1417:8:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "1477:30:18",
                        "nodeType": "YulAssignment",
                        "src": "1477:30:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "1490:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "1490:5:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "mask",
                                  "nativeSrc": "1501:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1501:4:18"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nativeSrc": "1497:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "1497:3:18"
                              },
                              "nativeSrc": "1497:9:18",
                              "nodeType": "YulFunctionCall",
                              "src": "1497:9:18"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "1486:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "1486:3:18"
                          },
                          "nativeSrc": "1486:21:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1486:21:18"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nativeSrc": "1477:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "1477:5:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "1516:40:18",
                        "nodeType": "YulAssignment",
                        "src": "1516:40:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "1529:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "1529:5:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "toInsert",
                                  "nativeSrc": "1540:8:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1540:8:18"
                                },
                                {
                                  "name": "mask",
                                  "nativeSrc": "1550:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1550:4:18"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "1536:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "1536:3:18"
                              },
                              "nativeSrc": "1536:19:18",
                              "nodeType": "YulFunctionCall",
                              "src": "1536:19:18"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nativeSrc": "1526:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "1526:2:18"
                          },
                          "nativeSrc": "1526:30:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1526:30:18"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "1516:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "1516:6:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "update_byte_slice_dynamic32",
                  "nativeSrc": "1169:393:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1206:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1206:5:18",
                      "type": ""
                    },
                    {
                      "name": "shiftBytes",
                      "nativeSrc": "1213:10:18",
                      "nodeType": "YulTypedName",
                      "src": "1213:10:18",
                      "type": ""
                    },
                    {
                      "name": "toInsert",
                      "nativeSrc": "1225:8:18",
                      "nodeType": "YulTypedName",
                      "src": "1225:8:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nativeSrc": "1238:6:18",
                      "nodeType": "YulTypedName",
                      "src": "1238:6:18",
                      "type": ""
                    }
                  ],
                  "src": "1169:393:18"
                },
                {
                  "body": {
                    "nativeSrc": "1613:32:18",
                    "nodeType": "YulBlock",
                    "src": "1613:32:18",
                    "statements": [
                      {
                        "nativeSrc": "1623:16:18",
                        "nodeType": "YulAssignment",
                        "src": "1623:16:18",
                        "value": {
                          "name": "value",
                          "nativeSrc": "1634:5:18",
                          "nodeType": "YulIdentifier",
                          "src": "1634:5:18"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "1623:7:18",
                            "nodeType": "YulIdentifier",
                            "src": "1623:7:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint256",
                  "nativeSrc": "1568:77:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1595:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1595:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "1605:7:18",
                      "nodeType": "YulTypedName",
                      "src": "1605:7:18",
                      "type": ""
                    }
                  ],
                  "src": "1568:77:18"
                },
                {
                  "body": {
                    "nativeSrc": "1683:28:18",
                    "nodeType": "YulBlock",
                    "src": "1683:28:18",
                    "statements": [
                      {
                        "nativeSrc": "1693:12:18",
                        "nodeType": "YulAssignment",
                        "src": "1693:12:18",
                        "value": {
                          "name": "value",
                          "nativeSrc": "1700:5:18",
                          "nodeType": "YulIdentifier",
                          "src": "1700:5:18"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nativeSrc": "1693:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "1693:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "identity",
                  "nativeSrc": "1651:60:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1669:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1669:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nativeSrc": "1679:3:18",
                      "nodeType": "YulTypedName",
                      "src": "1679:3:18",
                      "type": ""
                    }
                  ],
                  "src": "1651:60:18"
                },
                {
                  "body": {
                    "nativeSrc": "1777:82:18",
                    "nodeType": "YulBlock",
                    "src": "1777:82:18",
                    "statements": [
                      {
                        "nativeSrc": "1787:66:18",
                        "nodeType": "YulAssignment",
                        "src": "1787:66:18",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nativeSrc": "1845:5:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "1845:5:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint256",
                                    "nativeSrc": "1827:17:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "1827:17:18"
                                  },
                                  "nativeSrc": "1827:24:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1827:24:18"
                                }
                              ],
                              "functionName": {
                                "name": "identity",
                                "nativeSrc": "1818:8:18",
                                "nodeType": "YulIdentifier",
                                "src": "1818:8:18"
                              },
                              "nativeSrc": "1818:34:18",
                              "nodeType": "YulFunctionCall",
                              "src": "1818:34:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "1800:17:18",
                            "nodeType": "YulIdentifier",
                            "src": "1800:17:18"
                          },
                          "nativeSrc": "1800:53:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1800:53:18"
                        },
                        "variableNames": [
                          {
                            "name": "converted",
                            "nativeSrc": "1787:9:18",
                            "nodeType": "YulIdentifier",
                            "src": "1787:9:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "convert_t_uint256_to_t_uint256",
                  "nativeSrc": "1717:142:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1757:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1757:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "converted",
                      "nativeSrc": "1767:9:18",
                      "nodeType": "YulTypedName",
                      "src": "1767:9:18",
                      "type": ""
                    }
                  ],
                  "src": "1717:142:18"
                },
                {
                  "body": {
                    "nativeSrc": "1912:28:18",
                    "nodeType": "YulBlock",
                    "src": "1912:28:18",
                    "statements": [
                      {
                        "nativeSrc": "1922:12:18",
                        "nodeType": "YulAssignment",
                        "src": "1922:12:18",
                        "value": {
                          "name": "value",
                          "nativeSrc": "1929:5:18",
                          "nodeType": "YulIdentifier",
                          "src": "1929:5:18"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nativeSrc": "1922:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "1922:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "prepare_store_t_uint256",
                  "nativeSrc": "1865:75:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1898:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1898:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nativeSrc": "1908:3:18",
                      "nodeType": "YulTypedName",
                      "src": "1908:3:18",
                      "type": ""
                    }
                  ],
                  "src": "1865:75:18"
                },
                {
                  "body": {
                    "nativeSrc": "2022:193:18",
                    "nodeType": "YulBlock",
                    "src": "2022:193:18",
                    "statements": [
                      {
                        "nativeSrc": "2032:63:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "2032:63:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value_0",
                              "nativeSrc": "2087:7:18",
                              "nodeType": "YulIdentifier",
                              "src": "2087:7:18"
                            }
                          ],
                          "functionName": {
                            "name": "convert_t_uint256_to_t_uint256",
                            "nativeSrc": "2056:30:18",
                            "nodeType": "YulIdentifier",
                            "src": "2056:30:18"
                          },
                          "nativeSrc": "2056:39:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2056:39:18"
                        },
                        "variables": [
                          {
                            "name": "convertedValue_0",
                            "nativeSrc": "2036:16:18",
                            "nodeType": "YulTypedName",
                            "src": "2036:16:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nativeSrc": "2111:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "2111:4:18"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "slot",
                                      "nativeSrc": "2151:4:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2151:4:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sload",
                                    "nativeSrc": "2145:5:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2145:5:18"
                                  },
                                  "nativeSrc": "2145:11:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2145:11:18"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "2158:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2158:6:18"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "convertedValue_0",
                                      "nativeSrc": "2190:16:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2190:16:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "prepare_store_t_uint256",
                                    "nativeSrc": "2166:23:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2166:23:18"
                                  },
                                  "nativeSrc": "2166:41:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2166:41:18"
                                }
                              ],
                              "functionName": {
                                "name": "update_byte_slice_dynamic32",
                                "nativeSrc": "2117:27:18",
                                "nodeType": "YulIdentifier",
                                "src": "2117:27:18"
                              },
                              "nativeSrc": "2117:91:18",
                              "nodeType": "YulFunctionCall",
                              "src": "2117:91:18"
                            }
                          ],
                          "functionName": {
                            "name": "sstore",
                            "nativeSrc": "2104:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "2104:6:18"
                          },
                          "nativeSrc": "2104:105:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2104:105:18"
                        },
                        "nativeSrc": "2104:105:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "2104:105:18"
                      }
                    ]
                  },
                  "name": "update_storage_value_t_uint256_to_t_uint256",
                  "nativeSrc": "1946:269:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "slot",
                      "nativeSrc": "1999:4:18",
                      "nodeType": "YulTypedName",
                      "src": "1999:4:18",
                      "type": ""
                    },
                    {
                      "name": "offset",
                      "nativeSrc": "2005:6:18",
                      "nodeType": "YulTypedName",
                      "src": "2005:6:18",
                      "type": ""
                    },
                    {
                      "name": "value_0",
                      "nativeSrc": "2013:7:18",
                      "nodeType": "YulTypedName",
                      "src": "2013:7:18",
                      "type": ""
                    }
                  ],
                  "src": "1946:269:18"
                },
                {
                  "body": {
                    "nativeSrc": "2270:24:18",
                    "nodeType": "YulBlock",
                    "src": "2270:24:18",
                    "statements": [
                      {
                        "nativeSrc": "2280:8:18",
                        "nodeType": "YulAssignment",
                        "src": "2280:8:18",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "2287:1:18",
                          "nodeType": "YulLiteral",
                          "src": "2287:1:18",
                          "type": "",
                          "value": "0"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nativeSrc": "2280:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "2280:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "zero_value_for_split_t_uint256",
                  "nativeSrc": "2221:73:18",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nativeSrc": "2266:3:18",
                      "nodeType": "YulTypedName",
                      "src": "2266:3:18",
                      "type": ""
                    }
                  ],
                  "src": "2221:73:18"
                },
                {
                  "body": {
                    "nativeSrc": "2353:136:18",
                    "nodeType": "YulBlock",
                    "src": "2353:136:18",
                    "statements": [
                      {
                        "nativeSrc": "2363:46:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "2363:46:18",
                        "value": {
                          "arguments": [],
                          "functionName": {
                            "name": "zero_value_for_split_t_uint256",
                            "nativeSrc": "2377:30:18",
                            "nodeType": "YulIdentifier",
                            "src": "2377:30:18"
                          },
                          "nativeSrc": "2377:32:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2377:32:18"
                        },
                        "variables": [
                          {
                            "name": "zero_0",
                            "nativeSrc": "2367:6:18",
                            "nodeType": "YulTypedName",
                            "src": "2367:6:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nativeSrc": "2462:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "2462:4:18"
                            },
                            {
                              "name": "offset",
                              "nativeSrc": "2468:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "2468:6:18"
                            },
                            {
                              "name": "zero_0",
                              "nativeSrc": "2476:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "2476:6:18"
                            }
                          ],
                          "functionName": {
                            "name": "update_storage_value_t_uint256_to_t_uint256",
                            "nativeSrc": "2418:43:18",
                            "nodeType": "YulIdentifier",
                            "src": "2418:43:18"
                          },
                          "nativeSrc": "2418:65:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2418:65:18"
                        },
                        "nativeSrc": "2418:65:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "2418:65:18"
                      }
                    ]
                  },
                  "name": "storage_set_to_zero_t_uint256",
                  "nativeSrc": "2300:189:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "slot",
                      "nativeSrc": "2339:4:18",
                      "nodeType": "YulTypedName",
                      "src": "2339:4:18",
                      "type": ""
                    },
                    {
                      "name": "offset",
                      "nativeSrc": "2345:6:18",
                      "nodeType": "YulTypedName",
                      "src": "2345:6:18",
                      "type": ""
                    }
                  ],
                  "src": "2300:189:18"
                },
                {
                  "body": {
                    "nativeSrc": "2545:136:18",
                    "nodeType": "YulBlock",
                    "src": "2545:136:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2612:63:18",
                          "nodeType": "YulBlock",
                          "src": "2612:63:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nativeSrc": "2656:5:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2656:5:18"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2663:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "2663:1:18",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "storage_set_to_zero_t_uint256",
                                  "nativeSrc": "2626:29:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2626:29:18"
                                },
                                "nativeSrc": "2626:39:18",
                                "nodeType": "YulFunctionCall",
                                "src": "2626:39:18"
                              },
                              "nativeSrc": "2626:39:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "2626:39:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "start",
                              "nativeSrc": "2565:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "2565:5:18"
                            },
                            {
                              "name": "end",
                              "nativeSrc": "2572:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "2572:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nativeSrc": "2562:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "2562:2:18"
                          },
                          "nativeSrc": "2562:14:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2562:14:18"
                        },
                        "nativeSrc": "2555:120:18",
                        "nodeType": "YulForLoop",
                        "post": {
                          "nativeSrc": "2577:26:18",
                          "nodeType": "YulBlock",
                          "src": "2577:26:18",
                          "statements": [
                            {
                              "nativeSrc": "2579:22:18",
                              "nodeType": "YulAssignment",
                              "src": "2579:22:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nativeSrc": "2592:5:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2592:5:18"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2599:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "2599:1:18",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2588:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2588:3:18"
                                },
                                "nativeSrc": "2588:13:18",
                                "nodeType": "YulFunctionCall",
                                "src": "2588:13:18"
                              },
                              "variableNames": [
                                {
                                  "name": "start",
                                  "nativeSrc": "2579:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2579:5:18"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nativeSrc": "2559:2:18",
                          "nodeType": "YulBlock",
                          "src": "2559:2:18",
                          "statements": []
                        },
                        "src": "2555:120:18"
                      }
                    ]
                  },
                  "name": "clear_storage_range_t_bytes1",
                  "nativeSrc": "2495:186:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "start",
                      "nativeSrc": "2533:5:18",
                      "nodeType": "YulTypedName",
                      "src": "2533:5:18",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nativeSrc": "2540:3:18",
                      "nodeType": "YulTypedName",
                      "src": "2540:3:18",
                      "type": ""
                    }
                  ],
                  "src": "2495:186:18"
                },
                {
                  "body": {
                    "nativeSrc": "2766:464:18",
                    "nodeType": "YulBlock",
                    "src": "2766:464:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2792:431:18",
                          "nodeType": "YulBlock",
                          "src": "2792:431:18",
                          "statements": [
                            {
                              "nativeSrc": "2806:54:18",
                              "nodeType": "YulVariableDeclaration",
                              "src": "2806:54:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "array",
                                    "nativeSrc": "2854:5:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2854:5:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_t_string_storage",
                                  "nativeSrc": "2822:31:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2822:31:18"
                                },
                                "nativeSrc": "2822:38:18",
                                "nodeType": "YulFunctionCall",
                                "src": "2822:38:18"
                              },
                              "variables": [
                                {
                                  "name": "dataArea",
                                  "nativeSrc": "2810:8:18",
                                  "nodeType": "YulTypedName",
                                  "src": "2810:8:18",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nativeSrc": "2873:63:18",
                              "nodeType": "YulVariableDeclaration",
                              "src": "2873:63:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "dataArea",
                                    "nativeSrc": "2896:8:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2896:8:18"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "startIndex",
                                        "nativeSrc": "2924:10:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "2924:10:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "divide_by_32_ceil",
                                      "nativeSrc": "2906:17:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2906:17:18"
                                    },
                                    "nativeSrc": "2906:29:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "2906:29:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "2892:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2892:3:18"
                                },
                                "nativeSrc": "2892:44:18",
                                "nodeType": "YulFunctionCall",
                                "src": "2892:44:18"
                              },
                              "variables": [
                                {
                                  "name": "deleteStart",
                                  "nativeSrc": "2877:11:18",
                                  "nodeType": "YulTypedName",
                                  "src": "2877:11:18",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nativeSrc": "3093:27:18",
                                "nodeType": "YulBlock",
                                "src": "3093:27:18",
                                "statements": [
                                  {
                                    "nativeSrc": "3095:23:18",
                                    "nodeType": "YulAssignment",
                                    "src": "3095:23:18",
                                    "value": {
                                      "name": "dataArea",
                                      "nativeSrc": "3110:8:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "3110:8:18"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "deleteStart",
                                        "nativeSrc": "3095:11:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "3095:11:18"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "startIndex",
                                    "nativeSrc": "3077:10:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "3077:10:18"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "3089:2:18",
                                    "nodeType": "YulLiteral",
                                    "src": "3089:2:18",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nativeSrc": "3074:2:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3074:2:18"
                                },
                                "nativeSrc": "3074:18:18",
                                "nodeType": "YulFunctionCall",
                                "src": "3074:18:18"
                              },
                              "nativeSrc": "3071:49:18",
                              "nodeType": "YulIf",
                              "src": "3071:49:18"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "deleteStart",
                                    "nativeSrc": "3162:11:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "3162:11:18"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "dataArea",
                                        "nativeSrc": "3179:8:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "3179:8:18"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "len",
                                            "nativeSrc": "3207:3:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "3207:3:18"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "divide_by_32_ceil",
                                          "nativeSrc": "3189:17:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "3189:17:18"
                                        },
                                        "nativeSrc": "3189:22:18",
                                        "nodeType": "YulFunctionCall",
                                        "src": "3189:22:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "3175:3:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "3175:3:18"
                                    },
                                    "nativeSrc": "3175:37:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "3175:37:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "clear_storage_range_t_bytes1",
                                  "nativeSrc": "3133:28:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3133:28:18"
                                },
                                "nativeSrc": "3133:80:18",
                                "nodeType": "YulFunctionCall",
                                "src": "3133:80:18"
                              },
                              "nativeSrc": "3133:80:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "3133:80:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "len",
                              "nativeSrc": "2783:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "2783:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2788:2:18",
                              "nodeType": "YulLiteral",
                              "src": "2788:2:18",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "2780:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "2780:2:18"
                          },
                          "nativeSrc": "2780:11:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2780:11:18"
                        },
                        "nativeSrc": "2777:446:18",
                        "nodeType": "YulIf",
                        "src": "2777:446:18"
                      }
                    ]
                  },
                  "name": "clean_up_bytearray_end_slots_t_string_storage",
                  "nativeSrc": "2687:543:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "array",
                      "nativeSrc": "2742:5:18",
                      "nodeType": "YulTypedName",
                      "src": "2742:5:18",
                      "type": ""
                    },
                    {
                      "name": "len",
                      "nativeSrc": "2749:3:18",
                      "nodeType": "YulTypedName",
                      "src": "2749:3:18",
                      "type": ""
                    },
                    {
                      "name": "startIndex",
                      "nativeSrc": "2754:10:18",
                      "nodeType": "YulTypedName",
                      "src": "2754:10:18",
                      "type": ""
                    }
                  ],
                  "src": "2687:543:18"
                },
                {
                  "body": {
                    "nativeSrc": "3299:54:18",
                    "nodeType": "YulBlock",
                    "src": "3299:54:18",
                    "statements": [
                      {
                        "nativeSrc": "3309:37:18",
                        "nodeType": "YulAssignment",
                        "src": "3309:37:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "bits",
                              "nativeSrc": "3334:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "3334:4:18"
                            },
                            {
                              "name": "value",
                              "nativeSrc": "3340:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "3340:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "3330:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "3330:3:18"
                          },
                          "nativeSrc": "3330:16:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3330:16:18"
                        },
                        "variableNames": [
                          {
                            "name": "newValue",
                            "nativeSrc": "3309:8:18",
                            "nodeType": "YulIdentifier",
                            "src": "3309:8:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "shift_right_unsigned_dynamic",
                  "nativeSrc": "3236:117:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "bits",
                      "nativeSrc": "3274:4:18",
                      "nodeType": "YulTypedName",
                      "src": "3274:4:18",
                      "type": ""
                    },
                    {
                      "name": "value",
                      "nativeSrc": "3280:5:18",
                      "nodeType": "YulTypedName",
                      "src": "3280:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "newValue",
                      "nativeSrc": "3290:8:18",
                      "nodeType": "YulTypedName",
                      "src": "3290:8:18",
                      "type": ""
                    }
                  ],
                  "src": "3236:117:18"
                },
                {
                  "body": {
                    "nativeSrc": "3410:118:18",
                    "nodeType": "YulBlock",
                    "src": "3410:118:18",
                    "statements": [
                      {
                        "nativeSrc": "3420:68:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "3420:68:18",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3469:1:18",
                                      "nodeType": "YulLiteral",
                                      "src": "3469:1:18",
                                      "type": "",
                                      "value": "8"
                                    },
                                    {
                                      "name": "bytes",
                                      "nativeSrc": "3472:5:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "3472:5:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nativeSrc": "3465:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "3465:3:18"
                                  },
                                  "nativeSrc": "3465:13:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3465:13:18"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nativeSrc": "3484:1:18",
                                      "nodeType": "YulLiteral",
                                      "src": "3484:1:18",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nativeSrc": "3480:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "3480:3:18"
                                  },
                                  "nativeSrc": "3480:6:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "3480:6:18"
                                }
                              ],
                              "functionName": {
                                "name": "shift_right_unsigned_dynamic",
                                "nativeSrc": "3436:28:18",
                                "nodeType": "YulIdentifier",
                                "src": "3436:28:18"
                              },
                              "nativeSrc": "3436:51:18",
                              "nodeType": "YulFunctionCall",
                              "src": "3436:51:18"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nativeSrc": "3432:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "3432:3:18"
                          },
                          "nativeSrc": "3432:56:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3432:56:18"
                        },
                        "variables": [
                          {
                            "name": "mask",
                            "nativeSrc": "3424:4:18",
                            "nodeType": "YulTypedName",
                            "src": "3424:4:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "3497:25:18",
                        "nodeType": "YulAssignment",
                        "src": "3497:25:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nativeSrc": "3511:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "3511:4:18"
                            },
                            {
                              "name": "mask",
                              "nativeSrc": "3517:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "3517:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "3507:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "3507:3:18"
                          },
                          "nativeSrc": "3507:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3507:15:18"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "3497:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "3497:6:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "mask_bytes_dynamic",
                  "nativeSrc": "3359:169:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nativeSrc": "3387:4:18",
                      "nodeType": "YulTypedName",
                      "src": "3387:4:18",
                      "type": ""
                    },
                    {
                      "name": "bytes",
                      "nativeSrc": "3393:5:18",
                      "nodeType": "YulTypedName",
                      "src": "3393:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nativeSrc": "3403:6:18",
                      "nodeType": "YulTypedName",
                      "src": "3403:6:18",
                      "type": ""
                    }
                  ],
                  "src": "3359:169:18"
                },
                {
                  "body": {
                    "nativeSrc": "3614:214:18",
                    "nodeType": "YulBlock",
                    "src": "3614:214:18",
                    "statements": [
                      {
                        "nativeSrc": "3747:37:18",
                        "nodeType": "YulAssignment",
                        "src": "3747:37:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nativeSrc": "3774:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "3774:4:18"
                            },
                            {
                              "name": "len",
                              "nativeSrc": "3780:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "3780:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "mask_bytes_dynamic",
                            "nativeSrc": "3755:18:18",
                            "nodeType": "YulIdentifier",
                            "src": "3755:18:18"
                          },
                          "nativeSrc": "3755:29:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3755:29:18"
                        },
                        "variableNames": [
                          {
                            "name": "data",
                            "nativeSrc": "3747:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "3747:4:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "3793:29:18",
                        "nodeType": "YulAssignment",
                        "src": "3793:29:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nativeSrc": "3804:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "3804:4:18"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "3814:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "3814:1:18",
                                  "type": "",
                                  "value": "2"
                                },
                                {
                                  "name": "len",
                                  "nativeSrc": "3817:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3817:3:18"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nativeSrc": "3810:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "3810:3:18"
                              },
                              "nativeSrc": "3810:11:18",
                              "nodeType": "YulFunctionCall",
                              "src": "3810:11:18"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nativeSrc": "3801:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "3801:2:18"
                          },
                          "nativeSrc": "3801:21:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3801:21:18"
                        },
                        "variableNames": [
                          {
                            "name": "used",
                            "nativeSrc": "3793:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "3793:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "extract_used_part_and_set_length_of_short_byte_array",
                  "nativeSrc": "3533:295:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nativeSrc": "3595:4:18",
                      "nodeType": "YulTypedName",
                      "src": "3595:4:18",
                      "type": ""
                    },
                    {
                      "name": "len",
                      "nativeSrc": "3601:3:18",
                      "nodeType": "YulTypedName",
                      "src": "3601:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "used",
                      "nativeSrc": "3609:4:18",
                      "nodeType": "YulTypedName",
                      "src": "3609:4:18",
                      "type": ""
                    }
                  ],
                  "src": "3533:295:18"
                },
                {
                  "body": {
                    "nativeSrc": "3925:1303:18",
                    "nodeType": "YulBlock",
                    "src": "3925:1303:18",
                    "statements": [
                      {
                        "nativeSrc": "3936:51:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "3936:51:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nativeSrc": "3983:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "3983:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "array_length_t_string_memory_ptr",
                            "nativeSrc": "3950:32:18",
                            "nodeType": "YulIdentifier",
                            "src": "3950:32:18"
                          },
                          "nativeSrc": "3950:37:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3950:37:18"
                        },
                        "variables": [
                          {
                            "name": "newLen",
                            "nativeSrc": "3940:6:18",
                            "nodeType": "YulTypedName",
                            "src": "3940:6:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "4072:22:18",
                          "nodeType": "YulBlock",
                          "src": "4072:22:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nativeSrc": "4074:16:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4074:16:18"
                                },
                                "nativeSrc": "4074:18:18",
                                "nodeType": "YulFunctionCall",
                                "src": "4074:18:18"
                              },
                              "nativeSrc": "4074:18:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "4074:18:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "newLen",
                              "nativeSrc": "4044:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "4044:6:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4052:18:18",
                              "nodeType": "YulLiteral",
                              "src": "4052:18:18",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "4041:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "4041:2:18"
                          },
                          "nativeSrc": "4041:30:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4041:30:18"
                        },
                        "nativeSrc": "4038:56:18",
                        "nodeType": "YulIf",
                        "src": "4038:56:18"
                      },
                      {
                        "nativeSrc": "4104:52:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4104:52:18",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nativeSrc": "4150:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4150:4:18"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nativeSrc": "4144:5:18",
                                "nodeType": "YulIdentifier",
                                "src": "4144:5:18"
                              },
                              "nativeSrc": "4144:11:18",
                              "nodeType": "YulFunctionCall",
                              "src": "4144:11:18"
                            }
                          ],
                          "functionName": {
                            "name": "extract_byte_array_length",
                            "nativeSrc": "4118:25:18",
                            "nodeType": "YulIdentifier",
                            "src": "4118:25:18"
                          },
                          "nativeSrc": "4118:38:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4118:38:18"
                        },
                        "variables": [
                          {
                            "name": "oldLen",
                            "nativeSrc": "4108:6:18",
                            "nodeType": "YulTypedName",
                            "src": "4108:6:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "slot",
                              "nativeSrc": "4249:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "4249:4:18"
                            },
                            {
                              "name": "oldLen",
                              "nativeSrc": "4255:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "4255:6:18"
                            },
                            {
                              "name": "newLen",
                              "nativeSrc": "4263:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "4263:6:18"
                            }
                          ],
                          "functionName": {
                            "name": "clean_up_bytearray_end_slots_t_string_storage",
                            "nativeSrc": "4203:45:18",
                            "nodeType": "YulIdentifier",
                            "src": "4203:45:18"
                          },
                          "nativeSrc": "4203:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4203:67:18"
                        },
                        "nativeSrc": "4203:67:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "4203:67:18"
                      },
                      {
                        "nativeSrc": "4280:18:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "4280:18:18",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "4297:1:18",
                          "nodeType": "YulLiteral",
                          "src": "4297:1:18",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "srcOffset",
                            "nativeSrc": "4284:9:18",
                            "nodeType": "YulTypedName",
                            "src": "4284:9:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4308:17:18",
                        "nodeType": "YulAssignment",
                        "src": "4308:17:18",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "4321:4:18",
                          "nodeType": "YulLiteral",
                          "src": "4321:4:18",
                          "type": "",
                          "value": "0x20"
                        },
                        "variableNames": [
                          {
                            "name": "srcOffset",
                            "nativeSrc": "4308:9:18",
                            "nodeType": "YulIdentifier",
                            "src": "4308:9:18"
                          }
                        ]
                      },
                      {
                        "cases": [
                          {
                            "body": {
                              "nativeSrc": "4372:611:18",
                              "nodeType": "YulBlock",
                              "src": "4372:611:18",
                              "statements": [
                                {
                                  "nativeSrc": "4386:37:18",
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "4386:37:18",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "newLen",
                                        "nativeSrc": "4405:6:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "4405:6:18"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nativeSrc": "4417:4:18",
                                            "nodeType": "YulLiteral",
                                            "src": "4417:4:18",
                                            "type": "",
                                            "value": "0x1f"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "not",
                                          "nativeSrc": "4413:3:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "4413:3:18"
                                        },
                                        "nativeSrc": "4413:9:18",
                                        "nodeType": "YulFunctionCall",
                                        "src": "4413:9:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "and",
                                      "nativeSrc": "4401:3:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4401:3:18"
                                    },
                                    "nativeSrc": "4401:22:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "4401:22:18"
                                  },
                                  "variables": [
                                    {
                                      "name": "loopEnd",
                                      "nativeSrc": "4390:7:18",
                                      "nodeType": "YulTypedName",
                                      "src": "4390:7:18",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "nativeSrc": "4437:51:18",
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "4437:51:18",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "slot",
                                        "nativeSrc": "4483:4:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "4483:4:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "array_dataslot_t_string_storage",
                                      "nativeSrc": "4451:31:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4451:31:18"
                                    },
                                    "nativeSrc": "4451:37:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "4451:37:18"
                                  },
                                  "variables": [
                                    {
                                      "name": "dstPtr",
                                      "nativeSrc": "4441:6:18",
                                      "nodeType": "YulTypedName",
                                      "src": "4441:6:18",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "nativeSrc": "4501:10:18",
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "4501:10:18",
                                  "value": {
                                    "kind": "number",
                                    "nativeSrc": "4510:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "4510:1:18",
                                    "type": "",
                                    "value": "0"
                                  },
                                  "variables": [
                                    {
                                      "name": "i",
                                      "nativeSrc": "4505:1:18",
                                      "nodeType": "YulTypedName",
                                      "src": "4505:1:18",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nativeSrc": "4569:163:18",
                                    "nodeType": "YulBlock",
                                    "src": "4569:163:18",
                                    "statements": [
                                      {
                                        "expression": {
                                          "arguments": [
                                            {
                                              "name": "dstPtr",
                                              "nativeSrc": "4594:6:18",
                                              "nodeType": "YulIdentifier",
                                              "src": "4594:6:18"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "arguments": [
                                                    {
                                                      "name": "src",
                                                      "nativeSrc": "4612:3:18",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4612:3:18"
                                                    },
                                                    {
                                                      "name": "srcOffset",
                                                      "nativeSrc": "4617:9:18",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4617:9:18"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "add",
                                                    "nativeSrc": "4608:3:18",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4608:3:18"
                                                  },
                                                  "nativeSrc": "4608:19:18",
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "4608:19:18"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "mload",
                                                "nativeSrc": "4602:5:18",
                                                "nodeType": "YulIdentifier",
                                                "src": "4602:5:18"
                                              },
                                              "nativeSrc": "4602:26:18",
                                              "nodeType": "YulFunctionCall",
                                              "src": "4602:26:18"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "sstore",
                                            "nativeSrc": "4587:6:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4587:6:18"
                                          },
                                          "nativeSrc": "4587:42:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "4587:42:18"
                                        },
                                        "nativeSrc": "4587:42:18",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4587:42:18"
                                      },
                                      {
                                        "nativeSrc": "4646:24:18",
                                        "nodeType": "YulAssignment",
                                        "src": "4646:24:18",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "dstPtr",
                                              "nativeSrc": "4660:6:18",
                                              "nodeType": "YulIdentifier",
                                              "src": "4660:6:18"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "4668:1:18",
                                              "nodeType": "YulLiteral",
                                              "src": "4668:1:18",
                                              "type": "",
                                              "value": "1"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "4656:3:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4656:3:18"
                                          },
                                          "nativeSrc": "4656:14:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "4656:14:18"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "dstPtr",
                                            "nativeSrc": "4646:6:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4646:6:18"
                                          }
                                        ]
                                      },
                                      {
                                        "nativeSrc": "4687:31:18",
                                        "nodeType": "YulAssignment",
                                        "src": "4687:31:18",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "srcOffset",
                                              "nativeSrc": "4704:9:18",
                                              "nodeType": "YulIdentifier",
                                              "src": "4704:9:18"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "4715:2:18",
                                              "nodeType": "YulLiteral",
                                              "src": "4715:2:18",
                                              "type": "",
                                              "value": "32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "4700:3:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4700:3:18"
                                          },
                                          "nativeSrc": "4700:18:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "4700:18:18"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "srcOffset",
                                            "nativeSrc": "4687:9:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4687:9:18"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nativeSrc": "4535:1:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "4535:1:18"
                                      },
                                      {
                                        "name": "loopEnd",
                                        "nativeSrc": "4538:7:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "4538:7:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nativeSrc": "4532:2:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4532:2:18"
                                    },
                                    "nativeSrc": "4532:14:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "4532:14:18"
                                  },
                                  "nativeSrc": "4524:208:18",
                                  "nodeType": "YulForLoop",
                                  "post": {
                                    "nativeSrc": "4547:21:18",
                                    "nodeType": "YulBlock",
                                    "src": "4547:21:18",
                                    "statements": [
                                      {
                                        "nativeSrc": "4549:17:18",
                                        "nodeType": "YulAssignment",
                                        "src": "4549:17:18",
                                        "value": {
                                          "arguments": [
                                            {
                                              "name": "i",
                                              "nativeSrc": "4558:1:18",
                                              "nodeType": "YulIdentifier",
                                              "src": "4558:1:18"
                                            },
                                            {
                                              "kind": "number",
                                              "nativeSrc": "4561:4:18",
                                              "nodeType": "YulLiteral",
                                              "src": "4561:4:18",
                                              "type": "",
                                              "value": "0x20"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nativeSrc": "4554:3:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4554:3:18"
                                          },
                                          "nativeSrc": "4554:12:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "4554:12:18"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "i",
                                            "nativeSrc": "4549:1:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4549:1:18"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "pre": {
                                    "nativeSrc": "4528:3:18",
                                    "nodeType": "YulBlock",
                                    "src": "4528:3:18",
                                    "statements": []
                                  },
                                  "src": "4524:208:18"
                                },
                                {
                                  "body": {
                                    "nativeSrc": "4768:156:18",
                                    "nodeType": "YulBlock",
                                    "src": "4768:156:18",
                                    "statements": [
                                      {
                                        "nativeSrc": "4786:43:18",
                                        "nodeType": "YulVariableDeclaration",
                                        "src": "4786:43:18",
                                        "value": {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nativeSrc": "4813:3:18",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4813:3:18"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nativeSrc": "4818:9:18",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4818:9:18"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nativeSrc": "4809:3:18",
                                                "nodeType": "YulIdentifier",
                                                "src": "4809:3:18"
                                              },
                                              "nativeSrc": "4809:19:18",
                                              "nodeType": "YulFunctionCall",
                                              "src": "4809:19:18"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "4803:5:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4803:5:18"
                                          },
                                          "nativeSrc": "4803:26:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "4803:26:18"
                                        },
                                        "variables": [
                                          {
                                            "name": "lastValue",
                                            "nativeSrc": "4790:9:18",
                                            "nodeType": "YulTypedName",
                                            "src": "4790:9:18",
                                            "type": ""
                                          }
                                        ]
                                      },
                                      {
                                        "expression": {
                                          "arguments": [
                                            {
                                              "name": "dstPtr",
                                              "nativeSrc": "4853:6:18",
                                              "nodeType": "YulIdentifier",
                                              "src": "4853:6:18"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "lastValue",
                                                  "nativeSrc": "4880:9:18",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "4880:9:18"
                                                },
                                                {
                                                  "arguments": [
                                                    {
                                                      "name": "newLen",
                                                      "nativeSrc": "4895:6:18",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "4895:6:18"
                                                    },
                                                    {
                                                      "kind": "number",
                                                      "nativeSrc": "4903:4:18",
                                                      "nodeType": "YulLiteral",
                                                      "src": "4903:4:18",
                                                      "type": "",
                                                      "value": "0x1f"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "and",
                                                    "nativeSrc": "4891:3:18",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4891:3:18"
                                                  },
                                                  "nativeSrc": "4891:17:18",
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "4891:17:18"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "mask_bytes_dynamic",
                                                "nativeSrc": "4861:18:18",
                                                "nodeType": "YulIdentifier",
                                                "src": "4861:18:18"
                                              },
                                              "nativeSrc": "4861:48:18",
                                              "nodeType": "YulFunctionCall",
                                              "src": "4861:48:18"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "sstore",
                                            "nativeSrc": "4846:6:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "4846:6:18"
                                          },
                                          "nativeSrc": "4846:64:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "4846:64:18"
                                        },
                                        "nativeSrc": "4846:64:18",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "4846:64:18"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "arguments": [
                                      {
                                        "name": "loopEnd",
                                        "nativeSrc": "4751:7:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "4751:7:18"
                                      },
                                      {
                                        "name": "newLen",
                                        "nativeSrc": "4760:6:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "4760:6:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "lt",
                                      "nativeSrc": "4748:2:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4748:2:18"
                                    },
                                    "nativeSrc": "4748:19:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "4748:19:18"
                                  },
                                  "nativeSrc": "4745:179:18",
                                  "nodeType": "YulIf",
                                  "src": "4745:179:18"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "slot",
                                        "nativeSrc": "4944:4:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "4944:4:18"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nativeSrc": "4958:6:18",
                                                "nodeType": "YulIdentifier",
                                                "src": "4958:6:18"
                                              },
                                              {
                                                "kind": "number",
                                                "nativeSrc": "4966:1:18",
                                                "nodeType": "YulLiteral",
                                                "src": "4966:1:18",
                                                "type": "",
                                                "value": "2"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "mul",
                                              "nativeSrc": "4954:3:18",
                                              "nodeType": "YulIdentifier",
                                              "src": "4954:3:18"
                                            },
                                            "nativeSrc": "4954:14:18",
                                            "nodeType": "YulFunctionCall",
                                            "src": "4954:14:18"
                                          },
                                          {
                                            "kind": "number",
                                            "nativeSrc": "4970:1:18",
                                            "nodeType": "YulLiteral",
                                            "src": "4970:1:18",
                                            "type": "",
                                            "value": "1"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "4950:3:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "4950:3:18"
                                        },
                                        "nativeSrc": "4950:22:18",
                                        "nodeType": "YulFunctionCall",
                                        "src": "4950:22:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nativeSrc": "4937:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4937:6:18"
                                    },
                                    "nativeSrc": "4937:36:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "4937:36:18"
                                  },
                                  "nativeSrc": "4937:36:18",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "4937:36:18"
                                }
                              ]
                            },
                            "nativeSrc": "4365:618:18",
                            "nodeType": "YulCase",
                            "src": "4365:618:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "4370:1:18",
                              "nodeType": "YulLiteral",
                              "src": "4370:1:18",
                              "type": "",
                              "value": "1"
                            }
                          },
                          {
                            "body": {
                              "nativeSrc": "5000:222:18",
                              "nodeType": "YulBlock",
                              "src": "5000:222:18",
                              "statements": [
                                {
                                  "nativeSrc": "5014:14:18",
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "5014:14:18",
                                  "value": {
                                    "kind": "number",
                                    "nativeSrc": "5027:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "5027:1:18",
                                    "type": "",
                                    "value": "0"
                                  },
                                  "variables": [
                                    {
                                      "name": "value",
                                      "nativeSrc": "5018:5:18",
                                      "nodeType": "YulTypedName",
                                      "src": "5018:5:18",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nativeSrc": "5051:67:18",
                                    "nodeType": "YulBlock",
                                    "src": "5051:67:18",
                                    "statements": [
                                      {
                                        "nativeSrc": "5069:35:18",
                                        "nodeType": "YulAssignment",
                                        "src": "5069:35:18",
                                        "value": {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nativeSrc": "5088:3:18",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5088:3:18"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nativeSrc": "5093:9:18",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "5093:9:18"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nativeSrc": "5084:3:18",
                                                "nodeType": "YulIdentifier",
                                                "src": "5084:3:18"
                                              },
                                              "nativeSrc": "5084:19:18",
                                              "nodeType": "YulFunctionCall",
                                              "src": "5084:19:18"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "5078:5:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "5078:5:18"
                                          },
                                          "nativeSrc": "5078:26:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "5078:26:18"
                                        },
                                        "variableNames": [
                                          {
                                            "name": "value",
                                            "nativeSrc": "5069:5:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "5069:5:18"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "name": "newLen",
                                    "nativeSrc": "5044:6:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "5044:6:18"
                                  },
                                  "nativeSrc": "5041:77:18",
                                  "nodeType": "YulIf",
                                  "src": "5041:77:18"
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "slot",
                                        "nativeSrc": "5138:4:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "5138:4:18"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "value",
                                            "nativeSrc": "5197:5:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "5197:5:18"
                                          },
                                          {
                                            "name": "newLen",
                                            "nativeSrc": "5204:6:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "5204:6:18"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "extract_used_part_and_set_length_of_short_byte_array",
                                          "nativeSrc": "5144:52:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "5144:52:18"
                                        },
                                        "nativeSrc": "5144:67:18",
                                        "nodeType": "YulFunctionCall",
                                        "src": "5144:67:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nativeSrc": "5131:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "5131:6:18"
                                    },
                                    "nativeSrc": "5131:81:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "5131:81:18"
                                  },
                                  "nativeSrc": "5131:81:18",
                                  "nodeType": "YulExpressionStatement",
                                  "src": "5131:81:18"
                                }
                              ]
                            },
                            "nativeSrc": "4992:230:18",
                            "nodeType": "YulCase",
                            "src": "4992:230:18",
                            "value": "default"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "name": "newLen",
                              "nativeSrc": "4345:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "4345:6:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4353:2:18",
                              "nodeType": "YulLiteral",
                              "src": "4353:2:18",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "4342:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "4342:2:18"
                          },
                          "nativeSrc": "4342:14:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4342:14:18"
                        },
                        "nativeSrc": "4335:887:18",
                        "nodeType": "YulSwitch",
                        "src": "4335:887:18"
                      }
                    ]
                  },
                  "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
                  "nativeSrc": "3833:1395:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "slot",
                      "nativeSrc": "3914:4:18",
                      "nodeType": "YulTypedName",
                      "src": "3914:4:18",
                      "type": ""
                    },
                    {
                      "name": "src",
                      "nativeSrc": "3920:3:18",
                      "nodeType": "YulTypedName",
                      "src": "3920:3:18",
                      "type": ""
                    }
                  ],
                  "src": "3833:1395:18"
                }
              ]
            },
            "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
            "id": 18,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "deployedGeneratedSources": [
          {
            "ast": {
              "nativeSrc": "0:19792:18",
              "nodeType": "YulBlock",
              "src": "0:19792:18",
              "statements": [
                {
                  "body": {
                    "nativeSrc": "66:40:18",
                    "nodeType": "YulBlock",
                    "src": "66:40:18",
                    "statements": [
                      {
                        "nativeSrc": "77:22:18",
                        "nodeType": "YulAssignment",
                        "src": "77:22:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "93:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "93:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "87:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "87:5:18"
                          },
                          "nativeSrc": "87:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "87:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nativeSrc": "77:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "77:6:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_length_t_string_memory_ptr",
                  "nativeSrc": "7:99:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "49:5:18",
                      "nodeType": "YulTypedName",
                      "src": "49:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nativeSrc": "59:6:18",
                      "nodeType": "YulTypedName",
                      "src": "59:6:18",
                      "type": ""
                    }
                  ],
                  "src": "7:99:18"
                },
                {
                  "body": {
                    "nativeSrc": "208:73:18",
                    "nodeType": "YulBlock",
                    "src": "208:73:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "225:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "225:3:18"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "230:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "230:6:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "218:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "218:6:18"
                          },
                          "nativeSrc": "218:19:18",
                          "nodeType": "YulFunctionCall",
                          "src": "218:19:18"
                        },
                        "nativeSrc": "218:19:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "218:19:18"
                      },
                      {
                        "nativeSrc": "246:29:18",
                        "nodeType": "YulAssignment",
                        "src": "246:29:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "265:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "265:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "270:4:18",
                              "nodeType": "YulLiteral",
                              "src": "270:4:18",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "261:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "261:3:18"
                          },
                          "nativeSrc": "261:14:18",
                          "nodeType": "YulFunctionCall",
                          "src": "261:14:18"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nativeSrc": "246:11:18",
                            "nodeType": "YulIdentifier",
                            "src": "246:11:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                  "nativeSrc": "112:169:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "180:3:18",
                      "nodeType": "YulTypedName",
                      "src": "180:3:18",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nativeSrc": "185:6:18",
                      "nodeType": "YulTypedName",
                      "src": "185:6:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nativeSrc": "196:11:18",
                      "nodeType": "YulTypedName",
                      "src": "196:11:18",
                      "type": ""
                    }
                  ],
                  "src": "112:169:18"
                },
                {
                  "body": {
                    "nativeSrc": "349:184:18",
                    "nodeType": "YulBlock",
                    "src": "349:184:18",
                    "statements": [
                      {
                        "nativeSrc": "359:10:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "359:10:18",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "368:1:18",
                          "nodeType": "YulLiteral",
                          "src": "368:1:18",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nativeSrc": "363:1:18",
                            "nodeType": "YulTypedName",
                            "src": "363:1:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "428:63:18",
                          "nodeType": "YulBlock",
                          "src": "428:63:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nativeSrc": "453:3:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "453:3:18"
                                      },
                                      {
                                        "name": "i",
                                        "nativeSrc": "458:1:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "458:1:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nativeSrc": "449:3:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "449:3:18"
                                    },
                                    "nativeSrc": "449:11:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "449:11:18"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nativeSrc": "472:3:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "472:3:18"
                                          },
                                          {
                                            "name": "i",
                                            "nativeSrc": "477:1:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "477:1:18"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nativeSrc": "468:3:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "468:3:18"
                                        },
                                        "nativeSrc": "468:11:18",
                                        "nodeType": "YulFunctionCall",
                                        "src": "468:11:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nativeSrc": "462:5:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "462:5:18"
                                    },
                                    "nativeSrc": "462:18:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "462:18:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nativeSrc": "442:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "442:6:18"
                                },
                                "nativeSrc": "442:39:18",
                                "nodeType": "YulFunctionCall",
                                "src": "442:39:18"
                              },
                              "nativeSrc": "442:39:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "442:39:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nativeSrc": "389:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "389:1:18"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "392:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "392:6:18"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nativeSrc": "386:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "386:2:18"
                          },
                          "nativeSrc": "386:13:18",
                          "nodeType": "YulFunctionCall",
                          "src": "386:13:18"
                        },
                        "nativeSrc": "378:113:18",
                        "nodeType": "YulForLoop",
                        "post": {
                          "nativeSrc": "400:19:18",
                          "nodeType": "YulBlock",
                          "src": "400:19:18",
                          "statements": [
                            {
                              "nativeSrc": "402:15:18",
                              "nodeType": "YulAssignment",
                              "src": "402:15:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nativeSrc": "411:1:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "411:1:18"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "414:2:18",
                                    "nodeType": "YulLiteral",
                                    "src": "414:2:18",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nativeSrc": "407:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "407:3:18"
                                },
                                "nativeSrc": "407:10:18",
                                "nodeType": "YulFunctionCall",
                                "src": "407:10:18"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nativeSrc": "402:1:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "402:1:18"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nativeSrc": "382:3:18",
                          "nodeType": "YulBlock",
                          "src": "382:3:18",
                          "statements": []
                        },
                        "src": "378:113:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nativeSrc": "511:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "511:3:18"
                                },
                                {
                                  "name": "length",
                                  "nativeSrc": "516:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "516:6:18"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "507:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "507:3:18"
                              },
                              "nativeSrc": "507:16:18",
                              "nodeType": "YulFunctionCall",
                              "src": "507:16:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "525:1:18",
                              "nodeType": "YulLiteral",
                              "src": "525:1:18",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "500:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "500:6:18"
                          },
                          "nativeSrc": "500:27:18",
                          "nodeType": "YulFunctionCall",
                          "src": "500:27:18"
                        },
                        "nativeSrc": "500:27:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "500:27:18"
                      }
                    ]
                  },
                  "name": "copy_memory_to_memory_with_cleanup",
                  "nativeSrc": "287:246:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nativeSrc": "331:3:18",
                      "nodeType": "YulTypedName",
                      "src": "331:3:18",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nativeSrc": "336:3:18",
                      "nodeType": "YulTypedName",
                      "src": "336:3:18",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nativeSrc": "341:6:18",
                      "nodeType": "YulTypedName",
                      "src": "341:6:18",
                      "type": ""
                    }
                  ],
                  "src": "287:246:18"
                },
                {
                  "body": {
                    "nativeSrc": "587:54:18",
                    "nodeType": "YulBlock",
                    "src": "587:54:18",
                    "statements": [
                      {
                        "nativeSrc": "597:38:18",
                        "nodeType": "YulAssignment",
                        "src": "597:38:18",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "615:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "615:5:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "622:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "622:2:18",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "611:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "611:3:18"
                              },
                              "nativeSrc": "611:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "611:14:18"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nativeSrc": "631:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "631:2:18",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nativeSrc": "627:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "627:3:18"
                              },
                              "nativeSrc": "627:7:18",
                              "nodeType": "YulFunctionCall",
                              "src": "627:7:18"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "607:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "607:3:18"
                          },
                          "nativeSrc": "607:28:18",
                          "nodeType": "YulFunctionCall",
                          "src": "607:28:18"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nativeSrc": "597:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "597:6:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "round_up_to_mul_of_32",
                  "nativeSrc": "539:102:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "570:5:18",
                      "nodeType": "YulTypedName",
                      "src": "570:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nativeSrc": "580:6:18",
                      "nodeType": "YulTypedName",
                      "src": "580:6:18",
                      "type": ""
                    }
                  ],
                  "src": "539:102:18"
                },
                {
                  "body": {
                    "nativeSrc": "739:285:18",
                    "nodeType": "YulBlock",
                    "src": "739:285:18",
                    "statements": [
                      {
                        "nativeSrc": "749:53:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "749:53:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "796:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "796:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "array_length_t_string_memory_ptr",
                            "nativeSrc": "763:32:18",
                            "nodeType": "YulIdentifier",
                            "src": "763:32:18"
                          },
                          "nativeSrc": "763:39:18",
                          "nodeType": "YulFunctionCall",
                          "src": "763:39:18"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nativeSrc": "753:6:18",
                            "nodeType": "YulTypedName",
                            "src": "753:6:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "811:78:18",
                        "nodeType": "YulAssignment",
                        "src": "811:78:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "877:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "877:3:18"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "882:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "882:6:18"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "818:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "818:58:18"
                          },
                          "nativeSrc": "818:71:18",
                          "nodeType": "YulFunctionCall",
                          "src": "818:71:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "811:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "811:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "937:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "937:5:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "944:4:18",
                                  "nodeType": "YulLiteral",
                                  "src": "944:4:18",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "933:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "933:3:18"
                              },
                              "nativeSrc": "933:16:18",
                              "nodeType": "YulFunctionCall",
                              "src": "933:16:18"
                            },
                            {
                              "name": "pos",
                              "nativeSrc": "951:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "951:3:18"
                            },
                            {
                              "name": "length",
                              "nativeSrc": "956:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "956:6:18"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory_with_cleanup",
                            "nativeSrc": "898:34:18",
                            "nodeType": "YulIdentifier",
                            "src": "898:34:18"
                          },
                          "nativeSrc": "898:65:18",
                          "nodeType": "YulFunctionCall",
                          "src": "898:65:18"
                        },
                        "nativeSrc": "898:65:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "898:65:18"
                      },
                      {
                        "nativeSrc": "972:46:18",
                        "nodeType": "YulAssignment",
                        "src": "972:46:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "983:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "983:3:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "1010:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1010:6:18"
                                }
                              ],
                              "functionName": {
                                "name": "round_up_to_mul_of_32",
                                "nativeSrc": "988:21:18",
                                "nodeType": "YulIdentifier",
                                "src": "988:21:18"
                              },
                              "nativeSrc": "988:29:18",
                              "nodeType": "YulFunctionCall",
                              "src": "988:29:18"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "979:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "979:3:18"
                          },
                          "nativeSrc": "979:39:18",
                          "nodeType": "YulFunctionCall",
                          "src": "979:39:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "972:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "972:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "647:377:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "720:5:18",
                      "nodeType": "YulTypedName",
                      "src": "720:5:18",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nativeSrc": "727:3:18",
                      "nodeType": "YulTypedName",
                      "src": "727:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "735:3:18",
                      "nodeType": "YulTypedName",
                      "src": "735:3:18",
                      "type": ""
                    }
                  ],
                  "src": "647:377:18"
                },
                {
                  "body": {
                    "nativeSrc": "1148:195:18",
                    "nodeType": "YulBlock",
                    "src": "1148:195:18",
                    "statements": [
                      {
                        "nativeSrc": "1158:26:18",
                        "nodeType": "YulAssignment",
                        "src": "1158:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "1170:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "1170:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1181:2:18",
                              "nodeType": "YulLiteral",
                              "src": "1181:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "1166:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "1166:3:18"
                          },
                          "nativeSrc": "1166:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1166:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "1158:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "1158:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "1205:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1205:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "1216:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "1216:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "1201:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "1201:3:18"
                              },
                              "nativeSrc": "1201:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "1201:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "1224:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1224:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "1230:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1230:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "1220:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "1220:3:18"
                              },
                              "nativeSrc": "1220:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "1220:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "1194:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "1194:6:18"
                          },
                          "nativeSrc": "1194:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1194:47:18"
                        },
                        "nativeSrc": "1194:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "1194:47:18"
                      },
                      {
                        "nativeSrc": "1250:86:18",
                        "nodeType": "YulAssignment",
                        "src": "1250:86:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nativeSrc": "1322:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "1322:6:18"
                            },
                            {
                              "name": "tail",
                              "nativeSrc": "1331:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "1331:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "1258:63:18",
                            "nodeType": "YulIdentifier",
                            "src": "1258:63:18"
                          },
                          "nativeSrc": "1258:78:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1258:78:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "1250:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "1250:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "1030:313:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "1120:9:18",
                      "nodeType": "YulTypedName",
                      "src": "1120:9:18",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nativeSrc": "1132:6:18",
                      "nodeType": "YulTypedName",
                      "src": "1132:6:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "1143:4:18",
                      "nodeType": "YulTypedName",
                      "src": "1143:4:18",
                      "type": ""
                    }
                  ],
                  "src": "1030:313:18"
                },
                {
                  "body": {
                    "nativeSrc": "1389:35:18",
                    "nodeType": "YulBlock",
                    "src": "1389:35:18",
                    "statements": [
                      {
                        "nativeSrc": "1399:19:18",
                        "nodeType": "YulAssignment",
                        "src": "1399:19:18",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1415:2:18",
                              "nodeType": "YulLiteral",
                              "src": "1415:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nativeSrc": "1409:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "1409:5:18"
                          },
                          "nativeSrc": "1409:9:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1409:9:18"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nativeSrc": "1399:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "1399:6:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "allocate_unbounded",
                  "nativeSrc": "1349:75:18",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "1382:6:18",
                      "nodeType": "YulTypedName",
                      "src": "1382:6:18",
                      "type": ""
                    }
                  ],
                  "src": "1349:75:18"
                },
                {
                  "body": {
                    "nativeSrc": "1519:28:18",
                    "nodeType": "YulBlock",
                    "src": "1519:28:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1536:1:18",
                              "nodeType": "YulLiteral",
                              "src": "1536:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1539:1:18",
                              "nodeType": "YulLiteral",
                              "src": "1539:1:18",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "1529:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "1529:6:18"
                          },
                          "nativeSrc": "1529:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1529:12:18"
                        },
                        "nativeSrc": "1529:12:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "1529:12:18"
                      }
                    ]
                  },
                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                  "nativeSrc": "1430:117:18",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1430:117:18"
                },
                {
                  "body": {
                    "nativeSrc": "1642:28:18",
                    "nodeType": "YulBlock",
                    "src": "1642:28:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "1659:1:18",
                              "nodeType": "YulLiteral",
                              "src": "1659:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1662:1:18",
                              "nodeType": "YulLiteral",
                              "src": "1662:1:18",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "1652:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "1652:6:18"
                          },
                          "nativeSrc": "1652:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1652:12:18"
                        },
                        "nativeSrc": "1652:12:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "1652:12:18"
                      }
                    ]
                  },
                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                  "nativeSrc": "1553:117:18",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1553:117:18"
                },
                {
                  "body": {
                    "nativeSrc": "1721:81:18",
                    "nodeType": "YulBlock",
                    "src": "1721:81:18",
                    "statements": [
                      {
                        "nativeSrc": "1731:65:18",
                        "nodeType": "YulAssignment",
                        "src": "1731:65:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "1746:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "1746:5:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1753:42:18",
                              "nodeType": "YulLiteral",
                              "src": "1753:42:18",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "1742:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "1742:3:18"
                          },
                          "nativeSrc": "1742:54:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1742:54:18"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "1731:7:18",
                            "nodeType": "YulIdentifier",
                            "src": "1731:7:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint160",
                  "nativeSrc": "1676:126:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1703:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1703:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "1713:7:18",
                      "nodeType": "YulTypedName",
                      "src": "1713:7:18",
                      "type": ""
                    }
                  ],
                  "src": "1676:126:18"
                },
                {
                  "body": {
                    "nativeSrc": "1853:51:18",
                    "nodeType": "YulBlock",
                    "src": "1853:51:18",
                    "statements": [
                      {
                        "nativeSrc": "1863:35:18",
                        "nodeType": "YulAssignment",
                        "src": "1863:35:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "1892:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "1892:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint160",
                            "nativeSrc": "1874:17:18",
                            "nodeType": "YulIdentifier",
                            "src": "1874:17:18"
                          },
                          "nativeSrc": "1874:24:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1874:24:18"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "1863:7:18",
                            "nodeType": "YulIdentifier",
                            "src": "1863:7:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_address",
                  "nativeSrc": "1808:96:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1835:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1835:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "1845:7:18",
                      "nodeType": "YulTypedName",
                      "src": "1845:7:18",
                      "type": ""
                    }
                  ],
                  "src": "1808:96:18"
                },
                {
                  "body": {
                    "nativeSrc": "1953:79:18",
                    "nodeType": "YulBlock",
                    "src": "1953:79:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2010:16:18",
                          "nodeType": "YulBlock",
                          "src": "2010:16:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2019:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "2019:1:18",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2022:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "2022:1:18",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "2012:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2012:6:18"
                                },
                                "nativeSrc": "2012:12:18",
                                "nodeType": "YulFunctionCall",
                                "src": "2012:12:18"
                              },
                              "nativeSrc": "2012:12:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "2012:12:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "1976:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "1976:5:18"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nativeSrc": "2001:5:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2001:5:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_address",
                                    "nativeSrc": "1983:17:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "1983:17:18"
                                  },
                                  "nativeSrc": "1983:24:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "1983:24:18"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "1973:2:18",
                                "nodeType": "YulIdentifier",
                                "src": "1973:2:18"
                              },
                              "nativeSrc": "1973:35:18",
                              "nodeType": "YulFunctionCall",
                              "src": "1973:35:18"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "1966:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "1966:6:18"
                          },
                          "nativeSrc": "1966:43:18",
                          "nodeType": "YulFunctionCall",
                          "src": "1966:43:18"
                        },
                        "nativeSrc": "1963:63:18",
                        "nodeType": "YulIf",
                        "src": "1963:63:18"
                      }
                    ]
                  },
                  "name": "validator_revert_t_address",
                  "nativeSrc": "1910:122:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "1946:5:18",
                      "nodeType": "YulTypedName",
                      "src": "1946:5:18",
                      "type": ""
                    }
                  ],
                  "src": "1910:122:18"
                },
                {
                  "body": {
                    "nativeSrc": "2090:87:18",
                    "nodeType": "YulBlock",
                    "src": "2090:87:18",
                    "statements": [
                      {
                        "nativeSrc": "2100:29:18",
                        "nodeType": "YulAssignment",
                        "src": "2100:29:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nativeSrc": "2122:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "2122:6:18"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nativeSrc": "2109:12:18",
                            "nodeType": "YulIdentifier",
                            "src": "2109:12:18"
                          },
                          "nativeSrc": "2109:20:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2109:20:18"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nativeSrc": "2100:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "2100:5:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "2165:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "2165:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_address",
                            "nativeSrc": "2138:26:18",
                            "nodeType": "YulIdentifier",
                            "src": "2138:26:18"
                          },
                          "nativeSrc": "2138:33:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2138:33:18"
                        },
                        "nativeSrc": "2138:33:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "2138:33:18"
                      }
                    ]
                  },
                  "name": "abi_decode_t_address",
                  "nativeSrc": "2038:139:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nativeSrc": "2068:6:18",
                      "nodeType": "YulTypedName",
                      "src": "2068:6:18",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nativeSrc": "2076:3:18",
                      "nodeType": "YulTypedName",
                      "src": "2076:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nativeSrc": "2084:5:18",
                      "nodeType": "YulTypedName",
                      "src": "2084:5:18",
                      "type": ""
                    }
                  ],
                  "src": "2038:139:18"
                },
                {
                  "body": {
                    "nativeSrc": "2228:32:18",
                    "nodeType": "YulBlock",
                    "src": "2228:32:18",
                    "statements": [
                      {
                        "nativeSrc": "2238:16:18",
                        "nodeType": "YulAssignment",
                        "src": "2238:16:18",
                        "value": {
                          "name": "value",
                          "nativeSrc": "2249:5:18",
                          "nodeType": "YulIdentifier",
                          "src": "2249:5:18"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "2238:7:18",
                            "nodeType": "YulIdentifier",
                            "src": "2238:7:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint256",
                  "nativeSrc": "2183:77:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "2210:5:18",
                      "nodeType": "YulTypedName",
                      "src": "2210:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "2220:7:18",
                      "nodeType": "YulTypedName",
                      "src": "2220:7:18",
                      "type": ""
                    }
                  ],
                  "src": "2183:77:18"
                },
                {
                  "body": {
                    "nativeSrc": "2309:79:18",
                    "nodeType": "YulBlock",
                    "src": "2309:79:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2366:16:18",
                          "nodeType": "YulBlock",
                          "src": "2366:16:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2375:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "2375:1:18",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "2378:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "2378:1:18",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nativeSrc": "2368:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2368:6:18"
                                },
                                "nativeSrc": "2368:12:18",
                                "nodeType": "YulFunctionCall",
                                "src": "2368:12:18"
                              },
                              "nativeSrc": "2368:12:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "2368:12:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "2332:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2332:5:18"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nativeSrc": "2357:5:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2357:5:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint256",
                                    "nativeSrc": "2339:17:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2339:17:18"
                                  },
                                  "nativeSrc": "2339:24:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2339:24:18"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nativeSrc": "2329:2:18",
                                "nodeType": "YulIdentifier",
                                "src": "2329:2:18"
                              },
                              "nativeSrc": "2329:35:18",
                              "nodeType": "YulFunctionCall",
                              "src": "2329:35:18"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "2322:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "2322:6:18"
                          },
                          "nativeSrc": "2322:43:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2322:43:18"
                        },
                        "nativeSrc": "2319:63:18",
                        "nodeType": "YulIf",
                        "src": "2319:63:18"
                      }
                    ]
                  },
                  "name": "validator_revert_t_uint256",
                  "nativeSrc": "2266:122:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "2302:5:18",
                      "nodeType": "YulTypedName",
                      "src": "2302:5:18",
                      "type": ""
                    }
                  ],
                  "src": "2266:122:18"
                },
                {
                  "body": {
                    "nativeSrc": "2446:87:18",
                    "nodeType": "YulBlock",
                    "src": "2446:87:18",
                    "statements": [
                      {
                        "nativeSrc": "2456:29:18",
                        "nodeType": "YulAssignment",
                        "src": "2456:29:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nativeSrc": "2478:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "2478:6:18"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nativeSrc": "2465:12:18",
                            "nodeType": "YulIdentifier",
                            "src": "2465:12:18"
                          },
                          "nativeSrc": "2465:20:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2465:20:18"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nativeSrc": "2456:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "2456:5:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "2521:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "2521:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_uint256",
                            "nativeSrc": "2494:26:18",
                            "nodeType": "YulIdentifier",
                            "src": "2494:26:18"
                          },
                          "nativeSrc": "2494:33:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2494:33:18"
                        },
                        "nativeSrc": "2494:33:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "2494:33:18"
                      }
                    ]
                  },
                  "name": "abi_decode_t_uint256",
                  "nativeSrc": "2394:139:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nativeSrc": "2424:6:18",
                      "nodeType": "YulTypedName",
                      "src": "2424:6:18",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nativeSrc": "2432:3:18",
                      "nodeType": "YulTypedName",
                      "src": "2432:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nativeSrc": "2440:5:18",
                      "nodeType": "YulTypedName",
                      "src": "2440:5:18",
                      "type": ""
                    }
                  ],
                  "src": "2394:139:18"
                },
                {
                  "body": {
                    "nativeSrc": "2622:391:18",
                    "nodeType": "YulBlock",
                    "src": "2622:391:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "2668:83:18",
                          "nodeType": "YulBlock",
                          "src": "2668:83:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nativeSrc": "2670:77:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2670:77:18"
                                },
                                "nativeSrc": "2670:79:18",
                                "nodeType": "YulFunctionCall",
                                "src": "2670:79:18"
                              },
                              "nativeSrc": "2670:79:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "2670:79:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "2643:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2643:7:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "2652:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2652:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "2639:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "2639:3:18"
                              },
                              "nativeSrc": "2639:23:18",
                              "nodeType": "YulFunctionCall",
                              "src": "2639:23:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "2664:2:18",
                              "nodeType": "YulLiteral",
                              "src": "2664:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "2635:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "2635:3:18"
                          },
                          "nativeSrc": "2635:32:18",
                          "nodeType": "YulFunctionCall",
                          "src": "2635:32:18"
                        },
                        "nativeSrc": "2632:119:18",
                        "nodeType": "YulIf",
                        "src": "2632:119:18"
                      },
                      {
                        "nativeSrc": "2761:117:18",
                        "nodeType": "YulBlock",
                        "src": "2761:117:18",
                        "statements": [
                          {
                            "nativeSrc": "2776:15:18",
                            "nodeType": "YulVariableDeclaration",
                            "src": "2776:15:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "2790:1:18",
                              "nodeType": "YulLiteral",
                              "src": "2790:1:18",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "2780:6:18",
                                "nodeType": "YulTypedName",
                                "src": "2780:6:18",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "2805:63:18",
                            "nodeType": "YulAssignment",
                            "src": "2805:63:18",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "2840:9:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2840:9:18"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "2851:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2851:6:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "2836:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2836:3:18"
                                  },
                                  "nativeSrc": "2836:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2836:22:18"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "2860:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2860:7:18"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nativeSrc": "2815:20:18",
                                "nodeType": "YulIdentifier",
                                "src": "2815:20:18"
                              },
                              "nativeSrc": "2815:53:18",
                              "nodeType": "YulFunctionCall",
                              "src": "2815:53:18"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nativeSrc": "2805:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "2805:6:18"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nativeSrc": "2888:118:18",
                        "nodeType": "YulBlock",
                        "src": "2888:118:18",
                        "statements": [
                          {
                            "nativeSrc": "2903:16:18",
                            "nodeType": "YulVariableDeclaration",
                            "src": "2903:16:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "2917:2:18",
                              "nodeType": "YulLiteral",
                              "src": "2917:2:18",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "2907:6:18",
                                "nodeType": "YulTypedName",
                                "src": "2907:6:18",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "2933:63:18",
                            "nodeType": "YulAssignment",
                            "src": "2933:63:18",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "2968:9:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2968:9:18"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "2979:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "2979:6:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "2964:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "2964:3:18"
                                  },
                                  "nativeSrc": "2964:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "2964:22:18"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "2988:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "2988:7:18"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nativeSrc": "2943:20:18",
                                "nodeType": "YulIdentifier",
                                "src": "2943:20:18"
                              },
                              "nativeSrc": "2943:53:18",
                              "nodeType": "YulFunctionCall",
                              "src": "2943:53:18"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nativeSrc": "2933:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "2933:6:18"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_uint256",
                  "nativeSrc": "2539:474:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "2584:9:18",
                      "nodeType": "YulTypedName",
                      "src": "2584:9:18",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nativeSrc": "2595:7:18",
                      "nodeType": "YulTypedName",
                      "src": "2595:7:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nativeSrc": "2607:6:18",
                      "nodeType": "YulTypedName",
                      "src": "2607:6:18",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nativeSrc": "2615:6:18",
                      "nodeType": "YulTypedName",
                      "src": "2615:6:18",
                      "type": ""
                    }
                  ],
                  "src": "2539:474:18"
                },
                {
                  "body": {
                    "nativeSrc": "3061:48:18",
                    "nodeType": "YulBlock",
                    "src": "3061:48:18",
                    "statements": [
                      {
                        "nativeSrc": "3071:32:18",
                        "nodeType": "YulAssignment",
                        "src": "3071:32:18",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "3096:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3096:5:18"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nativeSrc": "3089:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "3089:6:18"
                              },
                              "nativeSrc": "3089:13:18",
                              "nodeType": "YulFunctionCall",
                              "src": "3089:13:18"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "3082:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "3082:6:18"
                          },
                          "nativeSrc": "3082:21:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3082:21:18"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "3071:7:18",
                            "nodeType": "YulIdentifier",
                            "src": "3071:7:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_bool",
                  "nativeSrc": "3019:90:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "3043:5:18",
                      "nodeType": "YulTypedName",
                      "src": "3043:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "3053:7:18",
                      "nodeType": "YulTypedName",
                      "src": "3053:7:18",
                      "type": ""
                    }
                  ],
                  "src": "3019:90:18"
                },
                {
                  "body": {
                    "nativeSrc": "3174:50:18",
                    "nodeType": "YulBlock",
                    "src": "3174:50:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "3191:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "3191:3:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "3211:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3211:5:18"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nativeSrc": "3196:14:18",
                                "nodeType": "YulIdentifier",
                                "src": "3196:14:18"
                              },
                              "nativeSrc": "3196:21:18",
                              "nodeType": "YulFunctionCall",
                              "src": "3196:21:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3184:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "3184:6:18"
                          },
                          "nativeSrc": "3184:34:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3184:34:18"
                        },
                        "nativeSrc": "3184:34:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "3184:34:18"
                      }
                    ]
                  },
                  "name": "abi_encode_t_bool_to_t_bool_fromStack",
                  "nativeSrc": "3115:109:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "3162:5:18",
                      "nodeType": "YulTypedName",
                      "src": "3162:5:18",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nativeSrc": "3169:3:18",
                      "nodeType": "YulTypedName",
                      "src": "3169:3:18",
                      "type": ""
                    }
                  ],
                  "src": "3115:109:18"
                },
                {
                  "body": {
                    "nativeSrc": "3322:118:18",
                    "nodeType": "YulBlock",
                    "src": "3322:118:18",
                    "statements": [
                      {
                        "nativeSrc": "3332:26:18",
                        "nodeType": "YulAssignment",
                        "src": "3332:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "3344:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "3344:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3355:2:18",
                              "nodeType": "YulLiteral",
                              "src": "3355:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "3340:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "3340:3:18"
                          },
                          "nativeSrc": "3340:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3340:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "3332:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "3332:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nativeSrc": "3406:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "3406:6:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "3419:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3419:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3430:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "3430:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3415:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "3415:3:18"
                              },
                              "nativeSrc": "3415:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "3415:17:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_bool_to_t_bool_fromStack",
                            "nativeSrc": "3368:37:18",
                            "nodeType": "YulIdentifier",
                            "src": "3368:37:18"
                          },
                          "nativeSrc": "3368:65:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3368:65:18"
                        },
                        "nativeSrc": "3368:65:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "3368:65:18"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                  "nativeSrc": "3230:210:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "3294:9:18",
                      "nodeType": "YulTypedName",
                      "src": "3294:9:18",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nativeSrc": "3306:6:18",
                      "nodeType": "YulTypedName",
                      "src": "3306:6:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "3317:4:18",
                      "nodeType": "YulTypedName",
                      "src": "3317:4:18",
                      "type": ""
                    }
                  ],
                  "src": "3230:210:18"
                },
                {
                  "body": {
                    "nativeSrc": "3511:53:18",
                    "nodeType": "YulBlock",
                    "src": "3511:53:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "3528:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "3528:3:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "3551:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3551:5:18"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nativeSrc": "3533:17:18",
                                "nodeType": "YulIdentifier",
                                "src": "3533:17:18"
                              },
                              "nativeSrc": "3533:24:18",
                              "nodeType": "YulFunctionCall",
                              "src": "3533:24:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "3521:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "3521:6:18"
                          },
                          "nativeSrc": "3521:37:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3521:37:18"
                        },
                        "nativeSrc": "3521:37:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "3521:37:18"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                  "nativeSrc": "3446:118:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "3499:5:18",
                      "nodeType": "YulTypedName",
                      "src": "3499:5:18",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nativeSrc": "3506:3:18",
                      "nodeType": "YulTypedName",
                      "src": "3506:3:18",
                      "type": ""
                    }
                  ],
                  "src": "3446:118:18"
                },
                {
                  "body": {
                    "nativeSrc": "3668:124:18",
                    "nodeType": "YulBlock",
                    "src": "3668:124:18",
                    "statements": [
                      {
                        "nativeSrc": "3678:26:18",
                        "nodeType": "YulAssignment",
                        "src": "3678:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "3690:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "3690:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3701:2:18",
                              "nodeType": "YulLiteral",
                              "src": "3701:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "3686:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "3686:3:18"
                          },
                          "nativeSrc": "3686:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3686:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "3678:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "3678:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nativeSrc": "3758:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "3758:6:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "3771:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3771:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "3782:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "3782:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "3767:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "3767:3:18"
                              },
                              "nativeSrc": "3767:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "3767:17:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nativeSrc": "3714:43:18",
                            "nodeType": "YulIdentifier",
                            "src": "3714:43:18"
                          },
                          "nativeSrc": "3714:71:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3714:71:18"
                        },
                        "nativeSrc": "3714:71:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "3714:71:18"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                  "nativeSrc": "3570:222:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "3640:9:18",
                      "nodeType": "YulTypedName",
                      "src": "3640:9:18",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nativeSrc": "3652:6:18",
                      "nodeType": "YulTypedName",
                      "src": "3652:6:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "3663:4:18",
                      "nodeType": "YulTypedName",
                      "src": "3663:4:18",
                      "type": ""
                    }
                  ],
                  "src": "3570:222:18"
                },
                {
                  "body": {
                    "nativeSrc": "3898:519:18",
                    "nodeType": "YulBlock",
                    "src": "3898:519:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "3944:83:18",
                          "nodeType": "YulBlock",
                          "src": "3944:83:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nativeSrc": "3946:77:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3946:77:18"
                                },
                                "nativeSrc": "3946:79:18",
                                "nodeType": "YulFunctionCall",
                                "src": "3946:79:18"
                              },
                              "nativeSrc": "3946:79:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "3946:79:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "3919:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3919:7:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "3928:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "3928:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "3915:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "3915:3:18"
                              },
                              "nativeSrc": "3915:23:18",
                              "nodeType": "YulFunctionCall",
                              "src": "3915:23:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3940:2:18",
                              "nodeType": "YulLiteral",
                              "src": "3940:2:18",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "3911:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "3911:3:18"
                          },
                          "nativeSrc": "3911:32:18",
                          "nodeType": "YulFunctionCall",
                          "src": "3911:32:18"
                        },
                        "nativeSrc": "3908:119:18",
                        "nodeType": "YulIf",
                        "src": "3908:119:18"
                      },
                      {
                        "nativeSrc": "4037:117:18",
                        "nodeType": "YulBlock",
                        "src": "4037:117:18",
                        "statements": [
                          {
                            "nativeSrc": "4052:15:18",
                            "nodeType": "YulVariableDeclaration",
                            "src": "4052:15:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "4066:1:18",
                              "nodeType": "YulLiteral",
                              "src": "4066:1:18",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "4056:6:18",
                                "nodeType": "YulTypedName",
                                "src": "4056:6:18",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "4081:63:18",
                            "nodeType": "YulAssignment",
                            "src": "4081:63:18",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "4116:9:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4116:9:18"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "4127:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4127:6:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "4112:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "4112:3:18"
                                  },
                                  "nativeSrc": "4112:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4112:22:18"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "4136:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4136:7:18"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nativeSrc": "4091:20:18",
                                "nodeType": "YulIdentifier",
                                "src": "4091:20:18"
                              },
                              "nativeSrc": "4091:53:18",
                              "nodeType": "YulFunctionCall",
                              "src": "4091:53:18"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nativeSrc": "4081:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "4081:6:18"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4164:118:18",
                        "nodeType": "YulBlock",
                        "src": "4164:118:18",
                        "statements": [
                          {
                            "nativeSrc": "4179:16:18",
                            "nodeType": "YulVariableDeclaration",
                            "src": "4179:16:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "4193:2:18",
                              "nodeType": "YulLiteral",
                              "src": "4193:2:18",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "4183:6:18",
                                "nodeType": "YulTypedName",
                                "src": "4183:6:18",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "4209:63:18",
                            "nodeType": "YulAssignment",
                            "src": "4209:63:18",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "4244:9:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4244:9:18"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "4255:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4255:6:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "4240:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "4240:3:18"
                                  },
                                  "nativeSrc": "4240:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4240:22:18"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "4264:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4264:7:18"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nativeSrc": "4219:20:18",
                                "nodeType": "YulIdentifier",
                                "src": "4219:20:18"
                              },
                              "nativeSrc": "4219:53:18",
                              "nodeType": "YulFunctionCall",
                              "src": "4219:53:18"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nativeSrc": "4209:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "4209:6:18"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nativeSrc": "4292:118:18",
                        "nodeType": "YulBlock",
                        "src": "4292:118:18",
                        "statements": [
                          {
                            "nativeSrc": "4307:16:18",
                            "nodeType": "YulVariableDeclaration",
                            "src": "4307:16:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "4321:2:18",
                              "nodeType": "YulLiteral",
                              "src": "4321:2:18",
                              "type": "",
                              "value": "64"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "4311:6:18",
                                "nodeType": "YulTypedName",
                                "src": "4311:6:18",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "4337:63:18",
                            "nodeType": "YulAssignment",
                            "src": "4337:63:18",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "4372:9:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4372:9:18"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "4383:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "4383:6:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "4368:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "4368:3:18"
                                  },
                                  "nativeSrc": "4368:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "4368:22:18"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "4392:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4392:7:18"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nativeSrc": "4347:20:18",
                                "nodeType": "YulIdentifier",
                                "src": "4347:20:18"
                              },
                              "nativeSrc": "4347:53:18",
                              "nodeType": "YulFunctionCall",
                              "src": "4347:53:18"
                            },
                            "variableNames": [
                              {
                                "name": "value2",
                                "nativeSrc": "4337:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "4337:6:18"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_addresst_uint256",
                  "nativeSrc": "3798:619:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "3852:9:18",
                      "nodeType": "YulTypedName",
                      "src": "3852:9:18",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nativeSrc": "3863:7:18",
                      "nodeType": "YulTypedName",
                      "src": "3863:7:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nativeSrc": "3875:6:18",
                      "nodeType": "YulTypedName",
                      "src": "3875:6:18",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nativeSrc": "3883:6:18",
                      "nodeType": "YulTypedName",
                      "src": "3883:6:18",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nativeSrc": "3891:6:18",
                      "nodeType": "YulTypedName",
                      "src": "3891:6:18",
                      "type": ""
                    }
                  ],
                  "src": "3798:619:18"
                },
                {
                  "body": {
                    "nativeSrc": "4466:43:18",
                    "nodeType": "YulBlock",
                    "src": "4466:43:18",
                    "statements": [
                      {
                        "nativeSrc": "4476:27:18",
                        "nodeType": "YulAssignment",
                        "src": "4476:27:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "4491:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "4491:5:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4498:4:18",
                              "nodeType": "YulLiteral",
                              "src": "4498:4:18",
                              "type": "",
                              "value": "0xff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "4487:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "4487:3:18"
                          },
                          "nativeSrc": "4487:16:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4487:16:18"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nativeSrc": "4476:7:18",
                            "nodeType": "YulIdentifier",
                            "src": "4476:7:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint8",
                  "nativeSrc": "4423:86:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "4448:5:18",
                      "nodeType": "YulTypedName",
                      "src": "4448:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nativeSrc": "4458:7:18",
                      "nodeType": "YulTypedName",
                      "src": "4458:7:18",
                      "type": ""
                    }
                  ],
                  "src": "4423:86:18"
                },
                {
                  "body": {
                    "nativeSrc": "4576:51:18",
                    "nodeType": "YulBlock",
                    "src": "4576:51:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "4593:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "4593:3:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "4614:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4614:5:18"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint8",
                                "nativeSrc": "4598:15:18",
                                "nodeType": "YulIdentifier",
                                "src": "4598:15:18"
                              },
                              "nativeSrc": "4598:22:18",
                              "nodeType": "YulFunctionCall",
                              "src": "4598:22:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "4586:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "4586:6:18"
                          },
                          "nativeSrc": "4586:35:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4586:35:18"
                        },
                        "nativeSrc": "4586:35:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "4586:35:18"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                  "nativeSrc": "4515:112:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "4564:5:18",
                      "nodeType": "YulTypedName",
                      "src": "4564:5:18",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nativeSrc": "4571:3:18",
                      "nodeType": "YulTypedName",
                      "src": "4571:3:18",
                      "type": ""
                    }
                  ],
                  "src": "4515:112:18"
                },
                {
                  "body": {
                    "nativeSrc": "4727:120:18",
                    "nodeType": "YulBlock",
                    "src": "4727:120:18",
                    "statements": [
                      {
                        "nativeSrc": "4737:26:18",
                        "nodeType": "YulAssignment",
                        "src": "4737:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "4749:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "4749:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4760:2:18",
                              "nodeType": "YulLiteral",
                              "src": "4760:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4745:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "4745:3:18"
                          },
                          "nativeSrc": "4745:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4745:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "4737:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "4737:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nativeSrc": "4813:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "4813:6:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "4826:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4826:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "4837:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "4837:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "4822:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "4822:3:18"
                              },
                              "nativeSrc": "4822:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "4822:17:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                            "nativeSrc": "4773:39:18",
                            "nodeType": "YulIdentifier",
                            "src": "4773:39:18"
                          },
                          "nativeSrc": "4773:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4773:67:18"
                        },
                        "nativeSrc": "4773:67:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "4773:67:18"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                  "nativeSrc": "4633:214:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "4699:9:18",
                      "nodeType": "YulTypedName",
                      "src": "4699:9:18",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nativeSrc": "4711:6:18",
                      "nodeType": "YulTypedName",
                      "src": "4711:6:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "4722:4:18",
                      "nodeType": "YulTypedName",
                      "src": "4722:4:18",
                      "type": ""
                    }
                  ],
                  "src": "4633:214:18"
                },
                {
                  "body": {
                    "nativeSrc": "4919:263:18",
                    "nodeType": "YulBlock",
                    "src": "4919:263:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "4965:83:18",
                          "nodeType": "YulBlock",
                          "src": "4965:83:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nativeSrc": "4967:77:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4967:77:18"
                                },
                                "nativeSrc": "4967:79:18",
                                "nodeType": "YulFunctionCall",
                                "src": "4967:79:18"
                              },
                              "nativeSrc": "4967:79:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "4967:79:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "4940:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4940:7:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "4949:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "4949:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "4936:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "4936:3:18"
                              },
                              "nativeSrc": "4936:23:18",
                              "nodeType": "YulFunctionCall",
                              "src": "4936:23:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4961:2:18",
                              "nodeType": "YulLiteral",
                              "src": "4961:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "4932:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "4932:3:18"
                          },
                          "nativeSrc": "4932:32:18",
                          "nodeType": "YulFunctionCall",
                          "src": "4932:32:18"
                        },
                        "nativeSrc": "4929:119:18",
                        "nodeType": "YulIf",
                        "src": "4929:119:18"
                      },
                      {
                        "nativeSrc": "5058:117:18",
                        "nodeType": "YulBlock",
                        "src": "5058:117:18",
                        "statements": [
                          {
                            "nativeSrc": "5073:15:18",
                            "nodeType": "YulVariableDeclaration",
                            "src": "5073:15:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "5087:1:18",
                              "nodeType": "YulLiteral",
                              "src": "5087:1:18",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "5077:6:18",
                                "nodeType": "YulTypedName",
                                "src": "5077:6:18",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "5102:63:18",
                            "nodeType": "YulAssignment",
                            "src": "5102:63:18",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "5137:9:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "5137:9:18"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "5148:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "5148:6:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "5133:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "5133:3:18"
                                  },
                                  "nativeSrc": "5133:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5133:22:18"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "5157:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "5157:7:18"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nativeSrc": "5112:20:18",
                                "nodeType": "YulIdentifier",
                                "src": "5112:20:18"
                              },
                              "nativeSrc": "5112:53:18",
                              "nodeType": "YulFunctionCall",
                              "src": "5112:53:18"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nativeSrc": "5102:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "5102:6:18"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_address",
                  "nativeSrc": "4853:329:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "4889:9:18",
                      "nodeType": "YulTypedName",
                      "src": "4889:9:18",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nativeSrc": "4900:7:18",
                      "nodeType": "YulTypedName",
                      "src": "4900:7:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nativeSrc": "4912:6:18",
                      "nodeType": "YulTypedName",
                      "src": "4912:6:18",
                      "type": ""
                    }
                  ],
                  "src": "4853:329:18"
                },
                {
                  "body": {
                    "nativeSrc": "5253:53:18",
                    "nodeType": "YulBlock",
                    "src": "5253:53:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "5270:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "5270:3:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "5293:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "5293:5:18"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nativeSrc": "5275:17:18",
                                "nodeType": "YulIdentifier",
                                "src": "5275:17:18"
                              },
                              "nativeSrc": "5275:24:18",
                              "nodeType": "YulFunctionCall",
                              "src": "5275:24:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "5263:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "5263:6:18"
                          },
                          "nativeSrc": "5263:37:18",
                          "nodeType": "YulFunctionCall",
                          "src": "5263:37:18"
                        },
                        "nativeSrc": "5263:37:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "5263:37:18"
                      }
                    ]
                  },
                  "name": "abi_encode_t_address_to_t_address_fromStack",
                  "nativeSrc": "5188:118:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "5241:5:18",
                      "nodeType": "YulTypedName",
                      "src": "5241:5:18",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nativeSrc": "5248:3:18",
                      "nodeType": "YulTypedName",
                      "src": "5248:3:18",
                      "type": ""
                    }
                  ],
                  "src": "5188:118:18"
                },
                {
                  "body": {
                    "nativeSrc": "5410:124:18",
                    "nodeType": "YulBlock",
                    "src": "5410:124:18",
                    "statements": [
                      {
                        "nativeSrc": "5420:26:18",
                        "nodeType": "YulAssignment",
                        "src": "5420:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "5432:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "5432:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5443:2:18",
                              "nodeType": "YulLiteral",
                              "src": "5443:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5428:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "5428:3:18"
                          },
                          "nativeSrc": "5428:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "5428:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "5420:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "5420:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nativeSrc": "5500:6:18",
                              "nodeType": "YulIdentifier",
                              "src": "5500:6:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "5513:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "5513:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "5524:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "5524:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "5509:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "5509:3:18"
                              },
                              "nativeSrc": "5509:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "5509:17:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_address_to_t_address_fromStack",
                            "nativeSrc": "5456:43:18",
                            "nodeType": "YulIdentifier",
                            "src": "5456:43:18"
                          },
                          "nativeSrc": "5456:71:18",
                          "nodeType": "YulFunctionCall",
                          "src": "5456:71:18"
                        },
                        "nativeSrc": "5456:71:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "5456:71:18"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                  "nativeSrc": "5312:222:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "5382:9:18",
                      "nodeType": "YulTypedName",
                      "src": "5382:9:18",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nativeSrc": "5394:6:18",
                      "nodeType": "YulTypedName",
                      "src": "5394:6:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "5405:4:18",
                      "nodeType": "YulTypedName",
                      "src": "5405:4:18",
                      "type": ""
                    }
                  ],
                  "src": "5312:222:18"
                },
                {
                  "body": {
                    "nativeSrc": "5623:391:18",
                    "nodeType": "YulBlock",
                    "src": "5623:391:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "5669:83:18",
                          "nodeType": "YulBlock",
                          "src": "5669:83:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nativeSrc": "5671:77:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "5671:77:18"
                                },
                                "nativeSrc": "5671:79:18",
                                "nodeType": "YulFunctionCall",
                                "src": "5671:79:18"
                              },
                              "nativeSrc": "5671:79:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "5671:79:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "5644:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "5644:7:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "5653:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "5653:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "5640:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "5640:3:18"
                              },
                              "nativeSrc": "5640:23:18",
                              "nodeType": "YulFunctionCall",
                              "src": "5640:23:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5665:2:18",
                              "nodeType": "YulLiteral",
                              "src": "5665:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nativeSrc": "5636:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "5636:3:18"
                          },
                          "nativeSrc": "5636:32:18",
                          "nodeType": "YulFunctionCall",
                          "src": "5636:32:18"
                        },
                        "nativeSrc": "5633:119:18",
                        "nodeType": "YulIf",
                        "src": "5633:119:18"
                      },
                      {
                        "nativeSrc": "5762:117:18",
                        "nodeType": "YulBlock",
                        "src": "5762:117:18",
                        "statements": [
                          {
                            "nativeSrc": "5777:15:18",
                            "nodeType": "YulVariableDeclaration",
                            "src": "5777:15:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "5791:1:18",
                              "nodeType": "YulLiteral",
                              "src": "5791:1:18",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "5781:6:18",
                                "nodeType": "YulTypedName",
                                "src": "5781:6:18",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "5806:63:18",
                            "nodeType": "YulAssignment",
                            "src": "5806:63:18",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "5841:9:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "5841:9:18"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "5852:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "5852:6:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "5837:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "5837:3:18"
                                  },
                                  "nativeSrc": "5837:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5837:22:18"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "5861:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "5861:7:18"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nativeSrc": "5816:20:18",
                                "nodeType": "YulIdentifier",
                                "src": "5816:20:18"
                              },
                              "nativeSrc": "5816:53:18",
                              "nodeType": "YulFunctionCall",
                              "src": "5816:53:18"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nativeSrc": "5806:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "5806:6:18"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nativeSrc": "5889:118:18",
                        "nodeType": "YulBlock",
                        "src": "5889:118:18",
                        "statements": [
                          {
                            "nativeSrc": "5904:16:18",
                            "nodeType": "YulVariableDeclaration",
                            "src": "5904:16:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "5918:2:18",
                              "nodeType": "YulLiteral",
                              "src": "5918:2:18",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nativeSrc": "5908:6:18",
                                "nodeType": "YulTypedName",
                                "src": "5908:6:18",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nativeSrc": "5934:63:18",
                            "nodeType": "YulAssignment",
                            "src": "5934:63:18",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nativeSrc": "5969:9:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "5969:9:18"
                                    },
                                    {
                                      "name": "offset",
                                      "nativeSrc": "5980:6:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "5980:6:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nativeSrc": "5965:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "5965:3:18"
                                  },
                                  "nativeSrc": "5965:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "5965:22:18"
                                },
                                {
                                  "name": "dataEnd",
                                  "nativeSrc": "5989:7:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "5989:7:18"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nativeSrc": "5944:20:18",
                                "nodeType": "YulIdentifier",
                                "src": "5944:20:18"
                              },
                              "nativeSrc": "5944:53:18",
                              "nodeType": "YulFunctionCall",
                              "src": "5944:53:18"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nativeSrc": "5934:6:18",
                                "nodeType": "YulIdentifier",
                                "src": "5934:6:18"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_address",
                  "nativeSrc": "5540:474:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "5585:9:18",
                      "nodeType": "YulTypedName",
                      "src": "5585:9:18",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nativeSrc": "5596:7:18",
                      "nodeType": "YulTypedName",
                      "src": "5596:7:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nativeSrc": "5608:6:18",
                      "nodeType": "YulTypedName",
                      "src": "5608:6:18",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nativeSrc": "5616:6:18",
                      "nodeType": "YulTypedName",
                      "src": "5616:6:18",
                      "type": ""
                    }
                  ],
                  "src": "5540:474:18"
                },
                {
                  "body": {
                    "nativeSrc": "6048:152:18",
                    "nodeType": "YulBlock",
                    "src": "6048:152:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6065:1:18",
                              "nodeType": "YulLiteral",
                              "src": "6065:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6068:77:18",
                              "nodeType": "YulLiteral",
                              "src": "6068:77:18",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6058:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "6058:6:18"
                          },
                          "nativeSrc": "6058:88:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6058:88:18"
                        },
                        "nativeSrc": "6058:88:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "6058:88:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6162:1:18",
                              "nodeType": "YulLiteral",
                              "src": "6162:1:18",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6165:4:18",
                              "nodeType": "YulLiteral",
                              "src": "6165:4:18",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6155:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "6155:6:18"
                          },
                          "nativeSrc": "6155:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6155:15:18"
                        },
                        "nativeSrc": "6155:15:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "6155:15:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6186:1:18",
                              "nodeType": "YulLiteral",
                              "src": "6186:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6189:4:18",
                              "nodeType": "YulLiteral",
                              "src": "6189:4:18",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "6179:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "6179:6:18"
                          },
                          "nativeSrc": "6179:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6179:15:18"
                        },
                        "nativeSrc": "6179:15:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "6179:15:18"
                      }
                    ]
                  },
                  "name": "panic_error_0x22",
                  "nativeSrc": "6020:180:18",
                  "nodeType": "YulFunctionDefinition",
                  "src": "6020:180:18"
                },
                {
                  "body": {
                    "nativeSrc": "6257:269:18",
                    "nodeType": "YulBlock",
                    "src": "6257:269:18",
                    "statements": [
                      {
                        "nativeSrc": "6267:22:18",
                        "nodeType": "YulAssignment",
                        "src": "6267:22:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nativeSrc": "6281:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "6281:4:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6287:1:18",
                              "nodeType": "YulLiteral",
                              "src": "6287:1:18",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nativeSrc": "6277:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "6277:3:18"
                          },
                          "nativeSrc": "6277:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6277:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nativeSrc": "6267:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "6267:6:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "6298:38:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "6298:38:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nativeSrc": "6328:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "6328:4:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6334:1:18",
                              "nodeType": "YulLiteral",
                              "src": "6334:1:18",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nativeSrc": "6324:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "6324:3:18"
                          },
                          "nativeSrc": "6324:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6324:12:18"
                        },
                        "variables": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nativeSrc": "6302:18:18",
                            "nodeType": "YulTypedName",
                            "src": "6302:18:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "6375:51:18",
                          "nodeType": "YulBlock",
                          "src": "6375:51:18",
                          "statements": [
                            {
                              "nativeSrc": "6389:27:18",
                              "nodeType": "YulAssignment",
                              "src": "6389:27:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nativeSrc": "6403:6:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "6403:6:18"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "6411:4:18",
                                    "nodeType": "YulLiteral",
                                    "src": "6411:4:18",
                                    "type": "",
                                    "value": "0x7f"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "6399:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "6399:3:18"
                                },
                                "nativeSrc": "6399:17:18",
                                "nodeType": "YulFunctionCall",
                                "src": "6399:17:18"
                              },
                              "variableNames": [
                                {
                                  "name": "length",
                                  "nativeSrc": "6389:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "6389:6:18"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nativeSrc": "6355:18:18",
                              "nodeType": "YulIdentifier",
                              "src": "6355:18:18"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "6348:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "6348:6:18"
                          },
                          "nativeSrc": "6348:26:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6348:26:18"
                        },
                        "nativeSrc": "6345:81:18",
                        "nodeType": "YulIf",
                        "src": "6345:81:18"
                      },
                      {
                        "body": {
                          "nativeSrc": "6478:42:18",
                          "nodeType": "YulBlock",
                          "src": "6478:42:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x22",
                                  "nativeSrc": "6492:16:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "6492:16:18"
                                },
                                "nativeSrc": "6492:18:18",
                                "nodeType": "YulFunctionCall",
                                "src": "6492:18:18"
                              },
                              "nativeSrc": "6492:18:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "6492:18:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nativeSrc": "6442:18:18",
                              "nodeType": "YulIdentifier",
                              "src": "6442:18:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nativeSrc": "6465:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "6465:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "6473:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "6473:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nativeSrc": "6462:2:18",
                                "nodeType": "YulIdentifier",
                                "src": "6462:2:18"
                              },
                              "nativeSrc": "6462:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "6462:14:18"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "6439:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "6439:2:18"
                          },
                          "nativeSrc": "6439:38:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6439:38:18"
                        },
                        "nativeSrc": "6436:84:18",
                        "nodeType": "YulIf",
                        "src": "6436:84:18"
                      }
                    ]
                  },
                  "name": "extract_byte_array_length",
                  "nativeSrc": "6206:320:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nativeSrc": "6241:4:18",
                      "nodeType": "YulTypedName",
                      "src": "6241:4:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nativeSrc": "6250:6:18",
                      "nodeType": "YulTypedName",
                      "src": "6250:6:18",
                      "type": ""
                    }
                  ],
                  "src": "6206:320:18"
                },
                {
                  "body": {
                    "nativeSrc": "6560:152:18",
                    "nodeType": "YulBlock",
                    "src": "6560:152:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6577:1:18",
                              "nodeType": "YulLiteral",
                              "src": "6577:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6580:77:18",
                              "nodeType": "YulLiteral",
                              "src": "6580:77:18",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6570:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "6570:6:18"
                          },
                          "nativeSrc": "6570:88:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6570:88:18"
                        },
                        "nativeSrc": "6570:88:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "6570:88:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6674:1:18",
                              "nodeType": "YulLiteral",
                              "src": "6674:1:18",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6677:4:18",
                              "nodeType": "YulLiteral",
                              "src": "6677:4:18",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "6667:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "6667:6:18"
                          },
                          "nativeSrc": "6667:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6667:15:18"
                        },
                        "nativeSrc": "6667:15:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "6667:15:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "6698:1:18",
                              "nodeType": "YulLiteral",
                              "src": "6698:1:18",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6701:4:18",
                              "nodeType": "YulLiteral",
                              "src": "6701:4:18",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nativeSrc": "6691:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "6691:6:18"
                          },
                          "nativeSrc": "6691:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6691:15:18"
                        },
                        "nativeSrc": "6691:15:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "6691:15:18"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nativeSrc": "6532:180:18",
                  "nodeType": "YulFunctionDefinition",
                  "src": "6532:180:18"
                },
                {
                  "body": {
                    "nativeSrc": "6762:147:18",
                    "nodeType": "YulBlock",
                    "src": "6762:147:18",
                    "statements": [
                      {
                        "nativeSrc": "6772:25:18",
                        "nodeType": "YulAssignment",
                        "src": "6772:25:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nativeSrc": "6795:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "6795:1:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "6777:17:18",
                            "nodeType": "YulIdentifier",
                            "src": "6777:17:18"
                          },
                          "nativeSrc": "6777:20:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6777:20:18"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nativeSrc": "6772:1:18",
                            "nodeType": "YulIdentifier",
                            "src": "6772:1:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "6806:25:18",
                        "nodeType": "YulAssignment",
                        "src": "6806:25:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nativeSrc": "6829:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "6829:1:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "6811:17:18",
                            "nodeType": "YulIdentifier",
                            "src": "6811:17:18"
                          },
                          "nativeSrc": "6811:20:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6811:20:18"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nativeSrc": "6806:1:18",
                            "nodeType": "YulIdentifier",
                            "src": "6806:1:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "6840:16:18",
                        "nodeType": "YulAssignment",
                        "src": "6840:16:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nativeSrc": "6851:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "6851:1:18"
                            },
                            {
                              "name": "y",
                              "nativeSrc": "6854:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "6854:1:18"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "6847:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "6847:3:18"
                          },
                          "nativeSrc": "6847:9:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6847:9:18"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nativeSrc": "6840:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "6840:3:18"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "6880:22:18",
                          "nodeType": "YulBlock",
                          "src": "6880:22:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nativeSrc": "6882:16:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "6882:16:18"
                                },
                                "nativeSrc": "6882:18:18",
                                "nodeType": "YulFunctionCall",
                                "src": "6882:18:18"
                              },
                              "nativeSrc": "6882:18:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "6882:18:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nativeSrc": "6872:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "6872:1:18"
                            },
                            {
                              "name": "sum",
                              "nativeSrc": "6875:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "6875:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "6869:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "6869:2:18"
                          },
                          "nativeSrc": "6869:10:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6869:10:18"
                        },
                        "nativeSrc": "6866:36:18",
                        "nodeType": "YulIf",
                        "src": "6866:36:18"
                      }
                    ]
                  },
                  "name": "checked_add_t_uint256",
                  "nativeSrc": "6718:191:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nativeSrc": "6749:1:18",
                      "nodeType": "YulTypedName",
                      "src": "6749:1:18",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nativeSrc": "6752:1:18",
                      "nodeType": "YulTypedName",
                      "src": "6752:1:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nativeSrc": "6758:3:18",
                      "nodeType": "YulTypedName",
                      "src": "6758:3:18",
                      "type": ""
                    }
                  ],
                  "src": "6718:191:18"
                },
                {
                  "body": {
                    "nativeSrc": "6966:51:18",
                    "nodeType": "YulBlock",
                    "src": "6966:51:18",
                    "statements": [
                      {
                        "nativeSrc": "6976:34:18",
                        "nodeType": "YulAssignment",
                        "src": "6976:34:18",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "7001:1:18",
                              "nodeType": "YulLiteral",
                              "src": "7001:1:18",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "name": "value",
                              "nativeSrc": "7004:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "7004:5:18"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nativeSrc": "6997:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "6997:3:18"
                          },
                          "nativeSrc": "6997:13:18",
                          "nodeType": "YulFunctionCall",
                          "src": "6997:13:18"
                        },
                        "variableNames": [
                          {
                            "name": "newValue",
                            "nativeSrc": "6976:8:18",
                            "nodeType": "YulIdentifier",
                            "src": "6976:8:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "shift_right_1_unsigned",
                  "nativeSrc": "6915:102:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nativeSrc": "6947:5:18",
                      "nodeType": "YulTypedName",
                      "src": "6947:5:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "newValue",
                      "nativeSrc": "6957:8:18",
                      "nodeType": "YulTypedName",
                      "src": "6957:8:18",
                      "type": ""
                    }
                  ],
                  "src": "6915:102:18"
                },
                {
                  "body": {
                    "nativeSrc": "7096:775:18",
                    "nodeType": "YulBlock",
                    "src": "7096:775:18",
                    "statements": [
                      {
                        "nativeSrc": "7106:15:18",
                        "nodeType": "YulAssignment",
                        "src": "7106:15:18",
                        "value": {
                          "name": "_power",
                          "nativeSrc": "7115:6:18",
                          "nodeType": "YulIdentifier",
                          "src": "7115:6:18"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nativeSrc": "7106:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "7106:5:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "7130:14:18",
                        "nodeType": "YulAssignment",
                        "src": "7130:14:18",
                        "value": {
                          "name": "_base",
                          "nativeSrc": "7139:5:18",
                          "nodeType": "YulIdentifier",
                          "src": "7139:5:18"
                        },
                        "variableNames": [
                          {
                            "name": "base",
                            "nativeSrc": "7130:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "7130:4:18"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "7188:677:18",
                          "nodeType": "YulBlock",
                          "src": "7188:677:18",
                          "statements": [
                            {
                              "body": {
                                "nativeSrc": "7276:22:18",
                                "nodeType": "YulBlock",
                                "src": "7276:22:18",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nativeSrc": "7278:16:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "7278:16:18"
                                      },
                                      "nativeSrc": "7278:18:18",
                                      "nodeType": "YulFunctionCall",
                                      "src": "7278:18:18"
                                    },
                                    "nativeSrc": "7278:18:18",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "7278:18:18"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "base",
                                    "nativeSrc": "7254:4:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "7254:4:18"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "max",
                                        "nativeSrc": "7264:3:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "7264:3:18"
                                      },
                                      {
                                        "name": "base",
                                        "nativeSrc": "7269:4:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "7269:4:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "div",
                                      "nativeSrc": "7260:3:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "7260:3:18"
                                    },
                                    "nativeSrc": "7260:14:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "7260:14:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nativeSrc": "7251:2:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "7251:2:18"
                                },
                                "nativeSrc": "7251:24:18",
                                "nodeType": "YulFunctionCall",
                                "src": "7251:24:18"
                              },
                              "nativeSrc": "7248:50:18",
                              "nodeType": "YulIf",
                              "src": "7248:50:18"
                            },
                            {
                              "body": {
                                "nativeSrc": "7343:419:18",
                                "nodeType": "YulBlock",
                                "src": "7343:419:18",
                                "statements": [
                                  {
                                    "nativeSrc": "7723:25:18",
                                    "nodeType": "YulAssignment",
                                    "src": "7723:25:18",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "power",
                                          "nativeSrc": "7736:5:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "7736:5:18"
                                        },
                                        {
                                          "name": "base",
                                          "nativeSrc": "7743:4:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "7743:4:18"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nativeSrc": "7732:3:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "7732:3:18"
                                      },
                                      "nativeSrc": "7732:16:18",
                                      "nodeType": "YulFunctionCall",
                                      "src": "7732:16:18"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "power",
                                        "nativeSrc": "7723:5:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "7723:5:18"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nativeSrc": "7318:8:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "7318:8:18"
                                  },
                                  {
                                    "kind": "number",
                                    "nativeSrc": "7328:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "7328:1:18",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nativeSrc": "7314:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "7314:3:18"
                                },
                                "nativeSrc": "7314:16:18",
                                "nodeType": "YulFunctionCall",
                                "src": "7314:16:18"
                              },
                              "nativeSrc": "7311:451:18",
                              "nodeType": "YulIf",
                              "src": "7311:451:18"
                            },
                            {
                              "nativeSrc": "7775:23:18",
                              "nodeType": "YulAssignment",
                              "src": "7775:23:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "base",
                                    "nativeSrc": "7787:4:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "7787:4:18"
                                  },
                                  {
                                    "name": "base",
                                    "nativeSrc": "7793:4:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "7793:4:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "mul",
                                  "nativeSrc": "7783:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "7783:3:18"
                                },
                                "nativeSrc": "7783:15:18",
                                "nodeType": "YulFunctionCall",
                                "src": "7783:15:18"
                              },
                              "variableNames": [
                                {
                                  "name": "base",
                                  "nativeSrc": "7775:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "7775:4:18"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "7811:44:18",
                              "nodeType": "YulAssignment",
                              "src": "7811:44:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nativeSrc": "7846:8:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "7846:8:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "shift_right_1_unsigned",
                                  "nativeSrc": "7823:22:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "7823:22:18"
                                },
                                "nativeSrc": "7823:32:18",
                                "nodeType": "YulFunctionCall",
                                "src": "7823:32:18"
                              },
                              "variableNames": [
                                {
                                  "name": "exponent",
                                  "nativeSrc": "7811:8:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "7811:8:18"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nativeSrc": "7164:8:18",
                              "nodeType": "YulIdentifier",
                              "src": "7164:8:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "7174:1:18",
                              "nodeType": "YulLiteral",
                              "src": "7174:1:18",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "7161:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "7161:2:18"
                          },
                          "nativeSrc": "7161:15:18",
                          "nodeType": "YulFunctionCall",
                          "src": "7161:15:18"
                        },
                        "nativeSrc": "7153:712:18",
                        "nodeType": "YulForLoop",
                        "post": {
                          "nativeSrc": "7177:2:18",
                          "nodeType": "YulBlock",
                          "src": "7177:2:18",
                          "statements": []
                        },
                        "pre": {
                          "nativeSrc": "7157:3:18",
                          "nodeType": "YulBlock",
                          "src": "7157:3:18",
                          "statements": []
                        },
                        "src": "7153:712:18"
                      }
                    ]
                  },
                  "name": "checked_exp_helper",
                  "nativeSrc": "7023:848:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "_power",
                      "nativeSrc": "7051:6:18",
                      "nodeType": "YulTypedName",
                      "src": "7051:6:18",
                      "type": ""
                    },
                    {
                      "name": "_base",
                      "nativeSrc": "7059:5:18",
                      "nodeType": "YulTypedName",
                      "src": "7059:5:18",
                      "type": ""
                    },
                    {
                      "name": "exponent",
                      "nativeSrc": "7066:8:18",
                      "nodeType": "YulTypedName",
                      "src": "7066:8:18",
                      "type": ""
                    },
                    {
                      "name": "max",
                      "nativeSrc": "7076:3:18",
                      "nodeType": "YulTypedName",
                      "src": "7076:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "power",
                      "nativeSrc": "7084:5:18",
                      "nodeType": "YulTypedName",
                      "src": "7084:5:18",
                      "type": ""
                    },
                    {
                      "name": "base",
                      "nativeSrc": "7091:4:18",
                      "nodeType": "YulTypedName",
                      "src": "7091:4:18",
                      "type": ""
                    }
                  ],
                  "src": "7023:848:18"
                },
                {
                  "body": {
                    "nativeSrc": "7937:1013:18",
                    "nodeType": "YulBlock",
                    "src": "7937:1013:18",
                    "statements": [
                      {
                        "body": {
                          "nativeSrc": "8132:20:18",
                          "nodeType": "YulBlock",
                          "src": "8132:20:18",
                          "statements": [
                            {
                              "nativeSrc": "8134:10:18",
                              "nodeType": "YulAssignment",
                              "src": "8134:10:18",
                              "value": {
                                "kind": "number",
                                "nativeSrc": "8143:1:18",
                                "nodeType": "YulLiteral",
                                "src": "8143:1:18",
                                "type": "",
                                "value": "1"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nativeSrc": "8134:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "8134:5:18"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "8145:5:18",
                              "nodeType": "YulLeave",
                              "src": "8145:5:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nativeSrc": "8122:8:18",
                              "nodeType": "YulIdentifier",
                              "src": "8122:8:18"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "8115:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "8115:6:18"
                          },
                          "nativeSrc": "8115:16:18",
                          "nodeType": "YulFunctionCall",
                          "src": "8115:16:18"
                        },
                        "nativeSrc": "8112:40:18",
                        "nodeType": "YulIf",
                        "src": "8112:40:18"
                      },
                      {
                        "body": {
                          "nativeSrc": "8177:20:18",
                          "nodeType": "YulBlock",
                          "src": "8177:20:18",
                          "statements": [
                            {
                              "nativeSrc": "8179:10:18",
                              "nodeType": "YulAssignment",
                              "src": "8179:10:18",
                              "value": {
                                "kind": "number",
                                "nativeSrc": "8188:1:18",
                                "nodeType": "YulLiteral",
                                "src": "8188:1:18",
                                "type": "",
                                "value": "0"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nativeSrc": "8179:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "8179:5:18"
                                }
                              ]
                            },
                            {
                              "nativeSrc": "8190:5:18",
                              "nodeType": "YulLeave",
                              "src": "8190:5:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "base",
                              "nativeSrc": "8171:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "8171:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "8164:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "8164:6:18"
                          },
                          "nativeSrc": "8164:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "8164:12:18"
                        },
                        "nativeSrc": "8161:36:18",
                        "nodeType": "YulIf",
                        "src": "8161:36:18"
                      },
                      {
                        "cases": [
                          {
                            "body": {
                              "nativeSrc": "8307:20:18",
                              "nodeType": "YulBlock",
                              "src": "8307:20:18",
                              "statements": [
                                {
                                  "nativeSrc": "8309:10:18",
                                  "nodeType": "YulAssignment",
                                  "src": "8309:10:18",
                                  "value": {
                                    "kind": "number",
                                    "nativeSrc": "8318:1:18",
                                    "nodeType": "YulLiteral",
                                    "src": "8318:1:18",
                                    "type": "",
                                    "value": "1"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "power",
                                      "nativeSrc": "8309:5:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8309:5:18"
                                    }
                                  ]
                                },
                                {
                                  "nativeSrc": "8320:5:18",
                                  "nodeType": "YulLeave",
                                  "src": "8320:5:18"
                                }
                              ]
                            },
                            "nativeSrc": "8300:27:18",
                            "nodeType": "YulCase",
                            "src": "8300:27:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "8305:1:18",
                              "nodeType": "YulLiteral",
                              "src": "8305:1:18",
                              "type": "",
                              "value": "1"
                            }
                          },
                          {
                            "body": {
                              "nativeSrc": "8351:176:18",
                              "nodeType": "YulBlock",
                              "src": "8351:176:18",
                              "statements": [
                                {
                                  "body": {
                                    "nativeSrc": "8386:22:18",
                                    "nodeType": "YulBlock",
                                    "src": "8386:22:18",
                                    "statements": [
                                      {
                                        "expression": {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "panic_error_0x11",
                                            "nativeSrc": "8388:16:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "8388:16:18"
                                          },
                                          "nativeSrc": "8388:18:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "8388:18:18"
                                        },
                                        "nativeSrc": "8388:18:18",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "8388:18:18"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "arguments": [
                                      {
                                        "name": "exponent",
                                        "nativeSrc": "8371:8:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "8371:8:18"
                                      },
                                      {
                                        "kind": "number",
                                        "nativeSrc": "8381:3:18",
                                        "nodeType": "YulLiteral",
                                        "src": "8381:3:18",
                                        "type": "",
                                        "value": "255"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "gt",
                                      "nativeSrc": "8368:2:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8368:2:18"
                                    },
                                    "nativeSrc": "8368:17:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "8368:17:18"
                                  },
                                  "nativeSrc": "8365:43:18",
                                  "nodeType": "YulIf",
                                  "src": "8365:43:18"
                                },
                                {
                                  "nativeSrc": "8421:25:18",
                                  "nodeType": "YulAssignment",
                                  "src": "8421:25:18",
                                  "value": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nativeSrc": "8434:1:18",
                                        "nodeType": "YulLiteral",
                                        "src": "8434:1:18",
                                        "type": "",
                                        "value": "2"
                                      },
                                      {
                                        "name": "exponent",
                                        "nativeSrc": "8437:8:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "8437:8:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "exp",
                                      "nativeSrc": "8430:3:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8430:3:18"
                                    },
                                    "nativeSrc": "8430:16:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "8430:16:18"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "power",
                                      "nativeSrc": "8421:5:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8421:5:18"
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nativeSrc": "8477:22:18",
                                    "nodeType": "YulBlock",
                                    "src": "8477:22:18",
                                    "statements": [
                                      {
                                        "expression": {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "panic_error_0x11",
                                            "nativeSrc": "8479:16:18",
                                            "nodeType": "YulIdentifier",
                                            "src": "8479:16:18"
                                          },
                                          "nativeSrc": "8479:18:18",
                                          "nodeType": "YulFunctionCall",
                                          "src": "8479:18:18"
                                        },
                                        "nativeSrc": "8479:18:18",
                                        "nodeType": "YulExpressionStatement",
                                        "src": "8479:18:18"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "arguments": [
                                      {
                                        "name": "power",
                                        "nativeSrc": "8465:5:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "8465:5:18"
                                      },
                                      {
                                        "name": "max",
                                        "nativeSrc": "8472:3:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "8472:3:18"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "gt",
                                      "nativeSrc": "8462:2:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8462:2:18"
                                    },
                                    "nativeSrc": "8462:14:18",
                                    "nodeType": "YulFunctionCall",
                                    "src": "8462:14:18"
                                  },
                                  "nativeSrc": "8459:40:18",
                                  "nodeType": "YulIf",
                                  "src": "8459:40:18"
                                },
                                {
                                  "nativeSrc": "8512:5:18",
                                  "nodeType": "YulLeave",
                                  "src": "8512:5:18"
                                }
                              ]
                            },
                            "nativeSrc": "8336:191:18",
                            "nodeType": "YulCase",
                            "src": "8336:191:18",
                            "value": {
                              "kind": "number",
                              "nativeSrc": "8341:1:18",
                              "nodeType": "YulLiteral",
                              "src": "8341:1:18",
                              "type": "",
                              "value": "2"
                            }
                          }
                        ],
                        "expression": {
                          "name": "base",
                          "nativeSrc": "8257:4:18",
                          "nodeType": "YulIdentifier",
                          "src": "8257:4:18"
                        },
                        "nativeSrc": "8250:277:18",
                        "nodeType": "YulSwitch",
                        "src": "8250:277:18"
                      },
                      {
                        "body": {
                          "nativeSrc": "8659:123:18",
                          "nodeType": "YulBlock",
                          "src": "8659:123:18",
                          "statements": [
                            {
                              "nativeSrc": "8673:28:18",
                              "nodeType": "YulAssignment",
                              "src": "8673:28:18",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "base",
                                    "nativeSrc": "8686:4:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "8686:4:18"
                                  },
                                  {
                                    "name": "exponent",
                                    "nativeSrc": "8692:8:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "8692:8:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "exp",
                                  "nativeSrc": "8682:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "8682:3:18"
                                },
                                "nativeSrc": "8682:19:18",
                                "nodeType": "YulFunctionCall",
                                "src": "8682:19:18"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nativeSrc": "8673:5:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "8673:5:18"
                                }
                              ]
                            },
                            {
                              "body": {
                                "nativeSrc": "8732:22:18",
                                "nodeType": "YulBlock",
                                "src": "8732:22:18",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nativeSrc": "8734:16:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "8734:16:18"
                                      },
                                      "nativeSrc": "8734:18:18",
                                      "nodeType": "YulFunctionCall",
                                      "src": "8734:18:18"
                                    },
                                    "nativeSrc": "8734:18:18",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "8734:18:18"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "power",
                                    "nativeSrc": "8720:5:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "8720:5:18"
                                  },
                                  {
                                    "name": "max",
                                    "nativeSrc": "8727:3:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "8727:3:18"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nativeSrc": "8717:2:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "8717:2:18"
                                },
                                "nativeSrc": "8717:14:18",
                                "nodeType": "YulFunctionCall",
                                "src": "8717:14:18"
                              },
                              "nativeSrc": "8714:40:18",
                              "nodeType": "YulIf",
                              "src": "8714:40:18"
                            },
                            {
                              "nativeSrc": "8767:5:18",
                              "nodeType": "YulLeave",
                              "src": "8767:5:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "base",
                                      "nativeSrc": "8562:4:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8562:4:18"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "8568:2:18",
                                      "nodeType": "YulLiteral",
                                      "src": "8568:2:18",
                                      "type": "",
                                      "value": "11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "8559:2:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "8559:2:18"
                                  },
                                  "nativeSrc": "8559:12:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "8559:12:18"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "exponent",
                                      "nativeSrc": "8576:8:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8576:8:18"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "8586:2:18",
                                      "nodeType": "YulLiteral",
                                      "src": "8586:2:18",
                                      "type": "",
                                      "value": "78"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "8573:2:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "8573:2:18"
                                  },
                                  "nativeSrc": "8573:16:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "8573:16:18"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "8555:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "8555:3:18"
                              },
                              "nativeSrc": "8555:35:18",
                              "nodeType": "YulFunctionCall",
                              "src": "8555:35:18"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "base",
                                      "nativeSrc": "8611:4:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8611:4:18"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "8617:3:18",
                                      "nodeType": "YulLiteral",
                                      "src": "8617:3:18",
                                      "type": "",
                                      "value": "307"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "8608:2:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "8608:2:18"
                                  },
                                  "nativeSrc": "8608:13:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "8608:13:18"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "exponent",
                                      "nativeSrc": "8626:8:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "8626:8:18"
                                    },
                                    {
                                      "kind": "number",
                                      "nativeSrc": "8636:2:18",
                                      "nodeType": "YulLiteral",
                                      "src": "8636:2:18",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nativeSrc": "8623:2:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "8623:2:18"
                                  },
                                  "nativeSrc": "8623:16:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "8623:16:18"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nativeSrc": "8604:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "8604:3:18"
                              },
                              "nativeSrc": "8604:36:18",
                              "nodeType": "YulFunctionCall",
                              "src": "8604:36:18"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nativeSrc": "8539:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "8539:2:18"
                          },
                          "nativeSrc": "8539:111:18",
                          "nodeType": "YulFunctionCall",
                          "src": "8539:111:18"
                        },
                        "nativeSrc": "8536:246:18",
                        "nodeType": "YulIf",
                        "src": "8536:246:18"
                      },
                      {
                        "nativeSrc": "8792:57:18",
                        "nodeType": "YulAssignment",
                        "src": "8792:57:18",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nativeSrc": "8826:1:18",
                              "nodeType": "YulLiteral",
                              "src": "8826:1:18",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "name": "base",
                              "nativeSrc": "8829:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "8829:4:18"
                            },
                            {
                              "name": "exponent",
                              "nativeSrc": "8835:8:18",
                              "nodeType": "YulIdentifier",
                              "src": "8835:8:18"
                            },
                            {
                              "name": "max",
                              "nativeSrc": "8845:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "8845:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "checked_exp_helper",
                            "nativeSrc": "8807:18:18",
                            "nodeType": "YulIdentifier",
                            "src": "8807:18:18"
                          },
                          "nativeSrc": "8807:42:18",
                          "nodeType": "YulFunctionCall",
                          "src": "8807:42:18"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nativeSrc": "8792:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "8792:5:18"
                          },
                          {
                            "name": "base",
                            "nativeSrc": "8799:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "8799:4:18"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "8888:22:18",
                          "nodeType": "YulBlock",
                          "src": "8888:22:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nativeSrc": "8890:16:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "8890:16:18"
                                },
                                "nativeSrc": "8890:18:18",
                                "nodeType": "YulFunctionCall",
                                "src": "8890:18:18"
                              },
                              "nativeSrc": "8890:18:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "8890:18:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "power",
                              "nativeSrc": "8865:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "8865:5:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "max",
                                  "nativeSrc": "8876:3:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "8876:3:18"
                                },
                                {
                                  "name": "base",
                                  "nativeSrc": "8881:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "8881:4:18"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nativeSrc": "8872:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "8872:3:18"
                              },
                              "nativeSrc": "8872:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "8872:14:18"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nativeSrc": "8862:2:18",
                            "nodeType": "YulIdentifier",
                            "src": "8862:2:18"
                          },
                          "nativeSrc": "8862:25:18",
                          "nodeType": "YulFunctionCall",
                          "src": "8862:25:18"
                        },
                        "nativeSrc": "8859:51:18",
                        "nodeType": "YulIf",
                        "src": "8859:51:18"
                      },
                      {
                        "nativeSrc": "8919:25:18",
                        "nodeType": "YulAssignment",
                        "src": "8919:25:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "power",
                              "nativeSrc": "8932:5:18",
                              "nodeType": "YulIdentifier",
                              "src": "8932:5:18"
                            },
                            {
                              "name": "base",
                              "nativeSrc": "8939:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "8939:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "8928:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "8928:3:18"
                          },
                          "nativeSrc": "8928:16:18",
                          "nodeType": "YulFunctionCall",
                          "src": "8928:16:18"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nativeSrc": "8919:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "8919:5:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_exp_unsigned",
                  "nativeSrc": "7877:1073:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "base",
                      "nativeSrc": "7907:4:18",
                      "nodeType": "YulTypedName",
                      "src": "7907:4:18",
                      "type": ""
                    },
                    {
                      "name": "exponent",
                      "nativeSrc": "7913:8:18",
                      "nodeType": "YulTypedName",
                      "src": "7913:8:18",
                      "type": ""
                    },
                    {
                      "name": "max",
                      "nativeSrc": "7923:3:18",
                      "nodeType": "YulTypedName",
                      "src": "7923:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "power",
                      "nativeSrc": "7931:5:18",
                      "nodeType": "YulTypedName",
                      "src": "7931:5:18",
                      "type": ""
                    }
                  ],
                  "src": "7877:1073:18"
                },
                {
                  "body": {
                    "nativeSrc": "9020:217:18",
                    "nodeType": "YulBlock",
                    "src": "9020:217:18",
                    "statements": [
                      {
                        "nativeSrc": "9030:31:18",
                        "nodeType": "YulAssignment",
                        "src": "9030:31:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "base",
                              "nativeSrc": "9056:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "9056:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "9038:17:18",
                            "nodeType": "YulIdentifier",
                            "src": "9038:17:18"
                          },
                          "nativeSrc": "9038:23:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9038:23:18"
                        },
                        "variableNames": [
                          {
                            "name": "base",
                            "nativeSrc": "9030:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "9030:4:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "9070:37:18",
                        "nodeType": "YulAssignment",
                        "src": "9070:37:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nativeSrc": "9098:8:18",
                              "nodeType": "YulIdentifier",
                              "src": "9098:8:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint8",
                            "nativeSrc": "9082:15:18",
                            "nodeType": "YulIdentifier",
                            "src": "9082:15:18"
                          },
                          "nativeSrc": "9082:25:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9082:25:18"
                        },
                        "variableNames": [
                          {
                            "name": "exponent",
                            "nativeSrc": "9070:8:18",
                            "nodeType": "YulIdentifier",
                            "src": "9070:8:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "9117:113:18",
                        "nodeType": "YulAssignment",
                        "src": "9117:113:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "base",
                              "nativeSrc": "9147:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "9147:4:18"
                            },
                            {
                              "name": "exponent",
                              "nativeSrc": "9153:8:18",
                              "nodeType": "YulIdentifier",
                              "src": "9153:8:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9163:66:18",
                              "nodeType": "YulLiteral",
                              "src": "9163:66:18",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "checked_exp_unsigned",
                            "nativeSrc": "9126:20:18",
                            "nodeType": "YulIdentifier",
                            "src": "9126:20:18"
                          },
                          "nativeSrc": "9126:104:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9126:104:18"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nativeSrc": "9117:5:18",
                            "nodeType": "YulIdentifier",
                            "src": "9117:5:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_exp_t_uint256_t_uint8",
                  "nativeSrc": "8956:281:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "base",
                      "nativeSrc": "8995:4:18",
                      "nodeType": "YulTypedName",
                      "src": "8995:4:18",
                      "type": ""
                    },
                    {
                      "name": "exponent",
                      "nativeSrc": "9001:8:18",
                      "nodeType": "YulTypedName",
                      "src": "9001:8:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "power",
                      "nativeSrc": "9014:5:18",
                      "nodeType": "YulTypedName",
                      "src": "9014:5:18",
                      "type": ""
                    }
                  ],
                  "src": "8956:281:18"
                },
                {
                  "body": {
                    "nativeSrc": "9291:362:18",
                    "nodeType": "YulBlock",
                    "src": "9291:362:18",
                    "statements": [
                      {
                        "nativeSrc": "9301:25:18",
                        "nodeType": "YulAssignment",
                        "src": "9301:25:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nativeSrc": "9324:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "9324:1:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "9306:17:18",
                            "nodeType": "YulIdentifier",
                            "src": "9306:17:18"
                          },
                          "nativeSrc": "9306:20:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9306:20:18"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nativeSrc": "9301:1:18",
                            "nodeType": "YulIdentifier",
                            "src": "9301:1:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "9335:25:18",
                        "nodeType": "YulAssignment",
                        "src": "9335:25:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nativeSrc": "9358:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "9358:1:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "9340:17:18",
                            "nodeType": "YulIdentifier",
                            "src": "9340:17:18"
                          },
                          "nativeSrc": "9340:20:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9340:20:18"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nativeSrc": "9335:1:18",
                            "nodeType": "YulIdentifier",
                            "src": "9335:1:18"
                          }
                        ]
                      },
                      {
                        "nativeSrc": "9369:28:18",
                        "nodeType": "YulVariableDeclaration",
                        "src": "9369:28:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nativeSrc": "9392:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "9392:1:18"
                            },
                            {
                              "name": "y",
                              "nativeSrc": "9395:1:18",
                              "nodeType": "YulIdentifier",
                              "src": "9395:1:18"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nativeSrc": "9388:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "9388:3:18"
                          },
                          "nativeSrc": "9388:9:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9388:9:18"
                        },
                        "variables": [
                          {
                            "name": "product_raw",
                            "nativeSrc": "9373:11:18",
                            "nodeType": "YulTypedName",
                            "src": "9373:11:18",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "9406:41:18",
                        "nodeType": "YulAssignment",
                        "src": "9406:41:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "product_raw",
                              "nativeSrc": "9435:11:18",
                              "nodeType": "YulIdentifier",
                              "src": "9435:11:18"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "9417:17:18",
                            "nodeType": "YulIdentifier",
                            "src": "9417:17:18"
                          },
                          "nativeSrc": "9417:30:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9417:30:18"
                        },
                        "variableNames": [
                          {
                            "name": "product",
                            "nativeSrc": "9406:7:18",
                            "nodeType": "YulIdentifier",
                            "src": "9406:7:18"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nativeSrc": "9624:22:18",
                          "nodeType": "YulBlock",
                          "src": "9624:22:18",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nativeSrc": "9626:16:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "9626:16:18"
                                },
                                "nativeSrc": "9626:18:18",
                                "nodeType": "YulFunctionCall",
                                "src": "9626:18:18"
                              },
                              "nativeSrc": "9626:18:18",
                              "nodeType": "YulExpressionStatement",
                              "src": "9626:18:18"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nativeSrc": "9557:1:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "9557:1:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nativeSrc": "9550:6:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "9550:6:18"
                                  },
                                  "nativeSrc": "9550:9:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9550:9:18"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "y",
                                      "nativeSrc": "9580:1:18",
                                      "nodeType": "YulIdentifier",
                                      "src": "9580:1:18"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "product",
                                          "nativeSrc": "9587:7:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "9587:7:18"
                                        },
                                        {
                                          "name": "x",
                                          "nativeSrc": "9596:1:18",
                                          "nodeType": "YulIdentifier",
                                          "src": "9596:1:18"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "div",
                                        "nativeSrc": "9583:3:18",
                                        "nodeType": "YulIdentifier",
                                        "src": "9583:3:18"
                                      },
                                      "nativeSrc": "9583:15:18",
                                      "nodeType": "YulFunctionCall",
                                      "src": "9583:15:18"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "eq",
                                    "nativeSrc": "9577:2:18",
                                    "nodeType": "YulIdentifier",
                                    "src": "9577:2:18"
                                  },
                                  "nativeSrc": "9577:22:18",
                                  "nodeType": "YulFunctionCall",
                                  "src": "9577:22:18"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nativeSrc": "9530:2:18",
                                "nodeType": "YulIdentifier",
                                "src": "9530:2:18"
                              },
                              "nativeSrc": "9530:83:18",
                              "nodeType": "YulFunctionCall",
                              "src": "9530:83:18"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "9510:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "9510:6:18"
                          },
                          "nativeSrc": "9510:113:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9510:113:18"
                        },
                        "nativeSrc": "9507:139:18",
                        "nodeType": "YulIf",
                        "src": "9507:139:18"
                      }
                    ]
                  },
                  "name": "checked_mul_t_uint256",
                  "nativeSrc": "9243:410:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nativeSrc": "9274:1:18",
                      "nodeType": "YulTypedName",
                      "src": "9274:1:18",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nativeSrc": "9277:1:18",
                      "nodeType": "YulTypedName",
                      "src": "9277:1:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "product",
                      "nativeSrc": "9283:7:18",
                      "nodeType": "YulTypedName",
                      "src": "9283:7:18",
                      "type": ""
                    }
                  ],
                  "src": "9243:410:18"
                },
                {
                  "body": {
                    "nativeSrc": "9765:118:18",
                    "nodeType": "YulBlock",
                    "src": "9765:118:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "9787:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "9787:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "9795:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "9795:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "9783:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "9783:3:18"
                              },
                              "nativeSrc": "9783:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "9783:14:18"
                            },
                            {
                              "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                              "kind": "string",
                              "nativeSrc": "9799:34:18",
                              "nodeType": "YulLiteral",
                              "src": "9799:34:18",
                              "type": "",
                              "value": "ERC20: decreased allowance below"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9776:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "9776:6:18"
                          },
                          "nativeSrc": "9776:58:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9776:58:18"
                        },
                        "nativeSrc": "9776:58:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "9776:58:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "9855:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "9855:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "9863:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "9863:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "9851:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "9851:3:18"
                              },
                              "nativeSrc": "9851:15:18",
                              "nodeType": "YulFunctionCall",
                              "src": "9851:15:18"
                            },
                            {
                              "hexValue": "207a65726f",
                              "kind": "string",
                              "nativeSrc": "9868:7:18",
                              "nodeType": "YulLiteral",
                              "src": "9868:7:18",
                              "type": "",
                              "value": " zero"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "9844:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "9844:6:18"
                          },
                          "nativeSrc": "9844:32:18",
                          "nodeType": "YulFunctionCall",
                          "src": "9844:32:18"
                        },
                        "nativeSrc": "9844:32:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "9844:32:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                  "nativeSrc": "9659:224:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "9757:6:18",
                      "nodeType": "YulTypedName",
                      "src": "9757:6:18",
                      "type": ""
                    }
                  ],
                  "src": "9659:224:18"
                },
                {
                  "body": {
                    "nativeSrc": "10035:220:18",
                    "nodeType": "YulBlock",
                    "src": "10035:220:18",
                    "statements": [
                      {
                        "nativeSrc": "10045:74:18",
                        "nodeType": "YulAssignment",
                        "src": "10045:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "10111:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "10111:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10116:2:18",
                              "nodeType": "YulLiteral",
                              "src": "10116:2:18",
                              "type": "",
                              "value": "37"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "10052:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "10052:58:18"
                          },
                          "nativeSrc": "10052:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "10052:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "10045:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "10045:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "10217:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "10217:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                            "nativeSrc": "10128:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "10128:88:18"
                          },
                          "nativeSrc": "10128:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "10128:93:18"
                        },
                        "nativeSrc": "10128:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "10128:93:18"
                      },
                      {
                        "nativeSrc": "10230:19:18",
                        "nodeType": "YulAssignment",
                        "src": "10230:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "10241:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "10241:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10246:2:18",
                              "nodeType": "YulLiteral",
                              "src": "10246:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10237:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "10237:3:18"
                          },
                          "nativeSrc": "10237:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "10237:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "10230:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "10230:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "9889:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "10023:3:18",
                      "nodeType": "YulTypedName",
                      "src": "10023:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "10031:3:18",
                      "nodeType": "YulTypedName",
                      "src": "10031:3:18",
                      "type": ""
                    }
                  ],
                  "src": "9889:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "10432:248:18",
                    "nodeType": "YulBlock",
                    "src": "10432:248:18",
                    "statements": [
                      {
                        "nativeSrc": "10442:26:18",
                        "nodeType": "YulAssignment",
                        "src": "10442:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "10454:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "10454:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10465:2:18",
                              "nodeType": "YulLiteral",
                              "src": "10465:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10450:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "10450:3:18"
                          },
                          "nativeSrc": "10450:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "10450:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "10442:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "10442:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "10489:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "10489:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "10500:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "10500:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "10485:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "10485:3:18"
                              },
                              "nativeSrc": "10485:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "10485:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "10508:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "10508:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "10514:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "10514:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "10504:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "10504:3:18"
                              },
                              "nativeSrc": "10504:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "10504:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10478:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "10478:6:18"
                          },
                          "nativeSrc": "10478:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "10478:47:18"
                        },
                        "nativeSrc": "10478:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "10478:47:18"
                      },
                      {
                        "nativeSrc": "10534:139:18",
                        "nodeType": "YulAssignment",
                        "src": "10534:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "10668:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "10668:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "10542:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "10542:124:18"
                          },
                          "nativeSrc": "10542:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "10542:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "10534:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "10534:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "10261:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "10412:9:18",
                      "nodeType": "YulTypedName",
                      "src": "10412:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "10427:4:18",
                      "nodeType": "YulTypedName",
                      "src": "10427:4:18",
                      "type": ""
                    }
                  ],
                  "src": "10261:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "10792:119:18",
                    "nodeType": "YulBlock",
                    "src": "10792:119:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "10814:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "10814:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "10822:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "10822:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "10810:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "10810:3:18"
                              },
                              "nativeSrc": "10810:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "10810:14:18"
                            },
                            {
                              "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                              "kind": "string",
                              "nativeSrc": "10826:34:18",
                              "nodeType": "YulLiteral",
                              "src": "10826:34:18",
                              "type": "",
                              "value": "Ownable: new owner is the zero a"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10803:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "10803:6:18"
                          },
                          "nativeSrc": "10803:58:18",
                          "nodeType": "YulFunctionCall",
                          "src": "10803:58:18"
                        },
                        "nativeSrc": "10803:58:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "10803:58:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "10882:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "10882:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "10890:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "10890:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "10878:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "10878:3:18"
                              },
                              "nativeSrc": "10878:15:18",
                              "nodeType": "YulFunctionCall",
                              "src": "10878:15:18"
                            },
                            {
                              "hexValue": "646472657373",
                              "kind": "string",
                              "nativeSrc": "10895:8:18",
                              "nodeType": "YulLiteral",
                              "src": "10895:8:18",
                              "type": "",
                              "value": "ddress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "10871:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "10871:6:18"
                          },
                          "nativeSrc": "10871:33:18",
                          "nodeType": "YulFunctionCall",
                          "src": "10871:33:18"
                        },
                        "nativeSrc": "10871:33:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "10871:33:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                  "nativeSrc": "10686:225:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "10784:6:18",
                      "nodeType": "YulTypedName",
                      "src": "10784:6:18",
                      "type": ""
                    }
                  ],
                  "src": "10686:225:18"
                },
                {
                  "body": {
                    "nativeSrc": "11063:220:18",
                    "nodeType": "YulBlock",
                    "src": "11063:220:18",
                    "statements": [
                      {
                        "nativeSrc": "11073:74:18",
                        "nodeType": "YulAssignment",
                        "src": "11073:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "11139:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "11139:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11144:2:18",
                              "nodeType": "YulLiteral",
                              "src": "11144:2:18",
                              "type": "",
                              "value": "38"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "11080:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "11080:58:18"
                          },
                          "nativeSrc": "11080:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "11080:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "11073:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "11073:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "11245:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "11245:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                            "nativeSrc": "11156:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "11156:88:18"
                          },
                          "nativeSrc": "11156:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "11156:93:18"
                        },
                        "nativeSrc": "11156:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "11156:93:18"
                      },
                      {
                        "nativeSrc": "11258:19:18",
                        "nodeType": "YulAssignment",
                        "src": "11258:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "11269:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "11269:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11274:2:18",
                              "nodeType": "YulLiteral",
                              "src": "11274:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "11265:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "11265:3:18"
                          },
                          "nativeSrc": "11265:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "11265:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "11258:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "11258:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "10917:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "11051:3:18",
                      "nodeType": "YulTypedName",
                      "src": "11051:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "11059:3:18",
                      "nodeType": "YulTypedName",
                      "src": "11059:3:18",
                      "type": ""
                    }
                  ],
                  "src": "10917:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "11460:248:18",
                    "nodeType": "YulBlock",
                    "src": "11460:248:18",
                    "statements": [
                      {
                        "nativeSrc": "11470:26:18",
                        "nodeType": "YulAssignment",
                        "src": "11470:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "11482:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "11482:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11493:2:18",
                              "nodeType": "YulLiteral",
                              "src": "11493:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "11478:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "11478:3:18"
                          },
                          "nativeSrc": "11478:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "11478:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "11470:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "11470:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "11517:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "11517:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "11528:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "11528:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "11513:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "11513:3:18"
                              },
                              "nativeSrc": "11513:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "11513:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "11536:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "11536:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "11542:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "11542:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "11532:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "11532:3:18"
                              },
                              "nativeSrc": "11532:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "11532:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11506:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "11506:6:18"
                          },
                          "nativeSrc": "11506:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "11506:47:18"
                        },
                        "nativeSrc": "11506:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "11506:47:18"
                      },
                      {
                        "nativeSrc": "11562:139:18",
                        "nodeType": "YulAssignment",
                        "src": "11562:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "11696:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "11696:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "11570:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "11570:124:18"
                          },
                          "nativeSrc": "11570:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "11570:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "11562:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "11562:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "11289:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "11440:9:18",
                      "nodeType": "YulTypedName",
                      "src": "11440:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "11455:4:18",
                      "nodeType": "YulTypedName",
                      "src": "11455:4:18",
                      "type": ""
                    }
                  ],
                  "src": "11289:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "11820:117:18",
                    "nodeType": "YulBlock",
                    "src": "11820:117:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "11842:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "11842:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "11850:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "11850:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "11838:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "11838:3:18"
                              },
                              "nativeSrc": "11838:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "11838:14:18"
                            },
                            {
                              "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                              "kind": "string",
                              "nativeSrc": "11854:34:18",
                              "nodeType": "YulLiteral",
                              "src": "11854:34:18",
                              "type": "",
                              "value": "ERC20: approve from the zero add"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11831:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "11831:6:18"
                          },
                          "nativeSrc": "11831:58:18",
                          "nodeType": "YulFunctionCall",
                          "src": "11831:58:18"
                        },
                        "nativeSrc": "11831:58:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "11831:58:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "11910:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "11910:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "11918:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "11918:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "11906:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "11906:3:18"
                              },
                              "nativeSrc": "11906:15:18",
                              "nodeType": "YulFunctionCall",
                              "src": "11906:15:18"
                            },
                            {
                              "hexValue": "72657373",
                              "kind": "string",
                              "nativeSrc": "11923:6:18",
                              "nodeType": "YulLiteral",
                              "src": "11923:6:18",
                              "type": "",
                              "value": "ress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "11899:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "11899:6:18"
                          },
                          "nativeSrc": "11899:31:18",
                          "nodeType": "YulFunctionCall",
                          "src": "11899:31:18"
                        },
                        "nativeSrc": "11899:31:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "11899:31:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                  "nativeSrc": "11714:223:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "11812:6:18",
                      "nodeType": "YulTypedName",
                      "src": "11812:6:18",
                      "type": ""
                    }
                  ],
                  "src": "11714:223:18"
                },
                {
                  "body": {
                    "nativeSrc": "12089:220:18",
                    "nodeType": "YulBlock",
                    "src": "12089:220:18",
                    "statements": [
                      {
                        "nativeSrc": "12099:74:18",
                        "nodeType": "YulAssignment",
                        "src": "12099:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "12165:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "12165:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12170:2:18",
                              "nodeType": "YulLiteral",
                              "src": "12170:2:18",
                              "type": "",
                              "value": "36"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "12106:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "12106:58:18"
                          },
                          "nativeSrc": "12106:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "12106:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "12099:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "12099:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "12271:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "12271:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                            "nativeSrc": "12182:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "12182:88:18"
                          },
                          "nativeSrc": "12182:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "12182:93:18"
                        },
                        "nativeSrc": "12182:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "12182:93:18"
                      },
                      {
                        "nativeSrc": "12284:19:18",
                        "nodeType": "YulAssignment",
                        "src": "12284:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "12295:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "12295:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12300:2:18",
                              "nodeType": "YulLiteral",
                              "src": "12300:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "12291:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "12291:3:18"
                          },
                          "nativeSrc": "12291:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "12291:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "12284:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "12284:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "11943:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "12077:3:18",
                      "nodeType": "YulTypedName",
                      "src": "12077:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "12085:3:18",
                      "nodeType": "YulTypedName",
                      "src": "12085:3:18",
                      "type": ""
                    }
                  ],
                  "src": "11943:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "12486:248:18",
                    "nodeType": "YulBlock",
                    "src": "12486:248:18",
                    "statements": [
                      {
                        "nativeSrc": "12496:26:18",
                        "nodeType": "YulAssignment",
                        "src": "12496:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "12508:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "12508:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "12519:2:18",
                              "nodeType": "YulLiteral",
                              "src": "12519:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "12504:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "12504:3:18"
                          },
                          "nativeSrc": "12504:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "12504:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "12496:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "12496:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "12543:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "12543:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "12554:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "12554:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "12539:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "12539:3:18"
                              },
                              "nativeSrc": "12539:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "12539:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "12562:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "12562:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "12568:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "12568:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "12558:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "12558:3:18"
                              },
                              "nativeSrc": "12558:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "12558:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "12532:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "12532:6:18"
                          },
                          "nativeSrc": "12532:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "12532:47:18"
                        },
                        "nativeSrc": "12532:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "12532:47:18"
                      },
                      {
                        "nativeSrc": "12588:139:18",
                        "nodeType": "YulAssignment",
                        "src": "12588:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "12722:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "12722:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "12596:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "12596:124:18"
                          },
                          "nativeSrc": "12596:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "12596:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "12588:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "12588:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "12315:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "12466:9:18",
                      "nodeType": "YulTypedName",
                      "src": "12466:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "12481:4:18",
                      "nodeType": "YulTypedName",
                      "src": "12481:4:18",
                      "type": ""
                    }
                  ],
                  "src": "12315:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "12846:115:18",
                    "nodeType": "YulBlock",
                    "src": "12846:115:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "12868:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "12868:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "12876:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "12876:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "12864:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "12864:3:18"
                              },
                              "nativeSrc": "12864:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "12864:14:18"
                            },
                            {
                              "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                              "kind": "string",
                              "nativeSrc": "12880:34:18",
                              "nodeType": "YulLiteral",
                              "src": "12880:34:18",
                              "type": "",
                              "value": "ERC20: approve to the zero addre"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "12857:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "12857:6:18"
                          },
                          "nativeSrc": "12857:58:18",
                          "nodeType": "YulFunctionCall",
                          "src": "12857:58:18"
                        },
                        "nativeSrc": "12857:58:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "12857:58:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "12936:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "12936:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "12944:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "12944:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "12932:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "12932:3:18"
                              },
                              "nativeSrc": "12932:15:18",
                              "nodeType": "YulFunctionCall",
                              "src": "12932:15:18"
                            },
                            {
                              "hexValue": "7373",
                              "kind": "string",
                              "nativeSrc": "12949:4:18",
                              "nodeType": "YulLiteral",
                              "src": "12949:4:18",
                              "type": "",
                              "value": "ss"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "12925:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "12925:6:18"
                          },
                          "nativeSrc": "12925:29:18",
                          "nodeType": "YulFunctionCall",
                          "src": "12925:29:18"
                        },
                        "nativeSrc": "12925:29:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "12925:29:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                  "nativeSrc": "12740:221:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "12838:6:18",
                      "nodeType": "YulTypedName",
                      "src": "12838:6:18",
                      "type": ""
                    }
                  ],
                  "src": "12740:221:18"
                },
                {
                  "body": {
                    "nativeSrc": "13113:220:18",
                    "nodeType": "YulBlock",
                    "src": "13113:220:18",
                    "statements": [
                      {
                        "nativeSrc": "13123:74:18",
                        "nodeType": "YulAssignment",
                        "src": "13123:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "13189:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "13189:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13194:2:18",
                              "nodeType": "YulLiteral",
                              "src": "13194:2:18",
                              "type": "",
                              "value": "34"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "13130:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "13130:58:18"
                          },
                          "nativeSrc": "13130:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "13130:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "13123:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "13123:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "13295:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "13295:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                            "nativeSrc": "13206:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "13206:88:18"
                          },
                          "nativeSrc": "13206:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "13206:93:18"
                        },
                        "nativeSrc": "13206:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "13206:93:18"
                      },
                      {
                        "nativeSrc": "13308:19:18",
                        "nodeType": "YulAssignment",
                        "src": "13308:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "13319:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "13319:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13324:2:18",
                              "nodeType": "YulLiteral",
                              "src": "13324:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "13315:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "13315:3:18"
                          },
                          "nativeSrc": "13315:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "13315:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "13308:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "13308:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "12967:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "13101:3:18",
                      "nodeType": "YulTypedName",
                      "src": "13101:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "13109:3:18",
                      "nodeType": "YulTypedName",
                      "src": "13109:3:18",
                      "type": ""
                    }
                  ],
                  "src": "12967:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "13510:248:18",
                    "nodeType": "YulBlock",
                    "src": "13510:248:18",
                    "statements": [
                      {
                        "nativeSrc": "13520:26:18",
                        "nodeType": "YulAssignment",
                        "src": "13520:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "13532:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "13532:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "13543:2:18",
                              "nodeType": "YulLiteral",
                              "src": "13543:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "13528:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "13528:3:18"
                          },
                          "nativeSrc": "13528:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "13528:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "13520:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "13520:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "13567:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "13567:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "13578:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "13578:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "13563:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "13563:3:18"
                              },
                              "nativeSrc": "13563:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "13563:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "13586:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "13586:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "13592:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "13592:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "13582:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "13582:3:18"
                              },
                              "nativeSrc": "13582:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "13582:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13556:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "13556:6:18"
                          },
                          "nativeSrc": "13556:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "13556:47:18"
                        },
                        "nativeSrc": "13556:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "13556:47:18"
                      },
                      {
                        "nativeSrc": "13612:139:18",
                        "nodeType": "YulAssignment",
                        "src": "13612:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "13746:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "13746:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "13620:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "13620:124:18"
                          },
                          "nativeSrc": "13620:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "13620:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "13612:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "13612:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "13339:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "13490:9:18",
                      "nodeType": "YulTypedName",
                      "src": "13490:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "13505:4:18",
                      "nodeType": "YulTypedName",
                      "src": "13505:4:18",
                      "type": ""
                    }
                  ],
                  "src": "13339:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "13870:73:18",
                    "nodeType": "YulBlock",
                    "src": "13870:73:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "13892:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "13892:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "13900:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "13900:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "13888:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "13888:3:18"
                              },
                              "nativeSrc": "13888:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "13888:14:18"
                            },
                            {
                              "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                              "kind": "string",
                              "nativeSrc": "13904:31:18",
                              "nodeType": "YulLiteral",
                              "src": "13904:31:18",
                              "type": "",
                              "value": "ERC20: insufficient allowance"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "13881:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "13881:6:18"
                          },
                          "nativeSrc": "13881:55:18",
                          "nodeType": "YulFunctionCall",
                          "src": "13881:55:18"
                        },
                        "nativeSrc": "13881:55:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "13881:55:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                  "nativeSrc": "13764:179:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "13862:6:18",
                      "nodeType": "YulTypedName",
                      "src": "13862:6:18",
                      "type": ""
                    }
                  ],
                  "src": "13764:179:18"
                },
                {
                  "body": {
                    "nativeSrc": "14095:220:18",
                    "nodeType": "YulBlock",
                    "src": "14095:220:18",
                    "statements": [
                      {
                        "nativeSrc": "14105:74:18",
                        "nodeType": "YulAssignment",
                        "src": "14105:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "14171:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "14171:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "14176:2:18",
                              "nodeType": "YulLiteral",
                              "src": "14176:2:18",
                              "type": "",
                              "value": "29"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "14112:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "14112:58:18"
                          },
                          "nativeSrc": "14112:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "14112:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "14105:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "14105:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "14277:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "14277:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                            "nativeSrc": "14188:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "14188:88:18"
                          },
                          "nativeSrc": "14188:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "14188:93:18"
                        },
                        "nativeSrc": "14188:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "14188:93:18"
                      },
                      {
                        "nativeSrc": "14290:19:18",
                        "nodeType": "YulAssignment",
                        "src": "14290:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "14301:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "14301:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "14306:2:18",
                              "nodeType": "YulLiteral",
                              "src": "14306:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "14297:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "14297:3:18"
                          },
                          "nativeSrc": "14297:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "14297:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "14290:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "14290:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "13949:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "14083:3:18",
                      "nodeType": "YulTypedName",
                      "src": "14083:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "14091:3:18",
                      "nodeType": "YulTypedName",
                      "src": "14091:3:18",
                      "type": ""
                    }
                  ],
                  "src": "13949:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "14492:248:18",
                    "nodeType": "YulBlock",
                    "src": "14492:248:18",
                    "statements": [
                      {
                        "nativeSrc": "14502:26:18",
                        "nodeType": "YulAssignment",
                        "src": "14502:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "14514:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "14514:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "14525:2:18",
                              "nodeType": "YulLiteral",
                              "src": "14525:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "14510:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "14510:3:18"
                          },
                          "nativeSrc": "14510:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "14510:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "14502:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "14502:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "14549:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "14549:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14560:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "14560:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14545:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "14545:3:18"
                              },
                              "nativeSrc": "14545:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "14545:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "14568:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "14568:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "14574:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "14574:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "14564:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "14564:3:18"
                              },
                              "nativeSrc": "14564:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "14564:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14538:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "14538:6:18"
                          },
                          "nativeSrc": "14538:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "14538:47:18"
                        },
                        "nativeSrc": "14538:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "14538:47:18"
                      },
                      {
                        "nativeSrc": "14594:139:18",
                        "nodeType": "YulAssignment",
                        "src": "14594:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "14728:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "14728:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "14602:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "14602:124:18"
                          },
                          "nativeSrc": "14602:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "14602:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "14594:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "14594:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "14321:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "14472:9:18",
                      "nodeType": "YulTypedName",
                      "src": "14472:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "14487:4:18",
                      "nodeType": "YulTypedName",
                      "src": "14487:4:18",
                      "type": ""
                    }
                  ],
                  "src": "14321:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "14852:118:18",
                    "nodeType": "YulBlock",
                    "src": "14852:118:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "14874:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "14874:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14882:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "14882:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14870:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "14870:3:18"
                              },
                              "nativeSrc": "14870:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "14870:14:18"
                            },
                            {
                              "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                              "kind": "string",
                              "nativeSrc": "14886:34:18",
                              "nodeType": "YulLiteral",
                              "src": "14886:34:18",
                              "type": "",
                              "value": "ERC20: transfer from the zero ad"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14863:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "14863:6:18"
                          },
                          "nativeSrc": "14863:58:18",
                          "nodeType": "YulFunctionCall",
                          "src": "14863:58:18"
                        },
                        "nativeSrc": "14863:58:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "14863:58:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "14942:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "14942:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "14950:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "14950:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "14938:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "14938:3:18"
                              },
                              "nativeSrc": "14938:15:18",
                              "nodeType": "YulFunctionCall",
                              "src": "14938:15:18"
                            },
                            {
                              "hexValue": "6472657373",
                              "kind": "string",
                              "nativeSrc": "14955:7:18",
                              "nodeType": "YulLiteral",
                              "src": "14955:7:18",
                              "type": "",
                              "value": "dress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "14931:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "14931:6:18"
                          },
                          "nativeSrc": "14931:32:18",
                          "nodeType": "YulFunctionCall",
                          "src": "14931:32:18"
                        },
                        "nativeSrc": "14931:32:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "14931:32:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                  "nativeSrc": "14746:224:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "14844:6:18",
                      "nodeType": "YulTypedName",
                      "src": "14844:6:18",
                      "type": ""
                    }
                  ],
                  "src": "14746:224:18"
                },
                {
                  "body": {
                    "nativeSrc": "15122:220:18",
                    "nodeType": "YulBlock",
                    "src": "15122:220:18",
                    "statements": [
                      {
                        "nativeSrc": "15132:74:18",
                        "nodeType": "YulAssignment",
                        "src": "15132:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "15198:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "15198:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15203:2:18",
                              "nodeType": "YulLiteral",
                              "src": "15203:2:18",
                              "type": "",
                              "value": "37"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "15139:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "15139:58:18"
                          },
                          "nativeSrc": "15139:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "15139:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "15132:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "15132:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "15304:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "15304:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                            "nativeSrc": "15215:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "15215:88:18"
                          },
                          "nativeSrc": "15215:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "15215:93:18"
                        },
                        "nativeSrc": "15215:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "15215:93:18"
                      },
                      {
                        "nativeSrc": "15317:19:18",
                        "nodeType": "YulAssignment",
                        "src": "15317:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "15328:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "15328:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15333:2:18",
                              "nodeType": "YulLiteral",
                              "src": "15333:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "15324:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "15324:3:18"
                          },
                          "nativeSrc": "15324:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "15324:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "15317:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "15317:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "14976:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "15110:3:18",
                      "nodeType": "YulTypedName",
                      "src": "15110:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "15118:3:18",
                      "nodeType": "YulTypedName",
                      "src": "15118:3:18",
                      "type": ""
                    }
                  ],
                  "src": "14976:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "15519:248:18",
                    "nodeType": "YulBlock",
                    "src": "15519:248:18",
                    "statements": [
                      {
                        "nativeSrc": "15529:26:18",
                        "nodeType": "YulAssignment",
                        "src": "15529:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "15541:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "15541:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "15552:2:18",
                              "nodeType": "YulLiteral",
                              "src": "15552:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "15537:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "15537:3:18"
                          },
                          "nativeSrc": "15537:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "15537:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "15529:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "15529:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "15576:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "15576:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15587:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "15587:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15572:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "15572:3:18"
                              },
                              "nativeSrc": "15572:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "15572:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "15595:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "15595:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "15601:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "15601:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "15591:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "15591:3:18"
                              },
                              "nativeSrc": "15591:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "15591:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15565:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "15565:6:18"
                          },
                          "nativeSrc": "15565:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "15565:47:18"
                        },
                        "nativeSrc": "15565:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "15565:47:18"
                      },
                      {
                        "nativeSrc": "15621:139:18",
                        "nodeType": "YulAssignment",
                        "src": "15621:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "15755:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "15755:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "15629:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "15629:124:18"
                          },
                          "nativeSrc": "15629:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "15629:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "15621:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "15621:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "15348:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "15499:9:18",
                      "nodeType": "YulTypedName",
                      "src": "15499:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "15514:4:18",
                      "nodeType": "YulTypedName",
                      "src": "15514:4:18",
                      "type": ""
                    }
                  ],
                  "src": "15348:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "15879:116:18",
                    "nodeType": "YulBlock",
                    "src": "15879:116:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "15901:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "15901:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15909:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "15909:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15897:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "15897:3:18"
                              },
                              "nativeSrc": "15897:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "15897:14:18"
                            },
                            {
                              "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                              "kind": "string",
                              "nativeSrc": "15913:34:18",
                              "nodeType": "YulLiteral",
                              "src": "15913:34:18",
                              "type": "",
                              "value": "ERC20: transfer to the zero addr"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15890:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "15890:6:18"
                          },
                          "nativeSrc": "15890:58:18",
                          "nodeType": "YulFunctionCall",
                          "src": "15890:58:18"
                        },
                        "nativeSrc": "15890:58:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "15890:58:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "15969:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "15969:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "15977:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "15977:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "15965:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "15965:3:18"
                              },
                              "nativeSrc": "15965:15:18",
                              "nodeType": "YulFunctionCall",
                              "src": "15965:15:18"
                            },
                            {
                              "hexValue": "657373",
                              "kind": "string",
                              "nativeSrc": "15982:5:18",
                              "nodeType": "YulLiteral",
                              "src": "15982:5:18",
                              "type": "",
                              "value": "ess"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "15958:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "15958:6:18"
                          },
                          "nativeSrc": "15958:30:18",
                          "nodeType": "YulFunctionCall",
                          "src": "15958:30:18"
                        },
                        "nativeSrc": "15958:30:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "15958:30:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                  "nativeSrc": "15773:222:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "15871:6:18",
                      "nodeType": "YulTypedName",
                      "src": "15871:6:18",
                      "type": ""
                    }
                  ],
                  "src": "15773:222:18"
                },
                {
                  "body": {
                    "nativeSrc": "16147:220:18",
                    "nodeType": "YulBlock",
                    "src": "16147:220:18",
                    "statements": [
                      {
                        "nativeSrc": "16157:74:18",
                        "nodeType": "YulAssignment",
                        "src": "16157:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "16223:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "16223:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16228:2:18",
                              "nodeType": "YulLiteral",
                              "src": "16228:2:18",
                              "type": "",
                              "value": "35"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "16164:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "16164:58:18"
                          },
                          "nativeSrc": "16164:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "16164:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "16157:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "16157:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "16329:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "16329:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                            "nativeSrc": "16240:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "16240:88:18"
                          },
                          "nativeSrc": "16240:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "16240:93:18"
                        },
                        "nativeSrc": "16240:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "16240:93:18"
                      },
                      {
                        "nativeSrc": "16342:19:18",
                        "nodeType": "YulAssignment",
                        "src": "16342:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "16353:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "16353:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16358:2:18",
                              "nodeType": "YulLiteral",
                              "src": "16358:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "16349:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "16349:3:18"
                          },
                          "nativeSrc": "16349:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "16349:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "16342:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "16342:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "16001:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "16135:3:18",
                      "nodeType": "YulTypedName",
                      "src": "16135:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "16143:3:18",
                      "nodeType": "YulTypedName",
                      "src": "16143:3:18",
                      "type": ""
                    }
                  ],
                  "src": "16001:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "16544:248:18",
                    "nodeType": "YulBlock",
                    "src": "16544:248:18",
                    "statements": [
                      {
                        "nativeSrc": "16554:26:18",
                        "nodeType": "YulAssignment",
                        "src": "16554:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "16566:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "16566:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "16577:2:18",
                              "nodeType": "YulLiteral",
                              "src": "16577:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "16562:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "16562:3:18"
                          },
                          "nativeSrc": "16562:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "16562:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "16554:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "16554:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "16601:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "16601:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "16612:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "16612:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "16597:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "16597:3:18"
                              },
                              "nativeSrc": "16597:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "16597:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "16620:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "16620:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "16626:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "16626:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "16616:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "16616:3:18"
                              },
                              "nativeSrc": "16616:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "16616:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16590:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "16590:6:18"
                          },
                          "nativeSrc": "16590:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "16590:47:18"
                        },
                        "nativeSrc": "16590:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "16590:47:18"
                      },
                      {
                        "nativeSrc": "16646:139:18",
                        "nodeType": "YulAssignment",
                        "src": "16646:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "16780:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "16780:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "16654:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "16654:124:18"
                          },
                          "nativeSrc": "16654:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "16654:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "16646:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "16646:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "16373:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "16524:9:18",
                      "nodeType": "YulTypedName",
                      "src": "16524:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "16539:4:18",
                      "nodeType": "YulTypedName",
                      "src": "16539:4:18",
                      "type": ""
                    }
                  ],
                  "src": "16373:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "16904:119:18",
                    "nodeType": "YulBlock",
                    "src": "16904:119:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "16926:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "16926:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "16934:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "16934:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "16922:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "16922:3:18"
                              },
                              "nativeSrc": "16922:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "16922:14:18"
                            },
                            {
                              "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                              "kind": "string",
                              "nativeSrc": "16938:34:18",
                              "nodeType": "YulLiteral",
                              "src": "16938:34:18",
                              "type": "",
                              "value": "ERC20: transfer amount exceeds b"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16915:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "16915:6:18"
                          },
                          "nativeSrc": "16915:58:18",
                          "nodeType": "YulFunctionCall",
                          "src": "16915:58:18"
                        },
                        "nativeSrc": "16915:58:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "16915:58:18"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "16994:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "16994:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "17002:2:18",
                                  "nodeType": "YulLiteral",
                                  "src": "17002:2:18",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "16990:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "16990:3:18"
                              },
                              "nativeSrc": "16990:15:18",
                              "nodeType": "YulFunctionCall",
                              "src": "16990:15:18"
                            },
                            {
                              "hexValue": "616c616e6365",
                              "kind": "string",
                              "nativeSrc": "17007:8:18",
                              "nodeType": "YulLiteral",
                              "src": "17007:8:18",
                              "type": "",
                              "value": "alance"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "16983:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "16983:6:18"
                          },
                          "nativeSrc": "16983:33:18",
                          "nodeType": "YulFunctionCall",
                          "src": "16983:33:18"
                        },
                        "nativeSrc": "16983:33:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "16983:33:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                  "nativeSrc": "16798:225:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "16896:6:18",
                      "nodeType": "YulTypedName",
                      "src": "16896:6:18",
                      "type": ""
                    }
                  ],
                  "src": "16798:225:18"
                },
                {
                  "body": {
                    "nativeSrc": "17175:220:18",
                    "nodeType": "YulBlock",
                    "src": "17175:220:18",
                    "statements": [
                      {
                        "nativeSrc": "17185:74:18",
                        "nodeType": "YulAssignment",
                        "src": "17185:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "17251:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "17251:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17256:2:18",
                              "nodeType": "YulLiteral",
                              "src": "17256:2:18",
                              "type": "",
                              "value": "38"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "17192:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "17192:58:18"
                          },
                          "nativeSrc": "17192:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "17192:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "17185:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "17185:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "17357:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "17357:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                            "nativeSrc": "17268:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "17268:88:18"
                          },
                          "nativeSrc": "17268:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "17268:93:18"
                        },
                        "nativeSrc": "17268:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "17268:93:18"
                      },
                      {
                        "nativeSrc": "17370:19:18",
                        "nodeType": "YulAssignment",
                        "src": "17370:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "17381:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "17381:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17386:2:18",
                              "nodeType": "YulLiteral",
                              "src": "17386:2:18",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "17377:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "17377:3:18"
                          },
                          "nativeSrc": "17377:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "17377:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "17370:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "17370:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "17029:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "17163:3:18",
                      "nodeType": "YulTypedName",
                      "src": "17163:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "17171:3:18",
                      "nodeType": "YulTypedName",
                      "src": "17171:3:18",
                      "type": ""
                    }
                  ],
                  "src": "17029:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "17572:248:18",
                    "nodeType": "YulBlock",
                    "src": "17572:248:18",
                    "statements": [
                      {
                        "nativeSrc": "17582:26:18",
                        "nodeType": "YulAssignment",
                        "src": "17582:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "17594:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "17594:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "17605:2:18",
                              "nodeType": "YulLiteral",
                              "src": "17605:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "17590:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "17590:3:18"
                          },
                          "nativeSrc": "17590:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "17590:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "17582:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "17582:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "17629:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "17629:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "17640:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "17640:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "17625:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "17625:3:18"
                              },
                              "nativeSrc": "17625:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "17625:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "17648:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "17648:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "17654:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "17654:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "17644:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "17644:3:18"
                              },
                              "nativeSrc": "17644:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "17644:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17618:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "17618:6:18"
                          },
                          "nativeSrc": "17618:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "17618:47:18"
                        },
                        "nativeSrc": "17618:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "17618:47:18"
                      },
                      {
                        "nativeSrc": "17674:139:18",
                        "nodeType": "YulAssignment",
                        "src": "17674:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "17808:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "17808:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "17682:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "17682:124:18"
                          },
                          "nativeSrc": "17682:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "17682:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "17674:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "17674:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "17401:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "17552:9:18",
                      "nodeType": "YulTypedName",
                      "src": "17552:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "17567:4:18",
                      "nodeType": "YulTypedName",
                      "src": "17567:4:18",
                      "type": ""
                    }
                  ],
                  "src": "17401:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "17932:76:18",
                    "nodeType": "YulBlock",
                    "src": "17932:76:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "17954:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "17954:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "17962:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "17962:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "17950:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "17950:3:18"
                              },
                              "nativeSrc": "17950:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "17950:14:18"
                            },
                            {
                              "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                              "kind": "string",
                              "nativeSrc": "17966:34:18",
                              "nodeType": "YulLiteral",
                              "src": "17966:34:18",
                              "type": "",
                              "value": "Ownable: caller is not the owner"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "17943:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "17943:6:18"
                          },
                          "nativeSrc": "17943:58:18",
                          "nodeType": "YulFunctionCall",
                          "src": "17943:58:18"
                        },
                        "nativeSrc": "17943:58:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "17943:58:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                  "nativeSrc": "17826:182:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "17924:6:18",
                      "nodeType": "YulTypedName",
                      "src": "17924:6:18",
                      "type": ""
                    }
                  ],
                  "src": "17826:182:18"
                },
                {
                  "body": {
                    "nativeSrc": "18160:220:18",
                    "nodeType": "YulBlock",
                    "src": "18160:220:18",
                    "statements": [
                      {
                        "nativeSrc": "18170:74:18",
                        "nodeType": "YulAssignment",
                        "src": "18170:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "18236:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "18236:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "18241:2:18",
                              "nodeType": "YulLiteral",
                              "src": "18241:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "18177:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "18177:58:18"
                          },
                          "nativeSrc": "18177:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "18177:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "18170:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "18170:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "18342:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "18342:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                            "nativeSrc": "18253:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "18253:88:18"
                          },
                          "nativeSrc": "18253:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "18253:93:18"
                        },
                        "nativeSrc": "18253:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "18253:93:18"
                      },
                      {
                        "nativeSrc": "18355:19:18",
                        "nodeType": "YulAssignment",
                        "src": "18355:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "18366:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "18366:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "18371:2:18",
                              "nodeType": "YulLiteral",
                              "src": "18371:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "18362:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "18362:3:18"
                          },
                          "nativeSrc": "18362:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "18362:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "18355:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "18355:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "18014:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "18148:3:18",
                      "nodeType": "YulTypedName",
                      "src": "18148:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "18156:3:18",
                      "nodeType": "YulTypedName",
                      "src": "18156:3:18",
                      "type": ""
                    }
                  ],
                  "src": "18014:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "18557:248:18",
                    "nodeType": "YulBlock",
                    "src": "18557:248:18",
                    "statements": [
                      {
                        "nativeSrc": "18567:26:18",
                        "nodeType": "YulAssignment",
                        "src": "18567:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "18579:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "18579:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "18590:2:18",
                              "nodeType": "YulLiteral",
                              "src": "18590:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "18575:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "18575:3:18"
                          },
                          "nativeSrc": "18575:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "18575:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "18567:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "18567:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "18614:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "18614:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "18625:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "18625:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "18610:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "18610:3:18"
                              },
                              "nativeSrc": "18610:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "18610:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "18633:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "18633:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "18639:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "18639:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "18629:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "18629:3:18"
                              },
                              "nativeSrc": "18629:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "18629:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "18603:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "18603:6:18"
                          },
                          "nativeSrc": "18603:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "18603:47:18"
                        },
                        "nativeSrc": "18603:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "18603:47:18"
                      },
                      {
                        "nativeSrc": "18659:139:18",
                        "nodeType": "YulAssignment",
                        "src": "18659:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "18793:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "18793:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "18667:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "18667:124:18"
                          },
                          "nativeSrc": "18667:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "18667:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "18659:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "18659:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "18386:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "18537:9:18",
                      "nodeType": "YulTypedName",
                      "src": "18537:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "18552:4:18",
                      "nodeType": "YulTypedName",
                      "src": "18552:4:18",
                      "type": ""
                    }
                  ],
                  "src": "18386:419:18"
                },
                {
                  "body": {
                    "nativeSrc": "18917:75:18",
                    "nodeType": "YulBlock",
                    "src": "18917:75:18",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nativeSrc": "18939:6:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "18939:6:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "18947:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "18947:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "18935:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "18935:3:18"
                              },
                              "nativeSrc": "18935:14:18",
                              "nodeType": "YulFunctionCall",
                              "src": "18935:14:18"
                            },
                            {
                              "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                              "kind": "string",
                              "nativeSrc": "18951:33:18",
                              "nodeType": "YulLiteral",
                              "src": "18951:33:18",
                              "type": "",
                              "value": "ERC20: mint to the zero address"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "18928:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "18928:6:18"
                          },
                          "nativeSrc": "18928:57:18",
                          "nodeType": "YulFunctionCall",
                          "src": "18928:57:18"
                        },
                        "nativeSrc": "18928:57:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "18928:57:18"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                  "nativeSrc": "18811:181:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nativeSrc": "18909:6:18",
                      "nodeType": "YulTypedName",
                      "src": "18909:6:18",
                      "type": ""
                    }
                  ],
                  "src": "18811:181:18"
                },
                {
                  "body": {
                    "nativeSrc": "19144:220:18",
                    "nodeType": "YulBlock",
                    "src": "19144:220:18",
                    "statements": [
                      {
                        "nativeSrc": "19154:74:18",
                        "nodeType": "YulAssignment",
                        "src": "19154:74:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "19220:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "19220:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "19225:2:18",
                              "nodeType": "YulLiteral",
                              "src": "19225:2:18",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nativeSrc": "19161:58:18",
                            "nodeType": "YulIdentifier",
                            "src": "19161:58:18"
                          },
                          "nativeSrc": "19161:67:18",
                          "nodeType": "YulFunctionCall",
                          "src": "19161:67:18"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nativeSrc": "19154:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "19154:3:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "19326:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "19326:3:18"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                            "nativeSrc": "19237:88:18",
                            "nodeType": "YulIdentifier",
                            "src": "19237:88:18"
                          },
                          "nativeSrc": "19237:93:18",
                          "nodeType": "YulFunctionCall",
                          "src": "19237:93:18"
                        },
                        "nativeSrc": "19237:93:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "19237:93:18"
                      },
                      {
                        "nativeSrc": "19339:19:18",
                        "nodeType": "YulAssignment",
                        "src": "19339:19:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nativeSrc": "19350:3:18",
                              "nodeType": "YulIdentifier",
                              "src": "19350:3:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "19355:2:18",
                              "nodeType": "YulLiteral",
                              "src": "19355:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "19346:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "19346:3:18"
                          },
                          "nativeSrc": "19346:12:18",
                          "nodeType": "YulFunctionCall",
                          "src": "19346:12:18"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nativeSrc": "19339:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "19339:3:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                  "nativeSrc": "18998:366:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nativeSrc": "19132:3:18",
                      "nodeType": "YulTypedName",
                      "src": "19132:3:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nativeSrc": "19140:3:18",
                      "nodeType": "YulTypedName",
                      "src": "19140:3:18",
                      "type": ""
                    }
                  ],
                  "src": "18998:366:18"
                },
                {
                  "body": {
                    "nativeSrc": "19541:248:18",
                    "nodeType": "YulBlock",
                    "src": "19541:248:18",
                    "statements": [
                      {
                        "nativeSrc": "19551:26:18",
                        "nodeType": "YulAssignment",
                        "src": "19551:26:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "19563:9:18",
                              "nodeType": "YulIdentifier",
                              "src": "19563:9:18"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "19574:2:18",
                              "nodeType": "YulLiteral",
                              "src": "19574:2:18",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "19559:3:18",
                            "nodeType": "YulIdentifier",
                            "src": "19559:3:18"
                          },
                          "nativeSrc": "19559:18:18",
                          "nodeType": "YulFunctionCall",
                          "src": "19559:18:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "19551:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "19551:4:18"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "19598:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "19598:9:18"
                                },
                                {
                                  "kind": "number",
                                  "nativeSrc": "19609:1:18",
                                  "nodeType": "YulLiteral",
                                  "src": "19609:1:18",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "19594:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "19594:3:18"
                              },
                              "nativeSrc": "19594:17:18",
                              "nodeType": "YulFunctionCall",
                              "src": "19594:17:18"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nativeSrc": "19617:4:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "19617:4:18"
                                },
                                {
                                  "name": "headStart",
                                  "nativeSrc": "19623:9:18",
                                  "nodeType": "YulIdentifier",
                                  "src": "19623:9:18"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nativeSrc": "19613:3:18",
                                "nodeType": "YulIdentifier",
                                "src": "19613:3:18"
                              },
                              "nativeSrc": "19613:20:18",
                              "nodeType": "YulFunctionCall",
                              "src": "19613:20:18"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nativeSrc": "19587:6:18",
                            "nodeType": "YulIdentifier",
                            "src": "19587:6:18"
                          },
                          "nativeSrc": "19587:47:18",
                          "nodeType": "YulFunctionCall",
                          "src": "19587:47:18"
                        },
                        "nativeSrc": "19587:47:18",
                        "nodeType": "YulExpressionStatement",
                        "src": "19587:47:18"
                      },
                      {
                        "nativeSrc": "19643:139:18",
                        "nodeType": "YulAssignment",
                        "src": "19643:139:18",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "19777:4:18",
                              "nodeType": "YulIdentifier",
                              "src": "19777:4:18"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                            "nativeSrc": "19651:124:18",
                            "nodeType": "YulIdentifier",
                            "src": "19651:124:18"
                          },
                          "nativeSrc": "19651:131:18",
                          "nodeType": "YulFunctionCall",
                          "src": "19651:131:18"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nativeSrc": "19643:4:18",
                            "nodeType": "YulIdentifier",
                            "src": "19643:4:18"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
                  "nativeSrc": "19370:419:18",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nativeSrc": "19521:9:18",
                      "nodeType": "YulTypedName",
                      "src": "19521:9:18",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nativeSrc": "19536:4:18",
                      "nodeType": "YulTypedName",
                      "src": "19536:4:18",
                      "type": ""
                    }
                  ],
                  "src": "19370:419:18"
                }
              ]
            },
            "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint8(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: decreased allowance below\")\n\n        mstore(add(memPtr, 32), \" zero\")\n\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve from the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve to the zero addre\")\n\n        mstore(add(memPtr, 32), \"ss\")\n\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: insufficient allowance\")\n\n    }\n\n    function abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer from the zero ad\")\n\n        mstore(add(memPtr, 32), \"dress\")\n\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer to the zero addr\")\n\n        mstore(add(memPtr, 32), \"ess\")\n\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds b\")\n\n        mstore(add(memPtr, 32), \"alance\")\n\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
            "id": 18,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "sourceMap": "167:302:17:-:0;;;216:46;;;;;;;;;;1980:113:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2054:5;2046;:13;;;;;;:::i;:::-;;2079:7;2069;:17;;;;;;:::i;:::-;;1980:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;167:302:17;;640:96:12;693:7;719:10;712:17;;640:96;:::o;2426:187:0:-;2499:16;2518:6;;;;;;;;;;;2499:25;;2543:8;2534:6;;:17;;;;;;;;;;;;;;;;;;2597:8;2566:40;;2587:8;2566:40;;;;;;;;;;;;2489:124;2426:187;:::o;7:99:18:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;167:302:17:-;;;;;;;",
        "deployedSourceMap": "167:302:17:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98:8;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4444:197;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3255:106;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5203:256;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3104:91;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5854:234;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;276:186:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3419:125:8;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1824:101:0;;;:::i;:::-;;1201:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2369:102:8;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6575:427;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3740:189;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3987:149;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2074:198:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2158:98:8;2212:13;2244:5;2237:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98;:::o;4444:197::-;4527:4;4543:13;4559:12;:10;:12::i;:::-;4543:28;;4581:32;4590:5;4597:7;4606:6;4581:8;:32::i;:::-;4630:4;4623:11;;;4444:197;;;;:::o;3255:106::-;3316:7;3342:12;;3335:19;;3255:106;:::o;5203:256::-;5300:4;5316:15;5334:12;:10;:12::i;:::-;5316:30;;5356:38;5372:4;5378:7;5387:6;5356:15;:38::i;:::-;5404:27;5414:4;5420:2;5424:6;5404:9;:27::i;:::-;5448:4;5441:11;;;5203:256;;;;;:::o;3104:91::-;3162:5;3186:2;3179:9;;3104:91;:::o;5854:234::-;5942:4;5958:13;5974:12;:10;:12::i;:::-;5958:28;;5996:64;6005:5;6012:7;6049:10;6021:25;6031:5;6038:7;6021:9;:25::i;:::-;:38;;;;:::i;:::-;5996:8;:64::i;:::-;6077:4;6070:11;;;5854:234;;;;:::o;276:186:17:-;1094:13:0;:11;:13::i;:::-;385:38:17::1;391:3;412:10;:8;:10::i;:::-;406:2;:16;;;;:::i;:::-;396:7;:26;;;;:::i;:::-;385:5;:38::i;:::-;276:186:::0;;:::o;3419:125:8:-;3493:7;3519:9;:18;3529:7;3519:18;;;;;;;;;;;;;;;;3512:25;;3419:125;;;:::o;1824:101:0:-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;1201:85::-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;2369:102:8:-;2425:13;2457:7;2450:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2369:102;:::o;6575:427::-;6668:4;6684:13;6700:12;:10;:12::i;:::-;6684:28;;6722:24;6749:25;6759:5;6766:7;6749:9;:25::i;:::-;6722:52;;6812:15;6792:16;:35;;6784:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6903:60;6912:5;6919:7;6947:15;6928:16;:34;6903:8;:60::i;:::-;6991:4;6984:11;;;;6575:427;;;;:::o;3740:189::-;3819:4;3835:13;3851:12;:10;:12::i;:::-;3835:28;;3873;3883:5;3890:2;3894:6;3873:9;:28::i;:::-;3918:4;3911:11;;;3740:189;;;;:::o;3987:149::-;4076:7;4102:11;:18;4114:5;4102:18;;;;;;;;;;;;;;;:27;4121:7;4102:27;;;;;;;;;;;;;;;;4095:34;;3987:149;;;;:::o;2074:198:0:-;1094:13;:11;:13::i;:::-;2182:1:::1;2162:22;;:8;:22;;::::0;2154:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;640:96:12:-;693:7;719:10;712:17;;640:96;:::o;10457:340:8:-;10575:1;10558:19;;:5;:19;;;10550:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10655:1;10636:21;;:7;:21;;;10628:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10737:6;10707:11;:18;10719:5;10707:18;;;;;;;;;;;;;;;:27;10726:7;10707:27;;;;;;;;;;;;;;;:36;;;;10774:7;10758:32;;10767:5;10758:32;;;10783:6;10758:32;;;;;;:::i;:::-;;;;;;;;10457:340;;;:::o;11078:411::-;11178:24;11205:25;11215:5;11222:7;11205:9;:25::i;:::-;11178:52;;11264:17;11244:16;:37;11240:243;;11325:6;11305:16;:26;;11297:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;11407:51;11416:5;11423:7;11451:6;11432:16;:25;11407:8;:51::i;:::-;11240:243;11168:321;11078:411;;;:::o;7456:788::-;7568:1;7552:18;;:4;:18;;;7544:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;7644:1;7630:16;;:2;:16;;;7622:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;7697:38;7718:4;7724:2;7728:6;7697:20;:38::i;:::-;7746:19;7768:9;:15;7778:4;7768:15;;;;;;;;;;;;;;;;7746:37;;7816:6;7801:11;:21;;7793:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;7931:6;7917:11;:20;7899:9;:15;7909:4;7899:15;;;;;;;;;;;;;;;:38;;;;8131:6;8114:9;:13;8124:2;8114:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;8178:2;8163:26;;8172:4;8163:26;;;8182:6;8163:26;;;;;;:::i;:::-;;;;;;;;8200:37;8220:4;8226:2;8230:6;8200:19;:37::i;:::-;7534:710;7456:788;;;:::o;1359:130:0:-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;8520:535:8:-;8622:1;8603:21;;:7;:21;;;8595:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8671:49;8700:1;8704:7;8713:6;8671:20;:49::i;:::-;8747:6;8731:12;;:22;;;;;;;:::i;:::-;;;;;;;;8921:6;8899:9;:18;8909:7;8899:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;8973:7;8952:37;;8969:1;8952:37;;;8982:6;8952:37;;;;;;:::i;:::-;;;;;;;;9000:48;9028:1;9032:7;9041:6;9000:19;:48::i;:::-;8520:535;;:::o;2426:187:0:-;2499:16;2518:6;;;;;;;;;;;2499:25;;2543:8;2534:6;;:17;;;;;;;;;;;;;;;;;;2597:8;2566:40;;2587:8;2566:40;;;;;;;;;;;;2489:124;2426:187;:::o;12073:91:8:-;;;;:::o;12752:90::-;;;;:::o;7:99:18:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:246::-;368:1;378:113;392:6;389:1;386:13;378:113;;;477:1;472:3;468:11;462:18;458:1;453:3;449:11;442:39;414:2;411:1;407:10;402:15;;378:113;;;525:1;516:6;511:3;507:16;500:27;349:184;287:246;;;:::o;539:102::-;580:6;631:2;627:7;622:2;615:5;611:14;607:28;597:38;;539:102;;;:::o;647:377::-;735:3;763:39;796:5;763:39;:::i;:::-;818:71;882:6;877:3;818:71;:::i;:::-;811:78;;898:65;956:6;951:3;944:4;937:5;933:16;898:65;:::i;:::-;988:29;1010:6;988:29;:::i;:::-;983:3;979:39;972:46;;739:285;647:377;;;;:::o;1030:313::-;1143:4;1181:2;1170:9;1166:18;1158:26;;1230:9;1224:4;1220:20;1216:1;1205:9;1201:17;1194:47;1258:78;1331:4;1322:6;1258:78;:::i;:::-;1250:86;;1030:313;;;;:::o;1430:117::-;1539:1;1536;1529:12;1676:126;1713:7;1753:42;1746:5;1742:54;1731:65;;1676:126;;;:::o;1808:96::-;1845:7;1874:24;1892:5;1874:24;:::i;:::-;1863:35;;1808:96;;;:::o;1910:122::-;1983:24;2001:5;1983:24;:::i;:::-;1976:5;1973:35;1963:63;;2022:1;2019;2012:12;1963:63;1910:122;:::o;2038:139::-;2084:5;2122:6;2109:20;2100:29;;2138:33;2165:5;2138:33;:::i;:::-;2038:139;;;;:::o;2183:77::-;2220:7;2249:5;2238:16;;2183:77;;;:::o;2266:122::-;2339:24;2357:5;2339:24;:::i;:::-;2332:5;2329:35;2319:63;;2378:1;2375;2368:12;2319:63;2266:122;:::o;2394:139::-;2440:5;2478:6;2465:20;2456:29;;2494:33;2521:5;2494:33;:::i;:::-;2394:139;;;;:::o;2539:474::-;2607:6;2615;2664:2;2652:9;2643:7;2639:23;2635:32;2632:119;;;2670:79;;:::i;:::-;2632:119;2790:1;2815:53;2860:7;2851:6;2840:9;2836:22;2815:53;:::i;:::-;2805:63;;2761:117;2917:2;2943:53;2988:7;2979:6;2968:9;2964:22;2943:53;:::i;:::-;2933:63;;2888:118;2539:474;;;;;:::o;3019:90::-;3053:7;3096:5;3089:13;3082:21;3071:32;;3019:90;;;:::o;3115:109::-;3196:21;3211:5;3196:21;:::i;:::-;3191:3;3184:34;3115:109;;:::o;3230:210::-;3317:4;3355:2;3344:9;3340:18;3332:26;;3368:65;3430:1;3419:9;3415:17;3406:6;3368:65;:::i;:::-;3230:210;;;;:::o;3446:118::-;3533:24;3551:5;3533:24;:::i;:::-;3528:3;3521:37;3446:118;;:::o;3570:222::-;3663:4;3701:2;3690:9;3686:18;3678:26;;3714:71;3782:1;3771:9;3767:17;3758:6;3714:71;:::i;:::-;3570:222;;;;:::o;3798:619::-;3875:6;3883;3891;3940:2;3928:9;3919:7;3915:23;3911:32;3908:119;;;3946:79;;:::i;:::-;3908:119;4066:1;4091:53;4136:7;4127:6;4116:9;4112:22;4091:53;:::i;:::-;4081:63;;4037:117;4193:2;4219:53;4264:7;4255:6;4244:9;4240:22;4219:53;:::i;:::-;4209:63;;4164:118;4321:2;4347:53;4392:7;4383:6;4372:9;4368:22;4347:53;:::i;:::-;4337:63;;4292:118;3798:619;;;;;:::o;4423:86::-;4458:7;4498:4;4491:5;4487:16;4476:27;;4423:86;;;:::o;4515:112::-;4598:22;4614:5;4598:22;:::i;:::-;4593:3;4586:35;4515:112;;:::o;4633:214::-;4722:4;4760:2;4749:9;4745:18;4737:26;;4773:67;4837:1;4826:9;4822:17;4813:6;4773:67;:::i;:::-;4633:214;;;;:::o;4853:329::-;4912:6;4961:2;4949:9;4940:7;4936:23;4932:32;4929:119;;;4967:79;;:::i;:::-;4929:119;5087:1;5112:53;5157:7;5148:6;5137:9;5133:22;5112:53;:::i;:::-;5102:63;;5058:117;4853:329;;;;:::o;5188:118::-;5275:24;5293:5;5275:24;:::i;:::-;5270:3;5263:37;5188:118;;:::o;5312:222::-;5405:4;5443:2;5432:9;5428:18;5420:26;;5456:71;5524:1;5513:9;5509:17;5500:6;5456:71;:::i;:::-;5312:222;;;;:::o;5540:474::-;5608:6;5616;5665:2;5653:9;5644:7;5640:23;5636:32;5633:119;;;5671:79;;:::i;:::-;5633:119;5791:1;5816:53;5861:7;5852:6;5841:9;5837:22;5816:53;:::i;:::-;5806:63;;5762:117;5918:2;5944:53;5989:7;5980:6;5969:9;5965:22;5944:53;:::i;:::-;5934:63;;5889:118;5540:474;;;;;:::o;6020:180::-;6068:77;6065:1;6058:88;6165:4;6162:1;6155:15;6189:4;6186:1;6179:15;6206:320;6250:6;6287:1;6281:4;6277:12;6267:22;;6334:1;6328:4;6324:12;6355:18;6345:81;;6411:4;6403:6;6399:17;6389:27;;6345:81;6473:2;6465:6;6462:14;6442:18;6439:38;6436:84;;6492:18;;:::i;:::-;6436:84;6257:269;6206:320;;;:::o;6532:180::-;6580:77;6577:1;6570:88;6677:4;6674:1;6667:15;6701:4;6698:1;6691:15;6718:191;6758:3;6777:20;6795:1;6777:20;:::i;:::-;6772:25;;6811:20;6829:1;6811:20;:::i;:::-;6806:25;;6854:1;6851;6847:9;6840:16;;6875:3;6872:1;6869:10;6866:36;;;6882:18;;:::i;:::-;6866:36;6718:191;;;;:::o;6915:102::-;6957:8;7004:5;7001:1;6997:13;6976:34;;6915:102;;;:::o;7023:848::-;7084:5;7091:4;7115:6;7106:15;;7139:5;7130:14;;7153:712;7174:1;7164:8;7161:15;7153:712;;;7269:4;7264:3;7260:14;7254:4;7251:24;7248:50;;;7278:18;;:::i;:::-;7248:50;7328:1;7318:8;7314:16;7311:451;;;7743:4;7736:5;7732:16;7723:25;;7311:451;7793:4;7787;7783:15;7775:23;;7823:32;7846:8;7823:32;:::i;:::-;7811:44;;7153:712;;;7023:848;;;;;;;:::o;7877:1073::-;7931:5;8122:8;8112:40;;8143:1;8134:10;;8145:5;;8112:40;8171:4;8161:36;;8188:1;8179:10;;8190:5;;8161:36;8257:4;8305:1;8300:27;;;;8341:1;8336:191;;;;8250:277;;8300:27;8318:1;8309:10;;8320:5;;;8336:191;8381:3;8371:8;8368:17;8365:43;;;8388:18;;:::i;:::-;8365:43;8437:8;8434:1;8430:16;8421:25;;8472:3;8465:5;8462:14;8459:40;;;8479:18;;:::i;:::-;8459:40;8512:5;;;8250:277;;8636:2;8626:8;8623:16;8617:3;8611:4;8608:13;8604:36;8586:2;8576:8;8573:16;8568:2;8562:4;8559:12;8555:35;8539:111;8536:246;;;8692:8;8686:4;8682:19;8673:28;;8727:3;8720:5;8717:14;8714:40;;;8734:18;;:::i;:::-;8714:40;8767:5;;8536:246;8807:42;8845:3;8835:8;8829:4;8826:1;8807:42;:::i;:::-;8792:57;;;;8881:4;8876:3;8872:14;8865:5;8862:25;8859:51;;;8890:18;;:::i;:::-;8859:51;8939:4;8932:5;8928:16;8919:25;;7877:1073;;;;;;:::o;8956:281::-;9014:5;9038:23;9056:4;9038:23;:::i;:::-;9030:31;;9082:25;9098:8;9082:25;:::i;:::-;9070:37;;9126:104;9163:66;9153:8;9147:4;9126:104;:::i;:::-;9117:113;;8956:281;;;;:::o;9243:410::-;9283:7;9306:20;9324:1;9306:20;:::i;:::-;9301:25;;9340:20;9358:1;9340:20;:::i;:::-;9335:25;;9395:1;9392;9388:9;9417:30;9435:11;9417:30;:::i;:::-;9406:41;;9596:1;9587:7;9583:15;9580:1;9577:22;9557:1;9550:9;9530:83;9507:139;;9626:18;;:::i;:::-;9507:139;9291:362;9243:410;;;;:::o;9659:224::-;9799:34;9795:1;9787:6;9783:14;9776:58;9868:7;9863:2;9855:6;9851:15;9844:32;9659:224;:::o;9889:366::-;10031:3;10052:67;10116:2;10111:3;10052:67;:::i;:::-;10045:74;;10128:93;10217:3;10128:93;:::i;:::-;10246:2;10241:3;10237:12;10230:19;;9889:366;;;:::o;10261:419::-;10427:4;10465:2;10454:9;10450:18;10442:26;;10514:9;10508:4;10504:20;10500:1;10489:9;10485:17;10478:47;10542:131;10668:4;10542:131;:::i;:::-;10534:139;;10261:419;;;:::o;10686:225::-;10826:34;10822:1;10814:6;10810:14;10803:58;10895:8;10890:2;10882:6;10878:15;10871:33;10686:225;:::o;10917:366::-;11059:3;11080:67;11144:2;11139:3;11080:67;:::i;:::-;11073:74;;11156:93;11245:3;11156:93;:::i;:::-;11274:2;11269:3;11265:12;11258:19;;10917:366;;;:::o;11289:419::-;11455:4;11493:2;11482:9;11478:18;11470:26;;11542:9;11536:4;11532:20;11528:1;11517:9;11513:17;11506:47;11570:131;11696:4;11570:131;:::i;:::-;11562:139;;11289:419;;;:::o;11714:223::-;11854:34;11850:1;11842:6;11838:14;11831:58;11923:6;11918:2;11910:6;11906:15;11899:31;11714:223;:::o;11943:366::-;12085:3;12106:67;12170:2;12165:3;12106:67;:::i;:::-;12099:74;;12182:93;12271:3;12182:93;:::i;:::-;12300:2;12295:3;12291:12;12284:19;;11943:366;;;:::o;12315:419::-;12481:4;12519:2;12508:9;12504:18;12496:26;;12568:9;12562:4;12558:20;12554:1;12543:9;12539:17;12532:47;12596:131;12722:4;12596:131;:::i;:::-;12588:139;;12315:419;;;:::o;12740:221::-;12880:34;12876:1;12868:6;12864:14;12857:58;12949:4;12944:2;12936:6;12932:15;12925:29;12740:221;:::o;12967:366::-;13109:3;13130:67;13194:2;13189:3;13130:67;:::i;:::-;13123:74;;13206:93;13295:3;13206:93;:::i;:::-;13324:2;13319:3;13315:12;13308:19;;12967:366;;;:::o;13339:419::-;13505:4;13543:2;13532:9;13528:18;13520:26;;13592:9;13586:4;13582:20;13578:1;13567:9;13563:17;13556:47;13620:131;13746:4;13620:131;:::i;:::-;13612:139;;13339:419;;;:::o;13764:179::-;13904:31;13900:1;13892:6;13888:14;13881:55;13764:179;:::o;13949:366::-;14091:3;14112:67;14176:2;14171:3;14112:67;:::i;:::-;14105:74;;14188:93;14277:3;14188:93;:::i;:::-;14306:2;14301:3;14297:12;14290:19;;13949:366;;;:::o;14321:419::-;14487:4;14525:2;14514:9;14510:18;14502:26;;14574:9;14568:4;14564:20;14560:1;14549:9;14545:17;14538:47;14602:131;14728:4;14602:131;:::i;:::-;14594:139;;14321:419;;;:::o;14746:224::-;14886:34;14882:1;14874:6;14870:14;14863:58;14955:7;14950:2;14942:6;14938:15;14931:32;14746:224;:::o;14976:366::-;15118:3;15139:67;15203:2;15198:3;15139:67;:::i;:::-;15132:74;;15215:93;15304:3;15215:93;:::i;:::-;15333:2;15328:3;15324:12;15317:19;;14976:366;;;:::o;15348:419::-;15514:4;15552:2;15541:9;15537:18;15529:26;;15601:9;15595:4;15591:20;15587:1;15576:9;15572:17;15565:47;15629:131;15755:4;15629:131;:::i;:::-;15621:139;;15348:419;;;:::o;15773:222::-;15913:34;15909:1;15901:6;15897:14;15890:58;15982:5;15977:2;15969:6;15965:15;15958:30;15773:222;:::o;16001:366::-;16143:3;16164:67;16228:2;16223:3;16164:67;:::i;:::-;16157:74;;16240:93;16329:3;16240:93;:::i;:::-;16358:2;16353:3;16349:12;16342:19;;16001:366;;;:::o;16373:419::-;16539:4;16577:2;16566:9;16562:18;16554:26;;16626:9;16620:4;16616:20;16612:1;16601:9;16597:17;16590:47;16654:131;16780:4;16654:131;:::i;:::-;16646:139;;16373:419;;;:::o;16798:225::-;16938:34;16934:1;16926:6;16922:14;16915:58;17007:8;17002:2;16994:6;16990:15;16983:33;16798:225;:::o;17029:366::-;17171:3;17192:67;17256:2;17251:3;17192:67;:::i;:::-;17185:74;;17268:93;17357:3;17268:93;:::i;:::-;17386:2;17381:3;17377:12;17370:19;;17029:366;;;:::o;17401:419::-;17567:4;17605:2;17594:9;17590:18;17582:26;;17654:9;17648:4;17644:20;17640:1;17629:9;17625:17;17618:47;17682:131;17808:4;17682:131;:::i;:::-;17674:139;;17401:419;;;:::o;17826:182::-;17966:34;17962:1;17954:6;17950:14;17943:58;17826:182;:::o;18014:366::-;18156:3;18177:67;18241:2;18236:3;18177:67;:::i;:::-;18170:74;;18253:93;18342:3;18253:93;:::i;:::-;18371:2;18366:3;18362:12;18355:19;;18014:366;;;:::o;18386:419::-;18552:4;18590:2;18579:9;18575:18;18567:26;;18639:9;18633:4;18629:20;18625:1;18614:9;18610:17;18603:47;18667:131;18793:4;18667:131;:::i;:::-;18659:139;;18386:419;;;:::o;18811:181::-;18951:33;18947:1;18939:6;18935:14;18928:57;18811:181;:::o;18998:366::-;19140:3;19161:67;19225:2;19220:3;19161:67;:::i;:::-;19154:74;;19237:93;19326:3;19237:93;:::i;:::-;19355:2;19350:3;19346:12;19339:19;;18998:366;;;:::o;19370:419::-;19536:4;19574:2;19563:9;19559:18;19551:26;;19623:9;19617:4;19613:20;19609:1;19598:9;19594:17;19587:47;19651:131;19777:4;19651:131;:::i;:::-;19643:139;;19370:419;;;:::o",
        "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\ncontract FrensToken is ERC20, Ownable {\n    \n    constructor() ERC20(\"FrensToken\", \"$FRENS\") {}\n        \n    function mint(\n    address _to,\n    uint256 _amount // Amount of tokens\n    ) external onlyOwner {  \n        _mint(_to, _amount * 10 ** decimals());  // checks that addres is not 0\n    }\n    \n}",
        "sourcePath": "/Users/vlad/Development/ETHParis/ETHParis2023/contracts/FRENS.sol",
        "ast": {
          "absolutePath": "project:/contracts/FRENS.sol",
          "exportedSymbols": {
            "Context": [
              2889
            ],
            "ERC20": [
              2434
            ],
            "FrensToken": [
              3132
            ],
            "IERC20": [
              2512
            ],
            "IERC20Metadata": [
              2537
            ],
            "Ownable": [
              112
            ]
          },
          "id": 3133,
          "license": "MIT",
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 3097,
              "literals": [
                "solidity",
                "^",
                "0.8",
                ".9"
              ],
              "nodeType": "PragmaDirective",
              "src": "32:23:17"
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
              "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
              "id": 3098,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 3133,
              "sourceUnit": 2435,
              "src": "57:55:17",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
              "file": "@openzeppelin/contracts/access/Ownable.sol",
              "id": 3099,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 3133,
              "sourceUnit": 113,
              "src": "113:52:17",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "baseName": {
                    "id": 3100,
                    "name": "ERC20",
                    "nameLocations": [
                      "190:5:17"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2434,
                    "src": "190:5:17"
                  },
                  "id": 3101,
                  "nodeType": "InheritanceSpecifier",
                  "src": "190:5:17"
                },
                {
                  "baseName": {
                    "id": 3102,
                    "name": "Ownable",
                    "nameLocations": [
                      "197:7:17"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 112,
                    "src": "197:7:17"
                  },
                  "id": 3103,
                  "nodeType": "InheritanceSpecifier",
                  "src": "197:7:17"
                }
              ],
              "canonicalName": "FrensToken",
              "contractDependencies": [],
              "contractKind": "contract",
              "fullyImplemented": true,
              "id": 3132,
              "linearizedBaseContracts": [
                3132,
                112,
                2434,
                2537,
                2512,
                2889
              ],
              "name": "FrensToken",
              "nameLocation": "176:10:17",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "body": {
                    "id": 3110,
                    "nodeType": "Block",
                    "src": "260:2:17",
                    "statements": []
                  },
                  "id": 3111,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "hexValue": "4672656e73546f6b656e",
                          "id": 3106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "236:12:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_3d1535f74db818724d256ef628a268072124888139cbd353d874e31e1e89bb37",
                            "typeString": "literal_string \"FrensToken\""
                          },
                          "value": "FrensToken"
                        },
                        {
                          "hexValue": "244652454e53",
                          "id": 3107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "250:8:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_f2e704620410248ce3407d29c17ec126356420621160eb7dd3c77b00cf7cbf4e",
                            "typeString": "literal_string \"$FRENS\""
                          },
                          "value": "$FRENS"
                        }
                      ],
                      "id": 3108,
                      "kind": "baseConstructorSpecifier",
                      "modifierName": {
                        "id": 3105,
                        "name": "ERC20",
                        "nameLocations": [
                          "230:5:17"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 2434,
                        "src": "230:5:17"
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "230:29:17"
                    }
                  ],
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 3104,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "227:2:17"
                  },
                  "returnParameters": {
                    "id": 3109,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "260:0:17"
                  },
                  "scope": 3132,
                  "src": "216:46:17",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 3130,
                    "nodeType": "Block",
                    "src": "373:89:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 3121,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3113,
                              "src": "391:3:17",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3127,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 3122,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3115,
                                "src": "396:7:17",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 3126,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "3130",
                                  "id": 3123,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "406:2:17",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_10_by_1",
                                    "typeString": "int_const 10"
                                  },
                                  "value": "10"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 3124,
                                    "name": "decimals",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1922,
                                    "src": "412:8:17",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                      "typeString": "function () view returns (uint8)"
                                    }
                                  },
                                  "id": 3125,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "412:10:17",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "src": "406:16:17",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "396:26:17",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 3120,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2251,
                            "src": "385:5:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 3128,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "385:38:17",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3129,
                        "nodeType": "ExpressionStatement",
                        "src": "385:38:17"
                      }
                    ]
                  },
                  "functionSelector": "40c10f19",
                  "id": 3131,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "id": 3118,
                      "kind": "modifierInvocation",
                      "modifierName": {
                        "id": 3117,
                        "name": "onlyOwner",
                        "nameLocations": [
                          "363:9:17"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 31,
                        "src": "363:9:17"
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "363:9:17"
                    }
                  ],
                  "name": "mint",
                  "nameLocation": "285:4:17",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 3116,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3113,
                        "mutability": "mutable",
                        "name": "_to",
                        "nameLocation": "303:3:17",
                        "nodeType": "VariableDeclaration",
                        "scope": 3131,
                        "src": "295:11:17",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 3112,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "295:7:17",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 3115,
                        "mutability": "mutable",
                        "name": "_amount",
                        "nameLocation": "320:7:17",
                        "nodeType": "VariableDeclaration",
                        "scope": 3131,
                        "src": "312:15:17",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 3114,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "312:7:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "289:64:17"
                  },
                  "returnParameters": {
                    "id": 3119,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "373:0:17"
                  },
                  "scope": 3132,
                  "src": "276:186:17",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                }
              ],
              "scope": 3133,
              "src": "167:302:17",
              "usedErrors": [],
              "usedEvents": [
                13,
                2446,
                2455
              ]
            }
          ],
          "src": "32:437:17"
        },
        "compiler": {
          "name": "solc",
          "version": "0.8.21+commit.d9974bed.Emscripten.clang"
        },
        "networks": {
          "10200": {
            "events": {
              "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  }
                ],
                "name": "Approval",
                "type": "event"
              },
              "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                  }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
              },
              "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  }
                ],
                "name": "Transfer",
                "type": "event"
              }
            },
            "links": {},
            "address": "0x5Cf31506566351E663cEe882796313dC0DF98B72",
            "transactionHash": "0x43c7d8a30374358d0f076ba14de89bcb26fd5d089f9ad6c7fcbd648747ef4134"
          }
        },
        "schemaVersion": "3.4.14",
        "updatedAt": "2023-07-23T02:34:50.526Z",
        "networkType": "ethereum",
        "devdoc": {
          "events": {
            "Approval(address,address,uint256)": {
              "details": "Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."
            },
            "Transfer(address,address,uint256)": {
              "details": "Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."
            }
          },
          "kind": "dev",
          "methods": {
            "allowance(address,address)": {
              "details": "See {IERC20-allowance}."
            },
            "approve(address,uint256)": {
              "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
            },
            "balanceOf(address)": {
              "details": "See {IERC20-balanceOf}."
            },
            "decimals()": {
              "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
            },
            "decreaseAllowance(address,uint256)": {
              "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
            },
            "increaseAllowance(address,uint256)": {
              "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
            },
            "name()": {
              "details": "Returns the name of the token."
            },
            "owner()": {
              "details": "Returns the address of the current owner."
            },
            "renounceOwnership()": {
              "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
            },
            "symbol()": {
              "details": "Returns the symbol of the token, usually a shorter version of the name."
            },
            "totalSupply()": {
              "details": "See {IERC20-totalSupply}."
            },
            "transfer(address,uint256)": {
              "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
            },
            "transferFrom(address,address,uint256)": {
              "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
            },
            "transferOwnership(address)": {
              "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
            }
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      }
]