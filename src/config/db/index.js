// const mongoose = require("mongoose");
// async function connect() {
//   try {
//     mongoose.connect("mongodb://127.0.0.1:27017/myproject", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("thanh cong");
//   } catch (error) {
//     console.log("thất bại");
//   }
// }
// module.exports = { connect };

const mongoose = require("mongoose");
function connect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    });
}

module.exports = { connect };
