// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MultiSig {
    ///A contract that allows 70% of validSigner to Approve before a withdrawal can be succesful

    address[] validSigner;
    uint256 ID = 1;
    uint256 public Quorum = 3;
    //maping of trnsaction Id to number of approval to status
    mapping(uint256 => mapping(uint256 => bool)) _approved;
    //mapping of transactionId to number of approval
    mapping(uint256 => uint256) public noOfApproval;
    //checking if an address has approved a particular transactionID
    mapping(address => mapping(uint256 => bool)) signed;
    mapping(uint256 => address) beneficiary;
    mapping(uint256 => uint256) amount;
    address owner;

    constructor(address[] memory _validSigner) {
        validSigner = _validSigner;
    }

    function withdrawEther(uint256 _amount) external {
        bool _valid = validOwner();
        Approve(ID);
        beneficiary[ID] = msg.sender;
        amount[ID] = _amount;
        ID++;
    }

    function validOwner() private view returns (bool success) {
        address valid;

        for (uint256 i = 0; i < validSigner.length; i++) {
            if (msg.sender == validSigner[i]) {
                valid = msg.sender;
            }
        }
        assert(valid != address(0));
        success = true;
    }

    function Approve(uint256 id) public {
        bool valid = validOwner();
        uint256 value = amount[id];
        address _ben = beneficiary[id];
        assert(signed[msg.sender][id] == false);
        signed[msg.sender][id] = true;
        noOfApproval[id] = noOfApproval[id] + 1;
        if (noOfApproval[id] >= Quorum) {
            _approved[id][noOfApproval[id]] = true;
            payable(_ben).transfer(value);
        }
    }

    function contractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    receive() external payable {}

    fallback() external payable {}
}
