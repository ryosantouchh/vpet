export const appConfig = () => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    hostname: process.env.DB_HOSTNAME || 'localhost',
    username: process.env.DB_USERNAME || 'vpetadmin',
    password: process.env.DB_PASSWORD || 'vpetpassword',
    databaseName: process.env.DB_NAME || 'vpetdatabase',
    databasePort: process.env.DB_PORT || '5432',
  },
});
