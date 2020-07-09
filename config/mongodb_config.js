const mongoose = require("mongoose");
const Error = require("../errorHandlers/Error");

exports.connectDb = async () => {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected ${connection.connection}`);
  } catch (err) {
    let errObject = JSON.stringify({
      message: err.message,
      stack: err.stack,
    });
    throw new Error(errObject);
  }
};
