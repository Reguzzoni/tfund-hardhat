// scripts/deploy_restrictions.js
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying Restrictions with the account:", deployer.address);

    // Deploy Restrictions
    const restrictionsContract = await hre.ethers.deployContract("Restrictions");
    await restrictionsContract.waitForDeployment();
    console.log("Exchange deployed to:", restrictionsContract.target);

    await restrictionsContract.addWhitelistAddress([
        "0x0a3e02d3dd35e59318a779d60e68ce803918a757",
        "0x568486a34a207f0fc2a60f1f2002d9ef648996b7",
    ]);
    console.log("Addresses whitelisted successfully");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
