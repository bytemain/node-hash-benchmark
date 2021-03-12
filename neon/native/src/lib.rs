use md5;
use neon::prelude::*;

fn digest(mut cx: FunctionContext) -> JsResult<JsString> {
    let string = cx.argument::<JsString>(0)?.value();

    let dgst = md5::compute(string.as_bytes());

    Ok(cx.string(format!("{:x}", dgst)))
}

register_module!(mut m, {
    m.export_function("digest", digest)?;
    Ok(())
});
