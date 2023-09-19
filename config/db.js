const mongoose = require("mongoose");

const connectDB = async (username, password, cluster, database) => {
  const URL = `mongodb+srv://${encodeURIComponent(
    username
  )}:${encodeURIComponent(
    password
  )}@${cluster}/${database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Database is connected Successfully ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};
module.exports = connectDB;
