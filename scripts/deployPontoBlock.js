async function main () {
    const PontoBlockContract = await ethers.getContractFactory("PontoBlock");
    const _empAddress = "0xc1BEB053CD7225567F9eE353bb7b19fF07599750";
    const _utilAddress = "0xf4aC9C7a0ff462826b50908aB542e5Add9C27857";

    
    const ponto_block_contract = await PontoBlockContract.deploy(_empAddress, _utilAddress);

    console.log("PontoBlock deployed at address: ", ponto_block_contract.address);
}

main()
    .then(()=>process.exit(0))
    .catch(error=>{
        console.error(error);
        process.exit(1);
    });