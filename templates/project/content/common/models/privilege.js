'use strict';


module.exports = (sequelize, DataTypes) => {
  const Privilege = sequelize.define('Privilege', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Privilege.associate = models => {
    models.Privilege.belongsToMany(models.Role, {
      through: 'RolePrivilege'
    });
  };

  return Privilege;
};
