// 'PLUTO Token' contract ABI
//
// address: 0x1bcc15fe3ba91365de44c5ee4cecb4861857c9cb
//
const tokenABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "x",
				"type": "uint256"
			},
			{
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "min",
		"outputs": [
			{
				"name": "z",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "self",
				"type": "uint256"
			},
			{
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "div",
		"outputs": [
			{
				"name": "z",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "self",
				"type": "uint256"
			},
			{
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "sub",
		"outputs": [
			{
				"name": "z",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "self",
				"type": "uint256"
			},
			{
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "mul",
		"outputs": [
			{
				"name": "z",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "self",
				"type": "uint256"
			},
			{
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "sum",
		"outputs": [
			{
				"name": "z",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "self",
				"type": "uint256"
			},
			{
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "mod",
		"outputs": [
			{
				"name": "z",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
];
