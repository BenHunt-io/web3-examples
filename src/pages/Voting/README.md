## Compile
docker run -v $(pwd)/contracts:/sources ethereum/solc:0.8.9 --abi --optimize -o sources/output sources/Voting.sol