const ABI = [{
		"inputs": [{
				"internalType": "uint256",
				"name": "_docId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "addAppointment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pfpUri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rating",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_meetingLink",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_availability",
				"type": "bool"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "string",
			"name": "_name",
			"type": "string"
		}],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "_docAddress",
			"type": "address"
		}],
		"name": "changeAvailability",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "changePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "address",
				"name": "_doc",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_rate",
				"type": "uint256"
			}
		],
		"name": "rateDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appointmentsForDoctor",
		"outputs": [{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "customer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "doctor",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "appointmentsId",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkDoctorExists",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkUserExists",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"name": "doctorAddressMap",
		"outputs": [{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pfp",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "doctorWallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rating",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "meetingLink",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "numberOfRaters",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"name": "doctorExistsMap",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "doctors",
		"outputs": [{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pfp",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "doctorWallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rating",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "meetingLink",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "numberOfRaters",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "doctorsId",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "_addressDoc",
			"type": "address"
		}],
		"name": "getAppointmentForADoctor",
		"outputs": [{
			"components": [{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "customer",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "doctor",
					"type": "address"
				}
			],
			"internalType": "struct MedXhuddle.Appointment[]",
			"name": "",
			"type": "tuple[]"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_docId",
			"type": "uint256"
		}],
		"name": "getDocAddress",
		"outputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_id",
			"type": "uint256"
		}],
		"name": "getDoctor",
		"outputs": [{
			"components": [{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "pfp",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "category",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "doctorWallet",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "rating",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "meetingLink",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "isAvailable",
					"type": "bool"
				},
				{
					"internalType": "uint256",
					"name": "numberOfRaters",
					"type": "uint256"
				}
			],
			"internalType": "struct MedXhuddle.Doctor",
			"name": "",
			"type": "tuple"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "docAdd",
			"type": "address"
		}],
		"name": "getDoctorByAddress",
		"outputs": [{
			"components": [{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "pfp",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "category",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "doctorWallet",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "description",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "rating",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "meetingLink",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "isAvailable",
					"type": "bool"
				},
				{
					"internalType": "uint256",
					"name": "numberOfRaters",
					"type": "uint256"
				}
			],
			"internalType": "struct MedXhuddle.Doctor",
			"name": "",
			"type": "tuple"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_id",
			"type": "uint256"
		}],
		"name": "getDoctorRating",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "_id",
			"type": "uint256"
		}],
		"name": "getUser",
		"outputs": [{
			"components": [{
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "username",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "userWallet",
					"type": "address"
				}
			],
			"internalType": "struct MedXhuddle.User",
			"name": "",
			"type": "tuple"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUsername",
		"outputs": [{
			"internalType": "string",
			"name": "",
			"type": "string"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"name": "userExistsMap",
		"outputs": [{
			"internalType": "bool",
			"name": "",
			"type": "bool"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		}],
		"name": "userNames",
		"outputs": [{
			"internalType": "string",
			"name": "",
			"type": "string"
		}],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"name": "users",
		"outputs": [{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userWallet",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usersId",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	}
]
export default ABI;