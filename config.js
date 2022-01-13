const config = {
  appConfig: {
    port: process.env.APP_PORT
  },
  dbConfig: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME
  }
}

module.exports = config
