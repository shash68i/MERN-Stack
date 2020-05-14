const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// mongoose.connect() returns a promise so we use async await here
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useUnifiedTopology: true });

    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    //Exit process with faliure
    process.exit(1);
  }
};

module.exports = connectDB;
