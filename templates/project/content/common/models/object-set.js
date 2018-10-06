'use strict';

module.exports = (sequelize, DataTypes) => {
  const ObjectSet = sequelize.define('ObjectSet', {
    name: DataTypes.STRING
  });

  ObjectSet.associate = models => {
    models.ObjectSet.hasMany(models.DObject);
  };

  return ObjectSet;
};
