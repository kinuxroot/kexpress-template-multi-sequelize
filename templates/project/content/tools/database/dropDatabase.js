'use strict';

/* eslint-disable no-console*/

const mysql = require('mysql2/promise');

const storeDevConfig = require('../../config/dev').store;

async function dropDatabase() {
  const connection = await mysql.createConnection({
    host: storeDevConfig.default.options.host,
    user: storeDevConfig.default.userName,
    password: storeDevConfig.default.password
  });

  await connection.execute(`DROP DATABASE \`${storeDevConfig.default.database}\``);
  console.log(`删除数据库${storeDevConfig.default.database}成功`);
  await connection.destroy();
}

module.exports = dropDatabase;
