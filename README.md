# gas-numbers-every-solidity-dev-should-know

This project was inspired by Norvig's Latency Numbers, and a post in the Macro discord from a student named Justin Phu, who suggested someone make a version with gas numbers for popular calls and opcodes.

Opcode gas numbers were sourced from the official Ethereum Docs, and contract-calls were sourced from Etherscan.io and converted into gas units using Wolfram Alpha for calculations.


## dev
Run `npm i` to install necessary node modules 

To run this repo locally, run `npm run build && npm run dev` and then open index.html in your browser. I prefer to do so with VS Code's live server extension.

This repo uses Browserify / Watchify to keep the simplicity of html & vanilla js webpages, preserving the developer comforts of node, and creating an optimized production bundle.

## contribute

If you'd like to contribute, please create a github issue or open a PR. Keep in mind I will be opinionated about what gets added to the page.