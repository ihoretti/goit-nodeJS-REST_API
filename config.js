require("dotenv").config();

const config = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST,
  SECRET_KEY: process.env.SECRET_KEY,
};

module.exports = config;
