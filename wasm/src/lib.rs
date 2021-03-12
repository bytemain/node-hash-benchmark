use md5;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn digest(string: &str) -> Option<String> {
    let dgst = md5::compute(string.as_bytes());
    Some(format!("{:x}", dgst))
}
