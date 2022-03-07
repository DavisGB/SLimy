 // connect to Moralis server
 const CONTRACTADDRESS = "0x2Da69eF5bb13135CBD52CC4bee47fdD19d0ffC5b";
 const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenID",
				"type": "uint256"
			}
		],
		"name": "determinestats",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "publicminttestslimy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "random",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "returnOwnerOfAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "sendTokenToReceiver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "baseURI_",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

 const serverUrl = "https://vbia6ungwme4.usemoralis.com:2053/server";
 const appId = "Cl4BLITUxXGcGnRzbGueG6DP8I7UvmEeNQs5O7oa";
 Moralis.start({ serverUrl, appId });
   
       // add from here down
 async function login() {
   let user = Moralis.User.current();
   if (!user) {
     user = await Moralis.authenticate();
   }
   console.log("logged in user:", user);



 }

/*
async function uploadFire() {
	const data = fileInput.files[0]
	const file = new Moralis.File(data.name, data)
	await file.saveIPFS();
	console.log(file.ipfs(), file.hash());
	const slimeparts = new Moralis.Object('slimeparts');
	slimeparts.set('type','element');
	slimeparts.set('info','dark');
	slimeparts.set('file',file);
	await slimeparts.save();

}
*/
 async function getnftlist() {
	var listofnfts = new Array();
    let user = Moralis.User.current();
    const options = {
        chain: "bsc testnet",
        address: CONTRACTADDRESS,
        function_name: "balanceOf",
        abi: ABI,
        params: { owner: user.attributes.ethAddress},
      };
    const balanceoftokens = await Moralis.Web3API.native.runContractFunction(options);
    var pagenumber = document.getElementById("page-item").textContent;
      console.log(pagenumber);
    const x = await Moralis.Web3API.account.getNFTsForContract({
        chain: "bsc testnet",
        address: user.attributes.ethAddress,
        token_address: CONTRACTADDRESS,
      })

	  var slotnumber;
	  var tempelement;

    for(let o = 0; o<balanceoftokens.toString()/9;o++)
     {
         for(let i =0 ;i<9;i++)
         {
            var currentpointer = 9*(parseInt(pagenumber)-1) + i;
            if(9*(parseInt(pagenumber)-1) + i > balanceoftokens-1)
            {
                break;
            }
            slotnumber = i+1;
            tempelement = document.getElementById("innerinventory"+slotnumber);
			console.log(slotnumber);


            const temparray = x["result"];
            const unitfromarray = temparray[currentpointer];
            const urioftoken = unitfromarray["token_uri"];
			const tokenid = unitfromarray["token_id"];

			console.log(x);
			const options = {
				chain: "bsc testnet",
				address: CONTRACTADDRESS,
				function_name: "determinestats",
				abi: ABI,
				params: { tokenID: tokenid },
			  };
			const statarray = await Moralis.Web3API.native.runContractFunction(options);
			const element = statarray[1];
			console.log(element);
			const query = new Moralis.Query('slimeparts')
			query.equalTo('info', element)
			await query.find().then(function ([application]) {
		
				   const ipfs = application.get('file').ipfs()
				   const hash = application.get('file').hash()
				   console.log('IPFS url', ipfs)
				   console.log('IPFS hash', hash)
				   console.log(tempelement);
				   tempelement.src=ipfs;
				})	
		

            


        }

            
        }

  }



	

 async function logOut() {
   await Moralis.User.logOut();
   console.log("logged out");
 }

 document.getElementById("btn-login").onclick = login;
 document.getElementById("btn-logout").onclick = logOut;
 document.getElementById("get-nft-list").onclick = getnftlist;


 
var inv1 = document.getElementById("innerinventory1");
inv1.style.width=64;
inv1.style.height=64;

var inv2 = document.getElementById("innerinventory2");
inv2.style.width=64;
inv2.style.height=64;



var inv3 = document.getElementById("innerinventory3");
inv3.style.width=64;
inv3.style.height=64;


var inv4 = document.getElementById("innerinventory4");
inv4.style.width=64;
inv4.style.height=64;


var inv5 = document.getElementById("innerinventory5");
inv5.style.width=64;
inv5.style.height=64;


var inv6 = document.getElementById("innerinventory6");
inv6.style.width=64;
inv6.style.height=64;


var inv7 = document.getElementById("innerinventory7");
inv7.style.width=64;
inv7.style.height=64;


var inv8 = document.getElementById("innerinventory8");
inv8.style.width=64;
inv8.style.height=64;

var inv9 = document.getElementById("innerinventory9");
inv9.style.width=64;
inv9.style.height=64;

