'use strict';

module.exports = {
  default: {
    database: '{{{project.name}}}',
    userName: 'root',
    password: '123456',
    options: {
      host: 'localhost',
      dialect: 'mysql',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  }
};
