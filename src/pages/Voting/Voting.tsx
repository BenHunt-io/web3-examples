import * as React from 'react';
import Web3 from 'web3';
import Layout from '../../components/Layout';
import * as web3Utils from 'web3-utils';
import compiledVotingContract from '../../blockchain/contracts/output/combined.json';
import Web3EthContract from 'web3-eth-contract';
import { Button } from 'reactstrap';


// Choose a wallet address in our test blockchain to enact transactions from.
let ganacheWalletAddr = "0xfBD7294B8EC1E03f50cb1e854750bB313Fb06359";

let votingContractPromise = deployVotingContract();

function deployVotingContract() : Promise<Web3EthContract.Contract> {
    // Configure Provider
    let options = {};
    let httpProvider = new Web3.providers.HttpProvider("http://localhost:7545", options);

    // web3 api that interacts with the blockchain
    const web3 = new Web3(httpProvider);

    // Get the json interface, Abi, that was generated from compilation with solc.
    // This is the blueprint for the Voting contract. 
    let votingAbi = compiledVotingContract.contracts['sources/Voting.sol:Voting'].abi as web3Utils.AbiItem[];

    // Create Contract object. Translates method calls into underlying RPC calls into the blockchain.
    let votingContract = new web3.eth.Contract(votingAbi);

    // Deploy the contract to the blockchain using the byte code of the contract.
    let deployOptions = {
        data: `0x${compiledVotingContract.contracts['sources/Voting.sol:Voting'].bin}`
    }
    return  votingContract.deploy(deployOptions).send({
        from: ganacheWalletAddr,
        gas: 1000000,
        gasPrice: '30000'
    });
}

function callHelloWorld(contract : Promise<Web3EthContract.Contract>){
    contract
        // Call helloWorld method on contract, return promise of result
        .then((contract: Web3EthContract.Contract) : Promise<String> => {
            return new Promise(resolve => {
                resolve(contract.methods.helloWorld().call({from: ganacheWalletAddr}))
            })
        })
        // Print out the result of the contract call
        .then(result => console.log(`Contract Call Result: ${result}`));
}

const Voting = () => {

    return (
        <Layout pageTitle="Voting Example">
            <p>voting example</p>

            <Button color="primary" onClick={handler => {
                callHelloWorld(votingContractPromise);
            }}>
                Invoke Hello World
            </Button>
        </Layout>
    );
}


export default Voting;