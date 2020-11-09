module.exports = {
  port: parseInt(process.env.PORT, 10) || 8080,
  host: process.env.HOST || 'localhost',
  db: {
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '123456',
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    database: process.env.DB_DATABASE || 'postgres',
  },
  log: {
    level: process.env.LOG_LEVEL || 'info',
  },
};
