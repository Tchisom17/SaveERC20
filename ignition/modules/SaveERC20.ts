import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xB56c16A3ad6259755FB27Fe74D1C1527108a9455";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1

//0x36520821D722A4c4fc966cc5A41fc7f1669dED6B
