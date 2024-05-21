const NFTs = [];
let id = 1;

function mintNFT(_name, _eyeColor, _hairColor, _image, _price, _bling) {
  const NFT = {
    NFT_ID: id,
    name: _name,
    description: {
      eyeColor: _eyeColor,
      hairColor: _hairColor,
    },
    image: _image,
    price: _price,
    bling: _bling,
  };
  id++;
  NFTs.push(NFT);
  console.log(`Successfully minted ${_name} NFT!`);
}

function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log(NFTs[i]);
  }
}

function getTotalSupply() {
  return console.log(`${NFTs.length} NFT minted.`);
}

function getNFTById(_id) {
  for (let i = 0; i < NFTs.length; i++) {
    if (NFTs[i].NFT_ID === _id) {
      return console.log(NFTs[i]);
    }
  }
}

mintNFT(
  "Metacrafters",
  "blue",
  "black",
  "https://academy.metacrafters.io/_next/image?url=%2Fimages%2Ficons%2Fm-logo.svg&w=1920&q=75",
  100,
  "diamond"
);

listNFTs();
getTotalSupply();
getNFTById(1);
