const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOSTNAME || 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;


// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME || "byebyefresh_db",
//     process.env.DB_USER || "root",
//     process.env.DB_PASSWORD || "pass",
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//     },
//   );
// }

// function getSequelize() {
//   console.log(process.env.DB_NAME || "byebyefresh_db");
//   console.log(process.env.DB_USER || "root");
//   console.log(process.env.DB_PASSWORD || "pass");
//   return sequelize;
// }

// module.exports = getSequelize();

// const Sequelize = require('sequelize');
// require('dotenv').config();