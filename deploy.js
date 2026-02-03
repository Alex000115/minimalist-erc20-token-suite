const hre = require("hardhat");

async function main() {
  const initialSupply = 1000000;
  const token = await hre.ethers.deployContract("MyToken", [initialSupply]);

  await token.waitForDeployment();

  console.log(`Token deployed to: ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
