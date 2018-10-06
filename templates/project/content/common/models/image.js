'use strict';

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    data: DataTypes.STRING
  });

  return Image;
};
