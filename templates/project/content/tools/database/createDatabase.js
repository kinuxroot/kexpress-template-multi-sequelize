'use strict';

/* eslint-disable no-console*/

const mysql = require('mysql2/promise');

const storeDevConfig = require('../../config/dev').store;

async function createDatabase() {
  const connection = await mysql.createConnection({
    host: storeDevConfig.default.options.host,
    user: storeDevConfig.default.userName,
    password: storeDevConfig.default.password
  });

  await connection.execute(
    `CREATE DATABASE IF NOT EXISTS \`${
      storeDevConfig.default.database
    }\` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci`
  );
  console.log(`创建数据库${storeDevConfig.default.database}成功`);
  await connection.destroy();
}

module.exports = createDatabase;
