 // connect to Moralis server
 const CONTRACTADDRESS = "0x14577371A82da1d118F1E03B541DFeab8E46168C";
 const FIGHTCONTRACTADDRESS = '0xb161A2D520109C5450948Ab4BCED3AdD84B227a0';
 const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenaddress",
				"type": "address"
			},
			{
				"internalType": "uint64",
				"name": "subscriptionId",
				"type": "uint64"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "have",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "want",
				"type": "address"
			}
		],
		"name": "OnlyCoordinatorCanFulfill",
		"type": "error"
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
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "RandomizedNumber",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "returnindex",
				"type": "uint256"
			}
		],
		"name": "mintedindex",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "publicminttestslimy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "randomWords",
				"type": "uint256[]"
			}
		],
		"name": "rawFulfillRandomWords",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [],
		"name": "requestRandomWords",
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfertoken",
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
				"name": "tokenID",
				"type": "uint256"
			}
		],
		"name": "determinestatschainlink",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_randomWords",
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
		"name": "s_requestId",
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
		"name": "slimytokencontract",
		"outputs": [
			{
				"internalType": "contract SlimyToken",
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
	}
];

const FIGHTABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "nftaddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			}
		],
		"name": "Battlelog",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenId2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokenId3",
				"type": "uint256"
			}
		],
		"name": "fightpve",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "slimynftcontract",
		"outputs": [
			{
				"internalType": "contract SlimyNFT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
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
	 document.getElementById("btn-login").textContent = user.attributes.ethAddress;
	 document.getElementById("btn-logout").style.display = "block";
   }

   console.log("logged in user:", user);



 }
 //uploading test NFTs
/*
 document.getElementById("uploadtest").onclick = uploadFire;
 const fileInput = document.getElementById("fileInput");
async function uploadFire() {
	const data = fileInput.files[0]
	const file = new Moralis.File(data.name, data)
	await file.saveIPFS();
	console.log(file.ipfs(), file.hash());
	const slimeparts = new Moralis.Object('slimeparts');
	slimeparts.set('type','rank');
	slimeparts.set('info','3');
	slimeparts.set('file',file);
	await slimeparts.save();

}
*/







