const wasm = require("./wasm");
const js = require("./js");
const neon = require("./neon");
const Benchmark = require("benchmark");

const map = {
  "js-md5": js,
  "wasm-md5": wasm.md5,
  "wasm-blake3": wasm.blake3,
  "neon-md5": neon.md5,
  "neon-blake3": neon.blake3,
};

const _1b = "0";
const _10b = "0".repeat(10);
const _1k = _1b.repeat(1024);
const _10k = _1b.repeat(1024 * 10);
const _500k = _1b.repeat(1024 * 500);
const _1m = _1b.repeat(1024 * 1024 * 1);
const _2m = _1b.repeat(1024 * 1024 * 2);
const _10m = _1b.repeat(1024 * 1024 * 10);

const sizeMap = {
  "1b": _1b,
  "10b": _10b,
  "1k": _1k,
  "10k": _10k,
  "500k": _500k,
  "1m": _1m,
  "2m": _2m,
  "10m": _10m,
};

const libs = Object.entries(map);
const sizes = Object.entries(sizeMap);

const suite = new Benchmark.Suite();

libs.forEach(([name, lib]) => {
  sizes.forEach(([sizeName, content]) => {
    suite.add(`${name}#${sizeName}`, () => {
      lib(content);
    });
  });
});

suite
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .run();
