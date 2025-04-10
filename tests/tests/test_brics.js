const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BRICS Token", function () {
  let brics;
  
  beforeEach(async function () {
    const BRICSToken = await ethers.getContractFactory("BRICS");
    brics = await BRICSToken.deploy();
    await brics.deployed();
  });

  it("Should mint new tokens", async function () {
    await brics.mint("0xYourAddress", 1000);
    const balance = await brics.balanceOf("0xYourAddress");
    expect(balance).to.equal(1000);
  });
});
