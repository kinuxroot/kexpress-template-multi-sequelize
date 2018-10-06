'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

function getStoreConfig() {
  if (process.env.KEXPRESS_ENV === 'dev') {
    return require('../../config/dev').store;
  }

  return require('../../config/prod.single').store;
}

function createSequelizeModelInitializer(modelDirs, options) {
  if ( !options ) {
    throw new Error('Sequelize model need to specify options');
  }

  if ( !options.excludes ) {
    throw new Error('Sequelize model need to specify excludes file names in options');
  }

  const excludeFileNames = new Set(options.excludes);
  function initialize(storeConfig) {
    const sequelize = new Sequelize(
      storeConfig.database,
      storeConfig.userName,
      storeConfig.password,
      storeConfig.options
    );

    const models = Object.create(null);
    const files = [];
    for ( const modelDir of modelDirs ) {
      const modelDirFiles = fs.readdirSync(modelDir);
      for ( const modelDirFile of modelDirFiles ) {
        files.push({
          path: path.join(modelDir, modelDirFile),
          name: modelDirFile
        });
      }
    }

    files.filter(file => {
      return (
        file.name.indexOf('.') !== 0 && !excludeFileNames.has(file.name) && file.name.slice(-3) === '.js'
      );
    })
    .forEach(file => {
      const model = sequelize['import'](file.path);
      models[model.name] = model;
    });

    Object.keys(models).forEach(modelName => {
      if (models[modelName].associate) {
        models[modelName].associate(models);
      }
    });

    return {
      models,
      session: sequelize
    };
  }

  return initialize;
}

module.exports = {
  getStoreConfig,
  createSequelizeModelInitializer
};
