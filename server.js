require('dotenv').config();
const app = require('./app');
const { connectDB, connectAtlasDB } = require('./db/mongodb');
const { appConfig, dbConfig, dbConfigProd } = require('./config');

// async function initApp(appConfig, dbConfig) {
//   try {
//     await connectDB(dbConfig);
//     app.listen(appConfig.port, () =>
//       console.log(`Server listen on port: http://localhost:${appConfig.port}`)
//     );
//   } catch (err) {
//     console.error(err);
//     process.exit(0);
//   }
// }

async function initApp(dbConfigProd) {
  try {
    await connectAtlasDB(dbConfigProd);
    app.listen(process.env.PORT, () =>
      console.log(`Server listen on port: ${process.env.PORT}`)
    );
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
}

initApp(dbConfigProd);

// initApp(appConfig, dbConfig);
