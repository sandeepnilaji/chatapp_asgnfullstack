const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://sandeepnilaji:sandeep@cluster0.uejfr.mongodb.net/chatapp?retryWrites=true&w=majority"
  );
};

module.exports = connect;
