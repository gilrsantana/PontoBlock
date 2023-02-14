async function main () {
    const UtilContract = await ethers.getContractFactory("UtilContract");
    const util_contract = await UtilContract.deploy();

    console.log("UtilContract deployed at address: ", util_contract.address);
}

main()
    .then(()=>process.exit(0))
    .catch(error=>{
        console.error(error);
        process.exit(1);
    });