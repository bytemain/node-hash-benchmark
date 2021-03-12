# node-md5-benchmark

Benchmark to compare md5 implementation in javascript, web assembly and neon.

Results: (Updated 2021-03-12)

```plaintxt
js result 3e25960a79dbc69b674cd4ec67a72c62
wasm result 3e25960a79dbc69b674cd4ec67a72c62
neon result 3e25960a79dbc69b674cd4ec67a72c62

js#short x 315,408 ops/sec ±0.77% (91 runs sampled)
js#long x 10,818 ops/sec ±0.95% (86 runs sampled)
neon#short x 748,776 ops/sec ±0.59% (88 runs sampled)
neon#long x 147,073 ops/sec ±0.76% (91 runs sampled)
wasm#short x 272,001 ops/sec ±1.26% (88 runs sampled)
wasm#long x 47,677 ops/sec ±0.68% (91 runs sampled)
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

For md5 I used the cargo package

https://crates.io/crates/md5

### wasm

WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine.

https://webassembly.org/

For md5 I used the cargo package

https://crates.io/crates/md5
