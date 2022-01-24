require('dotenv').config();
const app = require('./app');
const { connectAtlasDB } = require('./db/mongodb');
const { appConfig, dbConfigProd } = require('./config');

async function initApp(appConfig, dbConfig) {
  try {
    await connectAtlasDB(dbConfig);
    // app.listen(appConfig.port, () =>
    app.listen(process.env.PORT, () =>
      // console.log(`Server listen on port: http://localhost:${appConfig.port}`)
      console.log(`Server listen on port: ${process.env.PORT}`)
    );
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
}

initApp(appConfig, dbConfigProd);
