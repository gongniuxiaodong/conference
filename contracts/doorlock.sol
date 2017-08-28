pragma solidity ^0.4.0;


contract doorlock {
    mapping (address => uint)door;
    function setlock(address recevier,bool switch) returns(bool state){
         door[recevier]=switch;
        }
    function getlock(address addr)returns(bool state){
         return door[addr];
}

}
