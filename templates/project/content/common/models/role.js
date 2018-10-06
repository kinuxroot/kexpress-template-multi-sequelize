'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Role.associate = models => {
    models.Role.belongsToMany(models.Privilege, {
      through: 'RolePrivilege'
    });
    models.Role.belongsToMany(models.User, {
      through: 'UserRole'
    });
  };

  return Role;
};