async function lognftmetadataindatabase()
{
	await Moralis.enableWeb3()
	let user = Moralis.User.current();
	const options = {
        chain: "bsc testnet",
        contractAddress: CONTRACTADDRESS,
        functionName: "publicminttestslimy",
        abi: ABI,
        params: { to: user.attributes.ethAddress,},
      };
	const nftindex = await Moralis.executeFunction(options);
	nftindexlog = await nftindex.wait(3);
	nftfinalindex = parseInt(nftindexlog.logs[0].topics[3],16);
	console.log(nftfinalindex);
	const Slimenft = Moralis.Object.extend("nfts");
	const slimenft = new Slimenft();
	  
	
	slimenft.set("index", nftfinalindex);
	const options2 = {
        chain: "bsc testnet",
        contractAddress: CONTRACTADDRESS,
        functionName: "determinestats",
        abi: ABI,
        params: { tokenID: nftfinalindex,},
      };
	const statarray = await Moralis.executeFunction(options2);  
	
	slimenft.set("Rank", statarray[0]);
	slimenft.set("Element", statarray[1]);
	slimenft.set("HP", statarray[2]);
	slimenft.set("ATK", statarray[3]);
	slimenft.set("ATKType", statarray[4]);
	
	slimenft.save().then(
		(slimenft) => {
		  // Execute any logic that should take place after the object is saved.
		  alert("New object created with objectId: " + slimenft.index);
		},
		(error) => {
		  // Execute any logic that should take place if the save fails.
		  // error is a Moralis.Error with an error code and message.
		  alert("Failed to create new object, with error code: " + error.message);
		}
	);
} 
	function changeeventlogtext(texttoadd)
	{
		document.getElementById("eventlog").textContent = "Event Log: " + texttoadd;
 	}
	function enemyairandomizer()
	{
		var returnvalue;
		returnvalue = Math.floor(Math.random() * 3)+1;
		return returnvalue;
	}
	var playercharged = 1;
	var enemycharged = 1;
	var gamestate; //1 = ongoing 2=lost 3=won
	function doaction(typeofaction) //1 = atk 2=defend 3=charge 
	{
		var enemymove = enemyairandomizer();
		if(typeofaction==1)
		{
			if(enemymove == 2)
			{
				changeeventlogtext("Enemy Defends while you attack. Enemy Takes no Damage");
			}
			else if(enemymove == 1)
			{
				changeeventlogtext("Enemy attacks while you attack. Enemy takes " + teamcharacterslist[0].atk*playercharged + " damage while you take " + enemycharacterslist[0].atk*enemycharged +" damage.");
				enemynewhp = enemycharacterslist[0].hp - teamcharacterslist[0].atk * playercharged;
				enemycharacterslist[0].hp = enemynewhp;
				document.getElementById("enemycurrenthealth").textContent = "Enemy Health: " +enemynewhp;

				playernewhp = teamcharacterslist[0].hp - enemycharacterslist[0].atk * enemycharged;
				teamcharacterslist[0].hp = playernewhp;
				document.getElementById("playercurrenthealth").textContent = "Player Health: " +playernewhp;

				playercharged = 1;
				enemycharged = 1;
				
			}
			else
			{
				changeeventlogtext("Enemy charges while you attack. Enemy takes " +  teamcharacterslist[0].atk*playercharged + " damage while enemy is now charged ");

				enemynewhp = enemycharacterslist[0].hp - teamcharacterslist[0].atk * playercharged;
				enemycharacterslist[0].hp = enemynewhp;
				document.getElementById("enemycurrenthealth").textContent = "Enemy Health: " +enemynewhp;

				enemycharged = 2;
				playercharged = 1;
			}
		}
		else if(typeofaction == 2)
		{
			if(enemymove == 2)
			{
				changeeventlogtext("Enemy Defends while you defend. No one takes damage");
			}
			else if(enemymove == 1)
			{
				changeeventlogtext("Enemy attacks while you defend. You do not take any damage");
				
			}
			else
			{
				changeeventlogtext("Enemy charges while you defend. Enemy is now charged ");
				enemycharged = 2;
			}
		}
		else if(typeofaction == 3)
		{
			if(enemymove == 2)
			{
				changeeventlogtext("Enemy Defends while you charge. No one takes damage and you are now charged");
				playercharged = 2;
			}
			else if(enemymove == 1)
			{
				changeeventlogtext("Enemy attacks while you charge. You take " + enemycharacterslist[0].atk*enemycharged + " damage");
				playernewhp = teamcharacterslist[0].hp - enemycharacterslist[0].atk * enemycharged;
				teamcharacterslist[0].hp = playernewhp;
				document.getElementById("playercurrenthealth").textContent = "Player Health: " +playernewhp;

				playercharged = 2;
				
			}
			else
			{
				changeeventlogtext("Enemy charges while you charge. Enemy is now charged while you are also charged");
				playercharged = 2;
				enemycharged = 2;
			}
		}
		if(teamcharacterslist[0].hp<=0)
			{
				if(enemycharacterslist[0].hp<= 0)
				{
					document.getElementById("eventlog").textContent = "EVENT LOG: TIE";
				}
				else
				{
					document.getElementById("eventlog").textContent = "EVENT LOG: LOST";
				}
			}
			else if(enemycharacterslist[0].hp<=0)
			{
				document.getElementById("eventlog").textContent = "EVENT LOG: YOU WIN";
			}
	}
	async function startbattle()
	{
		document.getElementsByClassName("notingame")[0].style.display = 'none';
		//initialization of characters
		const query = new Moralis.Query('slimeparts');
		const element = teamcharacterslist[0].element;
		query.equalTo('info', element);
		await query.find().then(function ([application]) {
				const ipfs = application.get('file').ipfs()
				const hash = application.get('file').hash()
				document.getElementById("currentcharacter").src = ipfs;
				});
		document.getElementById("playercurrenthealth").textContent = "Player Health: " + teamcharacterslist[0].hp;
		document.getElementById("enemycurrenthealth").textContent = "Enemy Health: " + enemycharacterslist[0].hp;
	}
	function nextpage()
	{
		var pagenumber = document.getElementById("page-item").textContent;
		var pagenumbervalue = parseInt(pagenumber);
		pagenumbervalue += 1;
		document.getElementById("page-item").textContent = pagenumbervalue;
		getnftlist()
	}
	function previouspage()
	{
		var pagenumber = document.getElementById("page-item").textContent;
		var pagenumbervalue = parseInt(pagenumber);
		if(pagenumbervalue == 1)
		{
			console.log("cannot go further");
		}
		else
		{
			pagenumbervalue -= 1;
			document.getElementById("page-item").textContent = pagenumbervalue;
			getnftlist()
		}
		
	}

	function hex_to_ascii(str1)
	{
		var hex  = str1.toString();
		var str = '';
		for (var n = 0; n < hex.length; n += 2) {
			str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
		}
		return str;
	}
    async function fightversion2()
	{
		await Moralis.enableWeb3()
		console.log(teamcharacterslist[0].id)
		const options3 ={
			chain: "bsc testnet",
			contractAddress: FIGHTCONTRACTADDRESS,
			functionName: "fightpve",
			abi: FIGHTABI,
			params: { tokenId1: teamcharacterslist[0].id, tokenId2: teamcharacterslist[1].id, tokenId3: teamcharacterslist[2].id},
		};
		const fightlog = await Moralis.executeFunction(options3);
		await fightlog.wait(3).then(nftfightlog => {
		var convertostringhex = hex_to_ascii(nftfightlog.logs[0].data);
		document.getElementById("fight2").textContent = convertostringhex;
		
		
		
		
		
		
		});
		

		
	}
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
		var pagenumbervalue = parseInt(pagenumber)-1;

		var slotnumber = 1;
		var tempelement;
		var element;
		var rank;

			for(let i =pagenumbervalue*9 ;i<(pagenumbervalue*9)+9;i++)
			{
				var currentpointer = i;
				if(i > balanceoftokens-1)
				{
					var currentslot = i%9+1
					while(currentslot < 10)
					{
						
						var emptyslots = i%9+1;
						console.log(emptyslots);
						tempelement = document.getElementById("innerinventory"+emptyslots);
						temprank = document.getElementById("innerinventory" + emptyslots + "rank");	
						tempelement.src="/assets/images/empty.png";
						temprank.src="/assets/images/filler.png";
						i++;
						currentslot++;
					}
					break;
				}
				slotnumber = i%9+1;
				tempelement = document.getElementById("innerinventory"+slotnumber);
				const nfts = Moralis.Object.extend("nfts");
				const nftquery = new Moralis.Query(nfts);
				nftquery.equalTo('index',i)
				await nftquery.find().then(function ([application]){
				console.log(application);
				element = application.attributes.Element;
				rank = application.attributes.Rank;
				

				});
				console.log(slotnumber);
				console.log(element);
				const query = new Moralis.Query('slimeparts');
				query.equalTo('info', element);
				await query.find().then(function ([application]) {
			
					const ipfs = application.get('file').ipfs()
					const hash = application.get('file').hash()
					console.log('IPFS url', ipfs)
					console.log('IPFS hash', hash)
					console.log(tempelement);
					tempelement.src=ipfs;
					});


				temprank = document.getElementById("innerinventory" + slotnumber + "rank");	
				console.log(rank);
				const rankquery = new Moralis.Query('slimeparts')
				rankquery.equalTo('info', rank)
				await rankquery.find().then(function ([application]) {
			
					const ipfs = application.get('file').ipfs()
					const hash = application.get('file').hash()
					console.log('IPFS url', ipfs)
					console.log('IPFS hash', hash)
					console.log(tempelement);
					temprank.src=ipfs;
					})		
				
			

				


			

				
			}

	}




