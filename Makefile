install:
	cd js && yarn
	cd neon && yarn
	cd wasm && wasm-pack build --release --target nodejs
	yarn

test: install
	node test.js

.PHONY: all
