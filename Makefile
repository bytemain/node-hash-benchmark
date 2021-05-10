test: install
	node test.js
install: js rust-wasm neon
	yarn
js:
	cd js && yarn
rust-wasm:
	cd rust-wasm && wasm-pack build --release --target nodejs
neon:
	cd neon && yarn
