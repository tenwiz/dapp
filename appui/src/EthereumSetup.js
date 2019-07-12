import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let messageABI = [
    {
        constant: true,
        inputs: [{ name: "thread", type: "bytes32" }],
        name: "totalMessagesFor",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "", type: "bytes32" }],
        name: "messagesReceived",
        outputs: [{ name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "thread", type: "bytes32" }],
        name: "addMessageForThread",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "", type: "uint256" }],
        name: "messageList",
        outputs: [{ name: "", type: "bytes32" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [{ name: "messages", type: "bytes32[]" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    }
];

let messageAddress = "0x42b9991505950cc5ac38a6557d8efcdc40235de6";
web3.eth.defaultAccount = web3.eth.accounts[0];

const messageContract = web3.eth.contract(messageABI).at(messageAddress);
export { messageContract };
