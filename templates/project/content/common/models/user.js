'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    loginName: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = models => {
    models.User.belongsToMany(models.Role, {
      through: 'UserRole'
    });
  };

  return User;
};
