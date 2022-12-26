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
        string username;
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
    mapping (address => string) public userNames;
    mapping(address => bool) public userExistsMap;

    mapping(address => Appointment[]) public appointmentsForDoctor;

    function getDoctor(uint _id) view public returns(Doctor memory){
        return doctors[_id];
    }
    
    function getUser(uint _id) view public returns(User memory){
        return users[_id];
    }

    function getUsername() view public returns(string memory){
        return userNames[msg.sender];
    }

    function getAppointmentForADoctor(address _addressDoc) view public returns(Appointment[] memory){
        return appointmentsForDoctor[_addressDoc];
    }

    function addDoctor(string memory _category, string memory _description) public {
        require(userExistsMap[msg.sender] == true, "User doesn't exists");
        string memory userName = getUsername();
        doctors[doctorsId] = Doctor(doctorsId, userName, _category, msg.sender, _description, 0, false);
    }

    function addUser(string memory _name) public{
        require(userExistsMap[msg.sender] == false, "User already exists");
        users[usersId] = User(usersId, _name, msg.sender);
        userNames[msg.sender] = _name;
        userExistsMap[msg.sender] = true;
        usersId += 1;
    }

    function addAppointment() public{

    }

    function changeAvailability(uint _id) public {
        Doctor storage doctor = doctors[_id];
        doctor.isAvailable = !doctor.isAvailable;
    }

    function changePrice(uint _id) public {
        
    }
}