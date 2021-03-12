test: install
	node test.js
install: js wasm neon
	yarn
js:
	cd js && yarn
wasm:
	cd wasm && wasm-pack build --release --target nodejs
neon:
	cd neon && yarn
