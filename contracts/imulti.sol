// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface imulti {
    function Approve(uint256 id) external;

    function withdrawEther(uint256 _amount) external;

    function contractBalance() external view returns (uint256);
}
