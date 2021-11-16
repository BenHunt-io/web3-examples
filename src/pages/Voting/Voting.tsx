import * as React from 'react';
import Web3 from 'web3';
import Layout from '../../components/Layout';
import votingAbi from '../../blockchain/contracts/output/Voting.json';

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


let ganacheWalletAddr = "db72be27b46cd08f51a512d701b8a1f63d62d7f0e4aec68e374e333e0a88623c";
let ganachePrivKey = "db72be27b46cd08f51a512d701b8a1f63d62d7f0e4aec68e374e333e0a88623c";

let tx = {
    from : ganacheWalletAddr,
    data : JSON.stringify(votingAbi)
}



// Create Contract
// let VotingContract = new web3.eth.Contract(VotingAbi, )

// let contract = new web3.eth.Contract()

const Voting = () => {

    return (
        <Layout pageTitle="Voting Example">
            <p>voting example</p>
        </Layout>
    );
}


export default Voting;