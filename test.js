const wasm = require("./wasm");
const js = require("./js");
const neon = require("./neon");
const Benchmark = require("benchmark");

const map = {
  wasm,
  js,
  neon,
};

var suite = new Benchmark.Suite();

const shortContent = "Hello world";
const longContent = "Hello world".repeat(200);

const jsResult = js(shortContent);
console.log(`js result`, jsResult);
const wasmResult = wasm(shortContent);
console.log(`wasm result`, wasmResult);
const neonResult = neon(shortContent);
console.log(`neon result`, neonResult);

const libs = ["js", "neon", "wasm"];
libs.forEach((name) => {
  suite.add(name + "#short", () => {
    const lib = map[name];
    lib(shortContent);
  });
  suite.add(name + "#long", () => {
    const lib = map[name];
    lib(longContent);
  });
});

suite
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .run({ async: true });
