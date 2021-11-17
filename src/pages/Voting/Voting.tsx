import * as React from 'react';
import Web3 from 'web3';
import Layout from '../../components/Layout';
import votingAbi from '../../blockchain/contracts/output/Voting.json';
import * as web3Utils from 'web3-utils';

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


let ganacheWalletAddr = "0xfBD7294B8EC1E03f50cb1e854750bB313Fb06359";
let ganachePrivKey = "ba599e49b5b273966f96d48f36e4ad8f1f619e9da5cdb18d4198c797d30158bf";

let tx = {
    from : ganacheWalletAddr,
    data : JSON.stringify(votingAbi)
}


function test(test: web3Utils.AbiItem){
    console.log(`Printing out contract ${test.type}`);
}

test(votingAbi[0] as web3Utils.AbiItem)

// Create Contract
console.log(votingAbi);
// let contract = new web3.eth.Contract()

const Voting = () => {

    return (
        <Layout pageTitle="Voting Example">
            <p>voting example</p>
        </Layout>
    );
}


export default Voting;