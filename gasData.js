let data = {
    types: ["opcodes", "contract calls"],
    opcodes: [
        {name: "ADD", gas: 3},
        {name: "BALANCE (warm)", gas: 100, information: "The opcodes BALANCE, EXTCODESIZE, EXTCODEHASH have the same pricing function based on making a single account access. See A0-2 (https://github.com/wolflo/evm-opcodes/blob/main/gas.md#a0-2-access-sets) for details on EIP-2929 and touched_addresses."},
        {name: "BALANCE (cold)", gas: 2600, information: "The opcodes BALANCE, EXTCODESIZE, EXTCODEHASH have the same pricing function based on making a single account access. See A0-2 (https://github.com/wolflo/evm-opcodes/blob/main/gas.md#a0-2-access-sets) for details on EIP-2929 and touched_addresses."},
        {name: "CALLDATACOPY", gas: 7, information: "gas_cost = 3 + 3 * data_size_words + mem_expansion_cost -- all memory expansion costs are calculated as 1 unit of gas for one word size of memory"  },
        {name: "MSTORE", gas: 3, information: "3x Memory Expansion cost, all memory expansion costs are calculated as 1 unit of gas for one word size of memory"  },
        {name: "MLOAD", gas: 3, information: "3x Memory Expansion cost"  },
        {name: "TIMESTAMP", gas: 2, information: "" },
        {name: "ADDRESS", gas: 2, information: "" },
        {name: "LOG0", gas: 632 , information: "Note that for LOG* operations gas is paid per byte of data (not per word), gas_cost = 375 + 375 * num_topics + 8 * data_size + mem_expansion_cost, where mem_expansion_cost is 1 gas unit for one word, and data_size is 32 for 32 bytes"},
        {name: "LOG4", gas: 2132 , information: "Note that for LOG* operations gas is paid per byte of data (not per word), gas_cost = 375 + 375 * num_topics + 8 * data_size + mem_expansion_cost, where mem_expansion_cost is 1 gas unit for one word, and data_size is 32 for 32 bytes"},
        {name: "SSTORE (clean: zero to nonzero)", gas: 22100, information: ""  },
        {name: "SSTORE (clean: nonzero to nonzero)", gas: 5000, information: ""  },
        {name: "SSTORE (clean: nonzero to zero)", gas: 5000, gasRefund: 4800, information: ""  },
        {name: "SSTORE (dirty: zero to nonzero)", gas: 20000, information: ""  },
        {name: "SSTORE (dirty: nonzero to nonzero)", gas: 2900, information: ""  },
        {name: "SSTORE (dirty: nonzero to zero)", gas: 2900, gasRefund: 4800, information: ""  },
        {name: "SLOAD (cold)", gas: 2100, information: ""  },
        {name: "SLOAD (warm)", gas: 100, information: ""  },
        {name: "CALL (no-value, warm)", gas: 100 , information: ''},
        {name: "CALL (no-value, cold)", gas: 2600 , information: ''},
        {name: "CALL (no-value, new-address)", gas: 25000 , information: ''},
        {name: "CALL (value, cold)", gas: 11600 , information: ''},
        {name: "CALL (value, warm)", gas: 9100 , information: ''},
        {name: "CALL (value, new-address)", gas: 34000 , information: 'this high cost stems from the addition of the new address to the state trie'},
        {name: "CREATE", gas: 32000, information: ""  },
    ],
    contractCalls: [
        // calculated numbers on wolframalpha.com
        // prices are averages taken from etherscan.io
        // 22 gwei, 1,148.93 usd -> 1 eth
        // formula used: (eth / usd) * 10 ^ 9 = gwei * gas
        {name: "ERC20: Transfer", gas: 64883 }, // ERC20: Transfer	$1.64	$1.64	$1.64
        {name: "ERC721: Transfer", gas: 84663 }, // ERC721: Transfer	$2.14	$2.14	$2.14
        {name: "Uniswap V3: Swap", gas: 184361 }, // Uniswap V3: Swap	$4.66	$4.66	$4.66
        {name: "Uniswap V2: Swap", gas: 152711 }, // Uniswap V2: Swap	$3.86	$3.86	$3.86
        {name: "SushiSwap: Swap", gas: 140843 }, // SushiSwap: Swap	$3.56	$3.56	$3.56
        {name: "Curve: Swap", gas: 749314 }, // Curve: Swap	$18.94	$18.94	$18.94
        {name: "Balancer: Swap", gas: 196230 }, // Balancer: Swap	$4.96	$4.96	$4.96
        {name: "1inch: Swap", gas: 141634 }, // 1inch: Swap	$3.58	$3.58	$3.58
        {name: "CoW Protocol: Swap", gas: 343007 }, // CoW Protocol: Swap	$8.67	$8.67	$8.67
        {name: "OpenSea: Sale", gas: 202164 }, // OpenSea: Sale	$5.11	$5.11	$5.11
        {name: "SuperRare: Sale", gas: 130556 }, // SuperRare: Sale	$3.30	$3.30	$3.30
        {name: "Rarible: Sale", gas: 245288 }, // Rarible: Sale	$6.20	$6.20	$6.20
        {name: "LooksRare: Sale", gas: 326391 }, // LooksRare: Sale	$8.25	$8.25	$8.25
        {name: "ENS: Register Domain", gas: 266651 }, // ENS: Register Domain	$6.74	$6.74	$6.74
        {name: "Gnosis Safe: Create Multisig", gas: 288015 }, // Gnosis Safe: Create Multisig	$7.28	$7.28	$7.28
        {name: "Arbitrum: Deposit", gas: 90994 }, // Arbitrum: Deposit	$2.30	$2.30	$2.30
        {name: "Optimism: Deposit", gas: 150733 }, // Optimism: Deposit	$3.81	$3.81	$3.81
        {name: "Polygon: Deposit", gas: 149151 }, // Polygon: Deposit	$3.77	$3.77	$3.77
        {name: "Beacon Chain: Deposit", gas: 53014 }, // Beacon Chain: Deposit	$1.34	$1.34	$1.34
        {name: "Tornado.Cash: Deposit", gas: 1012400 }, // Tornado.Cash: Deposit	$25.59	$25.59	$25.59
        {name: "Tornado.Cash: Withdraw", gas: 360414 }, // Tornado.Cash: Withdraw	$9.11	$9.11	$9.11
        {name: "dYdX: Borrow", gas: 174075 }, // dYdX: Borrow	$4.40	$4.40	$4.40
        {name: "MakerDAO: Borrow", gas: 223023 }, // MakerDAO: Borrow	$5.89	$5.89	$5.89
        {name: "Compound: Collect", gas: 1237520 }, // Compound: Collect	$31.28	$31.28	$31.28
        {name: "Compound: Borrow", gas: 339842 }, // Compound: Borrow	$8.59	$8.59	$8.59
        {name: "Compound: Repay", gas: 112358 }, // Compound: Repay	$2.84	$2.84	$2.84
        {name: "Aave: Borrow", gas: 318478 }, // Aave: Borrow	$8.05	$8.05	$8.05
        {name: "Aave: Repay", gas: 199395 }, // Aave: Repay	$5.04	$5.04	$5.04
        {name: "Lido: Stake", gas: 82686 }, //Lido: Stake	$2.09	$2.09	$2.09
        {name: "Yearn Finance: Deposit", gas: 216011 }, // Yearn Finance: Deposit	$5.46	$5.46	$5.46
        {name: "Hop Protocol: Bridge", gas: 121457 }, // Hop Protocol: Bridge	$3.07	$3.07	$3.07
        {name: "Multichain: Bridge", gas: 57761 }, // Multichain: Bridge	$1.46	$1.46	$1.46
        {name: "Across Protocol: Bridge", gas: 120666 }, // Across Protocol: Bridge	$3.05	$3.05	$3.05
        {name: "Synapse: Bridge", gas: 107610 }, // Synapse: Bridge	$2.72	$2.72	$2.72
    ]
}

module.exports = data

// decided not to include
// {name: "USDT: Transfer", gas: 54201 }, // USDT: Transfer	$1.37	$1.37	$1.37
// {name: "Bancor: Swap", gas: 182779 }, // Bancor: Swap	$4.62	$4.62	$4.62
// {name: "KyberSwap: Swap", gas: 144008 }, // KyberSwap: Swap	$3.64	$3.64	$3.64