function init(){
	let user = Moralis.User.current();
	if(!user){
		document.getElementById("btn-logout").style.display = "none";
		console.log("this");
	}
	else{
		document.getElementById("btn-logout").style.display = "block";
		document.getElementById("btn-login").textContent = user.attributes.ethAddress.substring(0,8) + "....";
	}
	

}

	

 async function logOut() {
   await Moralis.User.logOut();
   document.getElementById("btn-logout").style.display = "none";
   document.getElementById("btn-login").textContent = "Login";
   console.log("logged out");
 }
 init();
 var teamcharacterslist = [new teamcharacters(-1,0,0,0,0,false), new teamcharacters(-1,0,0,0,0,false), new teamcharacters(-1,0,0,0,0,false)];
 var enemycharacterslist = [new teamcharacters(-1,500,20,1,"fire",false)];
 document.getElementById("btn-login").onclick = login;
 document.getElementById("btn-logout").onclick = logOut;
 //get nft list VVVVVV
 document.getElementById("get-nft-list").onclick = getnftlist;

 //testing offchain metadata VVVVV
 //document.getElementById("get-nft-list").onclick = lognftmetadataindatabase;



function checkifselected(indextocheck)
{
	for(let i = 0;i<3;i++)
	{
		
		if(teamcharacterslist[i].id == indextocheck)
		{
			return [true,i];
		}
	}
	return [false,-1];
}
function checkforfreeslot()
{
	for(let i = 0;i<3;i++)
	{
		if(teamcharacterslist[i].filled == false)
		{
			return i;
		}
	}
	return -1;
}
async function changevaluesofteamcharacterlist(cleardataorchange, indextochange, indexofnft) //cleardataorchange == 0 means clear 1 means change;
{
	if(cleardataorchange == 0)
	{
		teamcharacterslist[indextochange].id = -1;
		teamcharacterslist[indextochange].hp = 0;
		teamcharacterslist[indextochange].atk = 0;
		teamcharacterslist[indextochange].atktype = 0;
		teamcharacterslist[indextochange].element = 0;
		teamcharacterslist[indextochange].filled = false;
	}
	else
	{
		teamcharacterslist[indextochange].id = indexofnft;
		const nfts = Moralis.Object.extend("nfts");
				const nftquery = new Moralis.Query(nfts);
				nftquery.equalTo('index',indexofnft)
				await nftquery.find().then(function ([application]){
				teamcharacterslist[indextochange].element = application.attributes.Element;
				rank = application.attributes.Rank;
				var workingindex = indextochange + 1;
				document.getElementById("characterselectinfoid"+workingindex).textContent = "ID: " + teamcharacterslist[indextochange].id;
				teamcharacterslist[indextochange].hp = application.attributes.HP;
				document.getElementById("characterselectinfohp"+workingindex).textContent = "HP: " + teamcharacterslist[indextochange].hp;
				teamcharacterslist[indextochange].atk = application.attributes.ATK;
				document.getElementById("characterselectinfoatk"+workingindex).textContent = "ATK: " + teamcharacterslist[indextochange].atk;
				teamcharacterslist[indextochange].atktype = application.attributes.ATKType;
				var atktypestring;
				if(application.attributes.ATKType == 1)
				{
					atktypestring ="Melee";			
				}
				else if (application.attributes.ATKType == 2)
				{
					atktypestring = "Ranged";
				}
				else if (application.attributes.ATKType == 3)
				{
					atktypestring = "Mage";
				}
				document.getElementById("characterselectinfotype"+workingindex).textContent = "ATKTYPE: " + atktypestring;
				teamcharacterslist[indextochange].element = application.attributes.Element;
				document.getElementById("characterselectinfoelement"+workingindex).textContent = "Element: " + teamcharacterslist[indextochange].element;
				teamcharacterslist[indextochange].filled = true;
				});
	}
}
async function clickoncharacter(currentslot)
{
	var characterindex = currentslot - 1  + (parseInt(document.getElementById("page-item").textContent) - 1 ) * 9;
	console.log(characterindex);
	checkifselectedarray = checkifselected(characterindex);
	var freeslot = checkforfreeslot();
	
	if(checkifselectedarray[0] == false)
	{
		if(freeslot == -1)
		{
			console.log("full team");
		}
		else
		{
			teamcharacterslist[freeslot].id = characterindex;
			await changevaluesofteamcharacterlist(1,freeslot,characterindex).then(function(){
			console.log(teamcharacterslist[freeslot]);	
			});
			const query = new Moralis.Query('slimeparts');
			const element = teamcharacterslist[freeslot].element;
			query.equalTo('info', element);
			await query.find().then(function ([application]) {
					const slotelement = freeslot + 1;
					const ipfs = application.get('file').ipfs()
					const hash = application.get('file').hash()
					document.getElementById("characterselectelement" + slotelement).src = ipfs;
					});
			
		}
	}
	else
	{
		const slotelement = checkifselectedarray[1] + 1;
		changevaluesofteamcharacterlist(0,checkifselectedarray[1],0);
		document.getElementById("characterselectelement" + slotelement).src = "/assets/images/empty.png";
	}
}




