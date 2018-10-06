'use strict';

const { createSequelizeModelInitializer } = require('../../../common/lib/store');

const initialize = createSequelizeModelInitializer([
  __dirname
], {
  excludes: [
    'index.js'
  ]
});

module.exports = initialize;
