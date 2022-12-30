// SPDX-License-Identifier: Unlicense

pragma solidity >=0.7.0 <0.9.0;

contract HuddleHack{
    uint public doctorsId = 0;
    uint public usersId = 0;
    uint public appointmentsId = 0;

    struct Doctor{
        uint id;
        string name;
        string pfp;
        string category;
        address doctorWallet;
        string description;
        uint price;
        uint rating;
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
    }

    mapping (uint => Doctor) public doctors;
    mapping (address => Doctor) public doctorsAddressMap;
    mapping (uint => User) public users;
    mapping (address => string) public userNames;
    mapping(address => bool) public userExistsMap;
    mapping(address => bool) public doctorExistsMap;


    mapping(address => Appointment[]) public appointmentsForDoctor;

    function addDoctor(string memory _category, string memory _description, string memory _pfpUri) public {
        require(userExistsMap[msg.sender] == true, "User doesn't exists");
        string memory userName = getUsername();
        doctors[doctorsId] = Doctor(doctorsId, userName, _pfpUri, _category, msg.sender, _description, 0, 0, false);
        doctorExistsMap[msg.sender] = true;
        doctorsAddressMap[msg.sender] = doctors[doctorsId];
        doctorsId += 1;
    }

    function checkUserExists() view public returns(bool){
        if(userExistsMap[msg.sender] == true){
            return true;
        }else{
            return false;
        }
    }

     function checkDoctorExists() view public returns(bool){
        if(doctorExistsMap[msg.sender] == true){
            return true;
        }else{
            return false;
        }
    }

    function addUser(string memory _name) public{
        require(userExistsMap[msg.sender] == false, "User already exists");
        users[usersId] = User(usersId, _name, msg.sender);
        userNames[msg.sender] = _name;
        userExistsMap[msg.sender] = true;
        usersId += 1;
    }

    function addAppointment(uint _docId) public{
        // check kro ki doc hi toh nahi kr rha bc
        address docAddress = getDocAddress(_docId);
        require(docAddress != msg.sender, "You can't schedule a call with yourself");
        Appointment memory appointment = Appointment(appointmentsId, msg.sender, docAddress);
        appointmentsId += 1;
        appointmentsForDoctor[docAddress].push(appointment);
    }

    function changeAvailability(uint _id) public {
        Doctor storage doctor = doctors[_id];
        require(doctor.doctorWallet == msg.sender, "You are not authorized to do this");
        doctor.isAvailable = !doctor.isAvailable;
    }

    function changePrice(uint _id, uint _price) public {
        Doctor storage doctor = doctors[_id];
        require(doctor.doctorWallet == msg.sender, "You are not authorized to do this");
        doctor.price = _price;
    }

    function getDocAddress(uint _docId) view public returns (address) {
        address docAddress = doctors[_docId].doctorWallet;
        return docAddress;
    }

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

    function getDoctorRating(uint _id) view public returns(uint){
        return doctors[_id].rating;
    }
}