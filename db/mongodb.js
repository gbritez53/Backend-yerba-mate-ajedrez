const mongoose = require('mongoose');

mongoose.connection.on('connected', () => console.log('MongoDB is connected'));

async function connectDB({ host, port, dbName }) {
  const URI = `mongodb://${host}:${port}/${dbName}`;

  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connectDB;
