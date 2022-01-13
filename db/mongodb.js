const mongoose = require('mongoose');

mongoose.connection.on('connected', () => console.log('MongoDB is connected'));

//for localhost
async function connectDB({ host, port, dbName }) {
  const URI = `mongodb+sr://${host}:${port}/${dbName}`;

  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

//for production
async function connectAtlasDB({ username, password, cluster, dbName }) {
  const URI = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connectAtlasDB;
