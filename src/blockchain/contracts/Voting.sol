pragma solidity 0.8.9;

/**
 * This voting contract will allow for people to cast a vote using the blockchain.
 * We will need to be able to store who has voted for who so that you cannot double vote.
 */
contract Voting {

    // voter -> candidate 
    mapping(address => string) voterMap;
    // candidate -> votes
    mapping(string => uint128) public votes;

    constructor(){
        votes["Ben"] = 1337;
    }

}