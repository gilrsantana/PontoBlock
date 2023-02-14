async function main () {
    const PontoBlockReportsContract = await ethers.getContractFactory("PontoBlockReports");
    const _empAddress = "0xc1BEB053CD7225567F9eE353bb7b19fF07599750";
    const _pontoBlockAddress = "0x479a91217c5d74F2FFA776a547B351e61dDfDF02";
    const _utilAddress = "0xf4aC9C7a0ff462826b50908aB542e5Add9C27857";

    const pBlock_reports_contract = await PontoBlockReportsContract.deploy(_empAddress, _pontoBlockAddress, _utilAddress);

    console.log("PontoBlockReports deployed at address: ", pBlock_reports_contract.address);
}

main()
    .then(()=>process.exit(0))
    .catch(error=>{
        console.error(error);
        process.exit(1);
    });