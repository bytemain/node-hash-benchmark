# node-hash-benchmark

Benchmark to compare hash implementation in javascript, web assembly and neon.

Results: (Updated 2021-03-12)

Hardware info:

```plaintxt
Model Name: MacBook Pro
Model Identifier: MacBookPro16,1
Processor Name: 6-Core Intel Core i7
Processor Speed: 2.6 GHz
Number of Processors: 1
Total Number of Cores: 6
L2 Cache (per Core): 256 KB
L3 Cache: 12 MB
Hyper-Threading Technology: Enabled
Memory: 16 GB
```

```plaintxt
js-md5#1b x 356,517 ops/sec ±0.92% (90 runs sampled)
js-md5#10b x 359,100 ops/sec ±0.83% (91 runs sampled)
js-md5#1k x 30,769 ops/sec ±0.78% (91 runs sampled)
js-md5#10k x 2,955 ops/sec ±0.77% (94 runs sampled)
js-md5#500k x 35.83 ops/sec ±3.84% (50 runs sampled)
js-md5#1m x 16.79 ops/sec ±1.56% (45 runs sampled)
js-md5#2m x 7.99 ops/sec ±2.51% (25 runs sampled)
js-md5#10m x 1.54 ops/sec ±6.44% (8 runs sampled)

wasm-md5#1b x 295,674 ops/sec ±1.26% (87 runs sampled)
wasm-md5#10b x 291,934 ops/sec ±1.16% (91 runs sampled)
wasm-md5#1k x 90,322 ops/sec ±0.61% (98 runs sampled)
wasm-md5#10k x 12,762 ops/sec ±0.27% (97 runs sampled)
wasm-md5#500k x 267 ops/sec ±0.25% (90 runs sampled)
wasm-md5#1m x 130 ops/sec ±0.32% (83 runs sampled)
wasm-md5#2m x 64.97 ops/sec ±0.28% (68 runs sampled)
wasm-md5#10m x 12.98 ops/sec ±0.32% (36 runs sampled)

wasm-blake3#1b x 366,609 ops/sec ±1.62% (83 runs sampled)
wasm-blake3#10b x 359,712 ops/sec ±1.45% (84 runs sampled)
wasm-blake3#1k x 128,664 ops/sec ±0.96% (92 runs sampled)
wasm-blake3#10k x 17,144 ops/sec ±0.36% (95 runs sampled)
wasm-blake3#500k x 357 ops/sec ±0.33% (90 runs sampled)
wasm-blake3#1m x 174 ops/sec ±0.31% (88 runs sampled)
wasm-blake3#2m x 87.16 ops/sec ±0.29% (75 runs sampled)
wasm-blake3#10m x 17.33 ops/sec ±0.46% (47 runs sampled)

neon-md5#1b x 169,435 ops/sec ±0.30% (95 runs sampled)
neon-md5#10b x 167,760 ops/sec ±0.30% (97 runs sampled)
neon-md5#1k x 19,391 ops/sec ±0.32% (98 runs sampled)
neon-md5#10k x 2,166 ops/sec ±0.42% (96 runs sampled)
neon-md5#500k x 43.68 ops/sec ±0.55% (58 runs sampled)
neon-md5#1m x 21.35 ops/sec ±0.32% (40 runs sampled)
neon-md5#2m x 10.72 ops/sec ±0.34% (31 runs sampled)
neon-md5#10m x 2.15 ops/sec ±0.20% (10 runs sampled)

neon-blake3#1b x 208,938 ops/sec ±0.30% (96 runs sampled)
neon-blake3#10b x 207,904 ops/sec ±0.37% (93 runs sampled)
neon-blake3#1k x 144,193 ops/sec ±0.27% (94 runs sampled)
neon-blake3#10k x 75,283 ops/sec ±0.29% (95 runs sampled)
neon-blake3#500k x 2,711 ops/sec ±0.29% (96 runs sampled)
neon-blake3#1m x 1,333 ops/sec ±0.31% (95 runs sampled)
neon-blake3#2m x 663 ops/sec ±0.52% (95 runs sampled)
neon-blake3#10m x 99.55 ops/sec ±0.58% (72 runs sampled)
```

## Prerequisites

* nodejs
* rust toolchain
* wasm-pack

## Running the project

Run `make` to run the benchmark.

## Libraries used

### js

Using the npmjs md5 package

https://www.npmjs.com/package/md5

### neon

Rust bindings for writing safe and fast native Node.js modules.

https://www.neon-bindings.com/

For md5 use:

https://crates.io/crates/md5

For blake3 use:
https://crates.io/crates/blake3


### wasm

WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine.

https://webassembly.org/

For md5 I used the cargo package

https://crates.io/crates/md5
