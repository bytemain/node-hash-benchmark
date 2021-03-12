use blake3::hash;
use md5;
use neon::prelude::*;

fn digest(mut cx: FunctionContext) -> JsResult<JsString> {
    let string = cx.argument::<JsString>(0)?.value();

    let dgst = md5::compute(string.as_bytes());

    Ok(cx.string(format!("{:x}", dgst)))
}

fn digest_blake3(mut cx: FunctionContext) -> JsResult<JsString> {
    let string = cx.argument::<JsString>(0)?.value();

    let hash = hash(string.as_bytes());

    Ok(cx.string(format!("{}", hash.to_hex())))
}

register_module!(mut m, {
    m.export_function("digest", digest)?;
    m.export_function("digestBlake3", digest_blake3)?;
    Ok(())
});
