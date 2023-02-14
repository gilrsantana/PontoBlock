async function main () {
    const EmployeeContract = await ethers.getContractFactory("EmployeeContract");
    const _admAddress = "0xE958Dd3E5e42317f07A8ee9fB9B71e374845af0A";
     
    const employee_contract = await EmployeeContract.deploy(_admAddress);

    console.log("EmployeeContract deployed at address: ", employee_contract.address);
}

main()
    .then(()=>process.exit(0))
    .catch(error=>{
        console.error(error);
        process.exit(1);
    });