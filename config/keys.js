if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
// module.exports = {
//   mongoURI:'mongodb://127.0.0.1:27017/MIS'
// }

// note that secretOrKey is for creating jsonwebtoken
