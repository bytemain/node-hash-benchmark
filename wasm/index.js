const pkg = require("./pkg");
module.exports = {
  md5: pkg.digest,
  blake3: pkg.digest_blake3,
};
