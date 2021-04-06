## About

Attempted fork of Uniswap V2 for usage on a new AMM.

Hackathon project 

## Running locally

```
npm install -g ganache-cli
npm install -g truffle
```

on one window, start the local blockchain
```
ganache-cli
```

on another window, deploy uniswap-v2-core
```
cd fork-uniswap-2/core
truffle migrate
```

## Troubleshooting

Periphery and core are on separate folders and deployments because Uniswap used different solidity versions for them