var inv1 = document.getElementById("innerinventory1");
inv1.style.width=64;
inv1.style.height=64;
var inv1r = document.getElementById("innerinventory1rank");
inv1r.style.width=64;
inv1r.style.height=64;

var inv2 = document.getElementById("innerinventory2");
inv2.style.width=64;
inv2.style.height=64;
var inv2r = document.getElementById("innerinventory2rank");
inv2r.style.width=64;
inv2r.style.height=64;



var inv3 = document.getElementById("innerinventory3");
inv3.style.width=64;
inv3.style.height=64;
var inv3r = document.getElementById("innerinventory3rank");
inv3r.style.width=64;
inv3r.style.height=64;


var inv4 = document.getElementById("innerinventory4");
inv4.style.width=64;
inv4.style.height=64;
var inv4r = document.getElementById("innerinventory4rank");
inv4r.style.width=64;
inv4r.style.height=64;

var inv5 = document.getElementById("innerinventory5");
inv5.style.width=64;
inv5.style.height=64;
var inv5r = document.getElementById("innerinventory5rank");
inv5r.style.width=64;
inv5r.style.height=64;


var inv6 = document.getElementById("innerinventory6");
inv6.style.width=64;
inv6.style.height=64;
var inv6r = document.getElementById("innerinventory6rank");
inv6r.style.width=64;
inv6r.style.height=64;


var inv7 = document.getElementById("innerinventory7");
inv7.style.width=64;
inv7.style.height=64;
var inv7r = document.getElementById("innerinventory7rank");
inv7r.style.width=64;
inv7r.style.height=64;


var inv8 = document.getElementById("innerinventory8");
inv8.style.width=64;
inv8.style.height=64;
var inv8r = document.getElementById("innerinventory8rank");
inv8r.style.width=64;
inv8r.style.height=64;

var inv9 = document.getElementById("innerinventory9");
inv9.style.width=64;
inv9.style.height=64;
var inv9r = document.getElementById("innerinventory9rank");
inv9r.style.width=64;
inv9r.style.height=64;


function teamcharacters(id, hp, atk, atktype, element,filled) {
    this.id = id;
    this.hp = hp;
    this.atk = atk;
    this.atktype = atktype;
	this.element = element;
	this.filled = filled;
}