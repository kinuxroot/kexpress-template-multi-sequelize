'use strict';

module.exports = (sequelize, DataTypes) => {
  const DObject = sequelize.define('DObject', {
    externalId: DataTypes.STRING,
    feature: DataTypes.STRING,
  });

  DObject.associate = models => {
    models.DObject.hasOne(models.Image);
    models.DObject.belongsTo(models.ObjectSet);
  };

  return DObject;
};
