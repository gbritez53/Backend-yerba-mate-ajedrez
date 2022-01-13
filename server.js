require('dotenv').config();
const express = require('express');
const connectDb = require('./db/mongodb');
const { appConfig, dbConfig } = require('./config');

// Initialize Server
const app = express();

async function initApp(appConfig, dbConfig) {
  try {
    await connectDb(dbConfig);
    app.listen(appConfig.port, () =>
      console.log(`Server listen on port: ${appConfig.port}`)
    );
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
}

initApp(appConfig, dbConfig);
