pragma solidity ^0.4.17;
// We have to specify what version of compiler this code will compile with

contract MessageEth {
  /* mapping field below is equivalent to an associative array or hash.
  */
  
  mapping (bytes32 => uint8) public messagesReceived;
  
  /* We will use an array of bytes32 instead to store the list of messages
  */
  
  bytes32[] public messageList;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of messages for which users will transacting
  */
  function MessageEth(bytes32[] messages) public {
    messageList = messages;
  }

  // This function returns the total messages has received so far
  function totalMessagesFor(bytes32 thread) view public returns (uint8) {
    return messagesReceived[thread];
  }

  // This function increments the message count for the specified thread.
  function addMessageForThread(bytes32 thread) public {
    messagesReceived[thread] += 1;
  }
}