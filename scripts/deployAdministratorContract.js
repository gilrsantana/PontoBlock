async function main () {
    const AdministratorContract = await ethers.getContractFactory("AdministratorContract");
    const _taxId = 1234564789;
    const _name = "GILMAR RIBEIRO SANTANA";

    
    const admin_contract = await AdministratorContract.deploy(_taxId, _name);

    console.log("AdminstratorContract deployed at address: ", admin_contract.address);
}

main()
    .then(()=>process.exit(0))
    .catch(error=>{
        console.error(error);
        process.exit(1);
    });