import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xB56c16A3ad6259755FB27Fe74D1C1527108a9455";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x36520821D722A4c4fc966cc5A41fc7f1669dED6B";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction
    const withdrawalAmount = ethers.parseUnits("1", 18);
    const withdrawTx = await saveERC20.withdraw(withdrawalAmount);
    console.log("Withdrawal transaction:", withdrawTx);

    await withdrawTx.wait();

    const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();
    console.log("Contract balance after withdrawal :::", contractBalanceAfterWithdrawal);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
