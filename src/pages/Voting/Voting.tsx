import * as React from 'react';
import Web3 from 'web3';
import Layout from '../../components/Layout';
import * as web3Utils from 'web3-utils';
import compiledVotingContract from '../../blockchain/contracts/output/combined.json';
import tx from 'ethereumjs-tx';

// Configure Provider
let options = {};
let httpProvider = new Web3.providers.HttpProvider("http://localhost:7545", options);

// Entry into web3 api
const web3 = new Web3(httpProvider);

// Print out available accounts
web3.eth.getAccounts(console.log);

// Create wallet and use it to sign transaction (deploy contract)
// let baseWallet = web3.eth.accounts.wallet.create(1);
// let myWallet = baseWallet[0];

// let tx = {
//     from : ganacheWalletAddr,
//     data : JSON.stringify(votingAbi)
// }


// myWallet.signTransaction(tx, signedTx => console.log(signedTx));

let votingAbi = compiledVotingContract.contracts['sources/Voting.sol:Voting'].abi as web3Utils.AbiItem[];

let ganacheWalletAddr = "0xfBD7294B8EC1E03f50cb1e854750bB313Fb06359";
let ganachePrivKey = "ba599e49b5b273966f96d48f36e4ad8f1f619e9da5cdb18d4198c797d30158bf";

let txData = {
    from : ganacheWalletAddr,
    data : JSON.stringify(votingAbi)
}

let deployOpts = {
    data: `0x${compiledVotingContract.contracts['sources/Voting.sol:Voting'].bin}`
}

// Create Contract
let votingContract = new web3.eth.Contract(votingAbi);
console.log(`Printing out contract: ${JSON.stringify(votingContract, null, 2)}`);
console.log(`Printing out bytecode of contract ${deployOpts.data}`);
votingContract.deploy(deployOpts).send({
    from: ganacheWalletAddr,
    gas: 1000000,
    gasPrice: '30000'
})
.on('error', function(error){ console.log(error)})
.on('transactionHash', function(transactionHash){ console.log(transactionHash) })
.on('receipt', function(receipt){
   console.log(`Receipt: ${receipt.contractAddress}`) // contains the new contract address
})


const Voting = () => {

    return (
        <Layout pageTitle="Voting Example">
            <p>voting example</p>
        </Layout>
    );
}


export default Voting;