// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
/*
Axie infinity
but
instead of furballs
We do
Slimes
and body parts will be
eyes(determines element)
Headwear(can be hat or angel halo or etc)
weapons(determines atk value)
offhand(shield etc additional stats like defense increase or more attack
And wing variant(if any) determines speed boost
or initiative in fights
AND
Facial Expression!(temperament or how the skills scale when leveled up)




*/

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.2/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.2/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.2/contracts/utils/Strings.sol";




interface SlimyToken{
    function transferFrom(address ,address ,uint256) external returns (bool);
    function increaseAllowance(address, uint256) external returns (bool);
}

contract SlimyNFT is ERC721, Ownable{
    using Address for address;
    using Strings for uint256;
    constructor(address tokenaddress) ERC721("SlimyNFT","SNFT"){
        
        slimytokencontract = SlimyToken(tokenaddress);
        
    }

    SlimyToken public slimytokencontract;

    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    address private seedaddress = 0x49a1d95168AedC1A0Fd0395fB3f90D2E79b54429;
    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint) private _balances;

    // Mapping from token ID to approved address
    mapping(uint256 => address) private _tokenApprovals;

    mapping (uint256 => string) private _tokenURIs;

    mapping (uint256 => uint) private _metadata;
    string private _baseURIextended;

    // Mapping from owner to operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;
   



    function transfertoken(address from, address to, uint256 amount ) public{
        slimytokencontract.transferFrom(from,to,amount);
    }
    
    function random() public view returns(uint){
        
        uint stats = 0;
        stats = uint(keccak256(abi.encodePacked(blockhash(block.number), block.timestamp, msg.sender, seedaddress)));
        stats = stats % 100000000;
        return stats;
    }
    
    function returnOwnerOfAddress(uint256 id) public view returns(address){
        uint256 currentnftid = id;
        address ownerofnftid = _owners[currentnftid];
        return ownerofnftid;
    }
        function ownerOf(uint256 tokenId) public view virtual override returns (address) {
        address owner = _owners[tokenId];
        require(owner != address(0), "ERC721: owner query for nonexistent token");
        return owner;
    }










    function setBaseURI(string memory baseURI_) external onlyOwner{
        _baseURIextended = baseURI_;
    }
    
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
    
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseURIextended;
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();
        
        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }
        // If there is a baseURI but no tokenURI, concatenate the tokenID to the baseURI.
        return string(abi.encodePacked(base, tokenId.toString()));
    }





    
    


    function determinestats(uint256 tokenID) public view returns(string[] memory){
        uint statnumber = _metadata[tokenID];
        uint slimerank = statnumber % 100;
        string memory slimerankstring = "";
        string[] memory slimestatarray = new string[](4);
        if(slimerank == 0)
        {
            slimerankstring = "Rank 3";
        }
        else if(slimerank>66)
        {
            slimerankstring = "Rank 2";
        }
        else
        {
            slimerankstring = "Rank 1";
        }
        slimestatarray[0] = slimerankstring;
        statnumber = statnumber / 100;
        slimerank = statnumber%100;
        if(slimerank < 13)
        {
            slimerankstring = "dark";
        }
        else if(slimerank < 25)
        {
            slimerankstring = "light";
        }
        else if(slimerank < 50)
        {
            slimerankstring = "fire";
        }
        else if(slimerank < 75)
        {
            slimerankstring = "water";
        }
        else if(slimerank < 100)
        {
            slimerankstring = "earth";
        }
        
        slimestatarray[1] = slimerankstring;
        
        return slimestatarray;
        
    }
    
    
    function _checkOnERC721ReceivedSlimy(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) private returns (bool) {
        if (to.isContract()) {
            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {
                return retval == IERC721Receiver(to).onERC721Received.selector;
            } catch (bytes memory reason) {
                if (reason.length == 0) {
                    revert("ERC721: transfer to non ERC721Receiver implementer");
                } else {
                    assembly {
                        revert(add(32, reason), mload(reason))
                    }
                }
            }
        } else {
            return true;
        }
    }
    
    
    
    function publicminttestslimy(address to, uint256 tokenId) public
    {
        _safeMintSlimy(to,tokenId);
    }
    
    
    function _safeMintSlimy(address to, uint256 tokenId) internal virtual {
        uint tokenData = random();
        _safeMintSlimy(to, tokenId, tokenData, "");
    }
    
    function _safeMintSlimy(
        address to,
        uint256 tokenId,
        uint tokenData,
        bytes memory _data
    ) internal virtual {
        _mintSlimy(to, tokenId, tokenData);
        require(
            _checkOnERC721ReceivedSlimy(address(0), to, tokenId, _data),
            "ERC721: transfer to non ERC721Receiver implementer"
        );
    }
    
    function balanceOf(address owner) public view virtual override returns (uint256) {
        require(owner != address(0), "ERC721: balance query for the zero address");
        return _balances[owner];
    }
    
    function _mintSlimy(address to, uint256 tokenId, uint tokenData) internal virtual {
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _beforeTokenTransfer(address(0), to, tokenId);
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);
        _setTokenURI(tokenId, Strings.toString(tokenData));
        _metadata[tokenId] = tokenData;
    }

    function _exists(uint256 tokenId) internal view virtual override returns (bool) {
        return _owners[tokenId] != address(0);
    }

    function sendTokenToReceiver(uint256 tokenId, address to) public{
        require(to != address(0), "ERC721: sending to the zero address");
        require(_exists(tokenId), "ERC721: token not minted");
        require(msg.sender == returnOwnerOfAddress(tokenId));

        _beforeTokenTransfer(msg.sender, to, tokenId);
        _balances[msg.sender] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(msg.sender, to, tokenId);
    }

    
}