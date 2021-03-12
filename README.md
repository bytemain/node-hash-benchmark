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
js-md5#1b x 352,379 ops/sec ±1.21% (93 runs sampled)
js-md5#10b x 333,211 ops/sec ±1.48% (88 runs sampled)
js-md5#1k x 29,554 ops/sec ±0.88% (94 runs sampled)
js-md5#10k x 2,888 ops/sec ±0.93% (94 runs sampled)
js-md5#500k x 39.61 ops/sec ±1.22% (53 runs sampled)
js-md5#1m x 15.86 ops/sec ±2.77% (44 runs sampled)
js-md5#2m x 7.74 ops/sec ±2.58% (24 runs sampled)
js-md5#10m x 1.47 ops/sec ±4.89% (8 runs sampled)

wasm-md5#1b x 288,520 ops/sec ±1.40% (91 runs sampled)
wasm-md5#10b x 288,123 ops/sec ±1.33% (93 runs sampled)
wasm-md5#1k x 79,027 ops/sec ±0.68% (91 runs sampled)
wasm-md5#10k x 10,411 ops/sec ±0.85% (95 runs sampled)
wasm-md5#500k x 221 ops/sec ±0.84% (86 runs sampled)
wasm-md5#1m x 109 ops/sec ±0.44% (79 runs sampled)
wasm-md5#2m x 54.02 ops/sec ±0.70% (70 runs sampled)
wasm-md5#10m x 10.82 ops/sec ±0.81% (31 runs sampled)

neon-md5#1b x 163,145 ops/sec ±1.53% (93 runs sampled)
neon-md5#10b x 164,096 ops/sec ±0.44% (97 runs sampled)
neon-md5#1k x 19,044 ops/sec ±0.25% (96 runs sampled)
neon-md5#10k x 2,127 ops/sec ±0.43% (95 runs sampled)
neon-md5#500k x 43.08 ops/sec ±0.53% (57 runs sampled)
neon-md5#1m x 21.08 ops/sec ±0.57% (39 runs sampled)
neon-md5#2m x 10.52 ops/sec ±1.01% (31 runs sampled)
neon-md5#10m x 2.12 ops/sec ±0.38% (10 runs sampled)

neon-blake3#1b x 200,176 ops/sec ±1.82% (93 runs sampled)
neon-blake3#10b x 203,373 ops/sec ±0.85% (91 runs sampled)
neon-blake3#1k x 142,322 ops/sec ±0.44% (98 runs sampled)
neon-blake3#10k x 74,461 ops/sec ±0.35% (96 runs sampled)
neon-blake3#500k x 2,646 ops/sec ±0.66% (96 runs sampled)
neon-blake3#1m x 1,293 ops/sec ±0.86% (93 runs sampled)
neon-blake3#2m x 606 ops/sec ±2.46% (88 runs sampled)
neon-blake3#10m x 95.29 ops/sec ±1.14% (71 runs sampled)
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
