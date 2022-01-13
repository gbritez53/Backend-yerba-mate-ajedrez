require('dotenv').config();
const express = require('express');
const connectAtlasDB = require('./db/mongodb');
const { appConfig, dbConfigProd } = require('./config');

// Initialize Server
const app = express();

async function initApp(appConfig, dbConfig) {
  try {
    await connectAtlasDB(dbConfig);
    app.listen(appConfig.port, () =>
      console.log(`Server listen on port: http://localhost:${appConfig.port}`)
    );
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
}

initApp(appConfig, dbConfigProd);
