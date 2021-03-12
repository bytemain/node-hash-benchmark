const native = require("../native");
module.exports = {
  md5: native.digest,
  blake3: native.digestBlake3,
};
