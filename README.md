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

![Snipaste_2021-03-12_23-55-12.png](https://i.loli.net/2021/03/12/HQ5ryW6NxMYBTSU.png)

```plaintxt
js-md5#1b x 379,694 ops/sec ±0.64% (90 runs sampled)
js-md5#10b x 380,520 ops/sec ±0.63% (92 runs sampled)
js-md5#1k x 32,014 ops/sec ±0.42% (95 runs sampled)
js-md5#10k x 3,100 ops/sec ±0.44% (93 runs sampled)
js-md5#500k x 42.40 ops/sec ±0.95% (56 runs sampled)
js-md5#1m x 18.26 ops/sec ±1.89% (50 runs sampled)
js-md5#2m x 8.48 ops/sec ±2.60% (26 runs sampled)
js-md5#10m x 1.71 ops/sec ±2.24% (9 runs sampled)

wasm-md5#1b x 310,630 ops/sec ±1.91% (85 runs sampled)
wasm-md5#10b x 308,004 ops/sec ±1.46% (91 runs sampled)
wasm-md5#1k x 95,334 ops/sec ±0.69% (95 runs sampled)
wasm-md5#10k x 13,498 ops/sec ±0.52% (95 runs sampled)
wasm-md5#500k x 282 ops/sec ±0.51% (90 runs sampled)
wasm-md5#1m x 137 ops/sec ±0.67% (78 runs sampled)
wasm-md5#2m x 68.89 ops/sec ±0.62% (71 runs sampled)
wasm-md5#10m x 13.64 ops/sec ±1.02% (38 runs sampled)

wasm-blake3#1b x 382,865 ops/sec ±1.86% (88 runs sampled)
wasm-blake3#10b x 365,641 ops/sec ±1.55% (115 runs sampled)
wasm-blake3#1k x 134,324 ops/sec ±1.27% (92 runs sampled)
wasm-blake3#10k x 17,779 ops/sec ±0.73% (94 runs sampled)
wasm-blake3#500k x 373 ops/sec ±0.68% (90 runs sampled)
wasm-blake3#1m x 184 ops/sec ±0.69% (85 runs sampled)
wasm-blake3#2m x 90.07 ops/sec ±0.73% (77 runs sampled)
wasm-blake3#10m x 18.28 ops/sec ±0.76% (49 runs sampled)

neon-md5#1b x 880,228 ops/sec ±0.74% (93 runs sampled)
neon-md5#10b x 861,705 ops/sec ±0.65% (94 runs sampled)
neon-md5#1k x 284,859 ops/sec ±0.69% (93 runs sampled)
neon-md5#10k x 42,180 ops/sec ±0.60% (92 runs sampled)
neon-md5#500k x 880 ops/sec ±0.58% (93 runs sampled)
neon-md5#1m x 431 ops/sec ±0.56% (91 runs sampled)
neon-md5#2m x 216 ops/sec ±0.61% (85 runs sampled)
neon-md5#10m x 40.42 ops/sec ±0.63% (54 runs sampled)

neon-blake3#1b x 1,900,151 ops/sec ±0.87% (91 runs sampled)
neon-blake3#10b x 1,832,961 ops/sec ±0.86% (90 runs sampled)
neon-blake3#1k x 660,350 ops/sec ±0.52% (93 runs sampled)
neon-blake3#10k x 200,931 ops/sec ±0.51% (90 runs sampled)
neon-blake3#500k x 4,882 ops/sec ±0.76% (93 runs sampled)
neon-blake3#1m x 2,407 ops/sec ±0.71% (93 runs sampled)
neon-blake3#2m x 1,202 ops/sec ±0.63% (92 runs sampled)
neon-blake3#10m x 165 ops/sec ±0.30% (84 runs sampled)
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

<https://www.npmjs.com/package/md5>

### rust

md5 crate use:

<https://crates.io/crates/md5>

blake3 crate use:

<https://crates.io/crates/blake3>

#### neon

Rust bindings for writing safe and fast native Node.js modules.

<https://www.neon-bindings.com>

#### wasm

WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine.

<https://webassembly.org>
