'use strict';

const { createSequelizeModelInitializer } = require('../lib/store');

const initialize = createSequelizeModelInitializer([
  __dirname
], {
  excludes: [
    'index.js'
  ]
});

module.exports = initialize;
