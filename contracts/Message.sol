pragma solidity ^0.5.0;

import "./Ownable.sol";

contract Message is Ownable {
    string public message;
    uint public maxLength;   
    
    constructor() public {
        message = "Hello World";
        maxLength = 280;
    }
    
    function setMessage(string memory _message) public {
        require(bytes(_message).length <= maxLength, "The message is too long");
        
        message = _message;
    }
    
    function setMaxLength(uint _maxLength) public onlyOwner {
        maxLength = _maxLength;
    }
}