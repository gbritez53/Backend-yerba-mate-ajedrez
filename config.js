const config = {
  appConfig: {
    port: process.env.APP_PORT
  },
  dbConfig: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME
  },
  dbConfigProd: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    cluster: process.env.DB_CLUSTER,
    dbName: process.env.DB_NAME_PROD
  }
};

module.exports = config;
