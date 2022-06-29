module.exports = {
types: ["opcodes", "contract calls"],
opcodes: [
    {name: "ADD", gas: 3},
    {name: "BALANCE (warm)", gas: 100, information: "The opcodes BALANCE, EXTCODESIZE, EXTCODEHASH have the same pricing function based on making a single account access. See A0-2 (https://github.com/wolflo/evm-opcodes/blob/main/gas.md#a0-2-access-sets) for details on EIP-2929 and touched_addresses."},
    {name: "BALANCE (cold)", gas: 2600, information: "The opcodes BALANCE, EXTCODESIZE, EXTCODEHASH have the same pricing function based on making a single account access. See A0-2 (https://github.com/wolflo/evm-opcodes/blob/main/gas.md#a0-2-access-sets) for details on EIP-2929 and touched_addresses."},
    {name: "CALLDATACOPY", gas: null, information: "The following applies for the operations CALLDATACOPY, CODECOPY, and RETURNDATACOPY (not EXTCODECOPY).Terms: data_size: size of the data to copy in bytes (len in the stack representation) data_size_words = (data_size + 31) // 32: number of (32-byte) words in the data to copy mem_expansion_cost: the cost of any memory expansion required (see A0-1 https://github.com/wolflo/evm-opcodes/blob/main/gas.md#a0-1-memory-expansion) Gas Calculation: gas_cost = 3 + 3 * data_size_words + mem_expansion_cost"  },
    {name: "MSTORE", gas: null, information: "3x Memory Expansion cost"  },
    {name: "MLOAD", gas: null, information: "3x Memory Expansion cost"  },
    {name: "TIMESTAMP", gas: 2  },
    {name: "ADDRESS", gas: 2  },
    {name: "LOG0", gas: null , information: "Note that for LOG* operations gas is paid per byte of data (not per word), gas_cost = 375 + 375 * num_topics + 8 * data_size + mem_expansion_cost"},
    {name: "LOG4", gas: null , information: "Note that for LOG* operations gas is paid per byte of data (not per word), gas_cost = 375 + 375 * num_topics + 8 * data_size + mem_expansion_cost"},
    {name: "SSTORE (clean: zero to nonzero)", gas: 22100  },
    {name: "SSTORE (clean: nonzero to nonzero)", gas: 5000  },
    {name: "SSTORE (clean: nonzero to zero)", gas: 5000, gasRefund: 4800  },
    {name: "SSTORE (dirty: zero to nonzero)", gas: 20000  },
    {name: "SSTORE (dirty: nonzero to nonzero)", gas: 2900  },
    {name: "SSTORE (dirty: nonzero to zero)", gas: 2900, gasRefund: 4800  },
    {name: "SSLOAD (cold)", gas: 2100  },
    {name: "SSLOAD (warm)", gas: 100  },
    {name: "CALL", gas: null , information: 'complex TODO'},
    {name: "CREATE", gas: 32000  },
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
    {name: "Curve: Swap", gas: 749314 }, // Curve: Swap	$18.94	$18.94	$18.94
    {name: "Balancer: Swap", gas: 196230 }, // Balancer: Swap	$4.96	$4.96	$4.96
    {name: "CoW Protocol: Swap", gas: 343007 }, // CoW Protocol: Swap	$8.67	$8.67	$8.67
    {name: "OpenSea: Sale", gas: 202164 }, // OpenSea: Sale	$5.11	$5.11	$5.11
    {name: "SuperRare: Sale", gas: 130556 }, // SuperRare: Sale	$3.30	$3.30	$3.30
    {name: "Rarible: Sale", gas: 245288 }, // Rarible: Sale	$6.20	$6.20	$6.20
    {name: "LooksRare: Sale", gas: 326391 }, // LooksRare: Sale	$8.25	$8.25	$8.25
    {name: "ENS: Register Domain", gas: 266651 }, // ENS: Register Domain	$6.74	$6.74	$6.74
    {name: "Gnosis Safe: Create Multisig", gas: 288015 }, // Gnosis Safe: Create Multisig	$7.28	$7.28	$7.28
    {name: "Arbitrum: Deposit", gas: 90994 }, // Arbitrum: Deposit	$2.30	$2.30	$2.30
    {name: "Optimism: Deposit", gas: 150733 }, // Optimism: Deposit	$3.81	$3.81	$3.81
    // Polygon: Deposit	$3.77	$3.77	$3.77
    // Ronin: Deposit	$4.13	$4.13	$4.13
    // zkSync: Deposit	$3.62	$3.62	$3.62
    // Beacon Chain: Deposit	$1.34	$1.34	$1.34
    // Tornado.Cash: Deposit	$25.59	$25.59	$25.59
    // Tornado.Cash: Withdraw	$9.11	$9.11	$9.11
    // dYdX: Borrow	$4.40	$4.40	$4.40
    // MakerDAO: Borrow	$5.89	$5.89	$5.89
    // Compound: Collect	$31.28	$31.28	$31.28
    // Compound: Borrow	$8.59	$8.59	$8.59
    // Compound: Repay	$2.84	$2.84	$2.84
    // Aave: Borrow	$8.05	$8.05	$8.05
    // Aave: Repay	$5.04	$5.04	$5.04
    // Lido: Stake	$2.09	$2.09	$2.09
    // Yearn Finance: Deposit	$5.46	$5.46	$5.46
    // Hop Protocol: Bridge	$3.07	$3.07	$3.07
    // Multichain: Bridge	$1.46	$1.46	$1.46
    // Across Protocol: Bridge	$3.05	$3.05	$3.05
    // Synapse: Bridge	$2.72	$2.72	$2.72
]
}
// archive
// {name: "USDT: Transfer", gas: 54201 }, // USDT: Transfer	$1.37	$1.37	$1.37
// {name: "SushiSwap: Swap", gas: 140843 }, // SushiSwap: Swap	$3.56	$3.56	$3.56
// {name: "Bancor: Swap", gas: 182779 }, // Bancor: Swap	$4.62	$4.62	$4.62
// {name: "1inch: Swap", gas: 141634 }, // 1inch: Swap	$3.58	$3.58	$3.58
// {name: "KyberSwap: Swap", gas: 144008 }, // KyberSwap: Swap	$3.64	$3.64	$3.64