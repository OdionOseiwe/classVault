require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

// import IMultiSig from "../typechain-types/Imultisig.sol"

async function main() {
  //THIS IS FOR SENDING MONEY ALONG TO A DEPLOYED CONTRACT
    
  // let provider = {
  //   PrivateKey: process.env.ACCOUNT_PRIVATE_KEY_ROSPTEN as BytesLike,
  //   URL: process.env.ALCHEMY_ROSPTEN_API_KEY_URL,
  // };
  // const provider2 = ethers.getDefaultProvider("ropsten", provider.URL);
  // let wallet = new ethers.Wallet(provider.PrivateKey, provider2);
  const _value = ethers.utils.parseEther("1");


  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  const MULTISIG = await ethers.getContractAt("imulti", CONTRACTADDRESS);

  const bal1 = await MULTISIG.contractBalance();
  console.log("contract balance before withdrawal ", bal1);

  //impersonating an address (pretending to be a particular person)
  const helpers = require("@nomicfoundation/hardhat-network-helpers");
  const approval = "0x20497F37a8169c8C9fA09411F8c2CFB7c90dE5d1";
  const approval1 = "0xB632cAf3119860599ce162Fad8753fc4198037b4";
  const approval2 = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
  const approval3 = "0x85f20a6924A61904AB44243C7e2c771B3bE46734";
  const approval4 = "0x924843c0c1105b542c7e637605f95F40FD07b4B0";
  const approval5 = "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7";
  const approval6 = "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf";
  const approval7 = "0x12896191de42EF8388f2892Ab76b9a728189260A";

  await helpers.impersonateAccount(approval);
  const impersonatedSigner = await ethers.getSigner(approval);
  const withdraw = await (await MULTISIG.connect(impersonatedSigner).withdrawEther(_value));
  //console.log("withdrawing------", withdraw);


  //Get withdrawal balance
  const withBal = await impersonatedSigner.getBalance();
  console.log("Impersonator balance before withdrawal", withBal);  


  await helpers.impersonateAccount(approval1);
  const impersonatedSigner1 = await ethers.getSigner(approval1);
  
  await helpers.impersonateAccount(approval2);
  const impersonatedSigner2 = await ethers.getSigner(approval2);

  await helpers.impersonateAccount(approval3);
  const impersonatedSigner3 = await ethers.getSigner(approval3);
 
  await helpers.impersonateAccount(approval4);
  const impersonatedSigner4 = await ethers.getSigner(approval4);
  
  await helpers.impersonateAccount(approval5);
  const impersonatedSigner5 = await ethers.getSigner(approval5);

  await helpers.impersonateAccount(approval6);
  const impersonatedSigner6 = await ethers.getSigner(approval6);

  await helpers.impersonateAccount(approval7);
  const impersonatedSigner7 = await ethers.getSigner(approval7);

 // await MULTISIG.connect(impersonatedSigner).Approve(8);
  await MULTISIG.connect(impersonatedSigner1).Approve(8);
  await MULTISIG.connect(impersonatedSigner2).Approve(8);
  await MULTISIG.connect(impersonatedSigner3).Approve(8);
  await MULTISIG.connect(impersonatedSigner4).Approve(8);
  await MULTISIG.connect(impersonatedSigner5).Approve(8);
  await MULTISIG.connect(impersonatedSigner6).Approve(8);
  await MULTISIG.connect(impersonatedSigner7).Approve(8);


  console.log("Impersonator balance after withdrawal ", withBal);

  const bal = await MULTISIG.contractBalance();
  console.log("contract balance after wthdrawal ", bal);
  //THIS IS ONE OF FUNCTIONS BEING USED

  // await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
  //   console.log();
  //   console.log("contractBalanc", await MULTISIG.contractBalance());
  // await MULTISIG.Approve(1);
  // await MULTISIG.withdrawEther(_value);


// "0x7A3E0DFf9B53fA0d3d1997903A48677399b22ce7",
  //   "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C",
  //   "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C",
  //   "0x85f20a6924A61904AB44243C7e2c771B3bE46734",
  //   "0x85f20a6924A61904AB44243C7e2c771B3bE46734",
  //   "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7",
  //   "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf",
  //   "0x5D63564EeF4657F360343196A7bd86ae18d3a92A",
  //   "0x12896191de42EF8388f2892Ab76b9a728189260A",
  //   "0x924843c0c1105b542c7e637605f95F40FD07b4B0",
  //   "0xB632cAf3119860599ce162Fad8753fc4198037b4",
  //   "0x20497F37a8169c8C9fA09411F8c2CFB7c90dE5d1",
  //   "0xCb3416Fc84c0e9f72F169DD8e53dBc06220591BF",
  //   "0x21c1229D4b781F4F7A95dEb4022B57f346af4CEF",

  // const bal = await MULTISIG.contractBalance();
  // console.log("this is ", bal);
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});