// SPDX-License-Identifier: Unlicense

pragma solidity >=0.7.0 <0.9.0;

contract HuddleHack{
    uint public doctorsId = 0;
    uint public usersId = 0;
    uint public appointmentsId = 0;

    struct Doctor{
        uint id;
        string name;
        string category;
        address doctorWallet;
        string description;
        uint price;
        bool isAvailable;
    }

    struct User{
        uint id;
        string name;
        address userWallet;
    }

    struct Appointment{
        uint id;
        address customer;
        address doctor;
        string time;
    }

    mapping (uint => Doctor) public doctors;
    mapping (uint => User) public users;

    mapping(uint => uint[]) public appointmentsForDoctor;

    function getDoctor(uint _id) view public returns(Doctor memory){
        return doctors[_id];
    }
    
    function getUser(uint _id) view public returns(User memory){
        return users[_id];
    }

    function addDoctor() public {
        
    }

    function addUser() public{

    }

    function changeAvailability(uint _id) public {

    }

    // function getAppointment(uint _id) public returns(Appointment[] memory){
    //     return appointmentsForDoctor[_id];
    // }
}