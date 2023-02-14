# PONTO BLOCK SMART CONTRACT

## Description
- Manage and record the working hours of a company's employees.

## To Init Project
- comand:
```
npm init --yes
```
## Install and Run HardHat
- command:
```
npm install --save-dev hardhat
```

- command:
```
npx hardhat
```
- set `Create an empty hardhat.config.js`

## Dependecies
- Dependence 1: `npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"`
- Dependence 2: `npm install --save-dev @nomiclabs/hardhat-etherscan`

## Environment
- Instal dotenv: `npm install dotenv --save`
- Create file `.env` in the root of project and inside of it set your environment variables.
- Create file `.gitignore` and set `.env` inside of it;
- Set the variables in `.env`:
- API_URL="YOUR DAPP API URL ON ALCHEMY"
- API_KEY="YOUR DAPP API KEY ON ALCHEMY"
- ETHERSCAN_API_KEY="YOUR ETHERSCAN API KEY"
- PRIVATE_KEY=PRIVATE KEY OF YOUR ACCOUNT ON METAMASK, OR OTHER WALLET (without double quotes)
- CONTRACT_ADDRESS="THE ADDRESS OF YOUR DEPLOYED CONTRACT"

## Compile Smart Contract
- Command:
```
npx hardhat compile
```
- Will be created chache and artifacts folders.

## Deploy Smart Contract
- Create a scripts folder
- Create a `deploy.js` file
- If the contracts are not compiled, they will be automatically compiled.
- Deploy the contract at network
```
npx hardhat run scripts/deploy.js --network goerli
```

## Submit Smart Contract to Blockchain
- Create a account on polygon: `https://polygonscan.com/register`

- Get an API key: `https://polygonscan.com/myapikey`

- Set your API key on hardhat.config:
```
etherscan: {
    apiKey: {
      mumbai: POLYGON_API_KEY
    }
  },
```

- command:
- `--network mumbai -> network that your contract was deployed`
- `0x552fFFdc706cEECf4a68a1fEc3b39F05fbe09a96 -> address of your contract`
- `'Hello World!' -> constructor's parameter of the contract` 
```
npx hardhat verify --network mumbai 0x552fFFdc706cEECf4a68a1fEc3b39F05fbe09a96 'Hello World!'
```