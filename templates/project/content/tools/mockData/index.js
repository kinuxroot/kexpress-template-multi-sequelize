'use strict';

/* eslint-disable no-console*/

const modelsInitialize = require('../../common/models');
const { getStoreConfig } = require('../../common/lib/store');
const { models, session } = modelsInitialize(getStoreConfig().default);

const {
  Privilege, Role, User
} = models;

async function createData() {
  try {
    const privileges = await createPrivileges();
    const roles = await createRoles(privileges);
    await createUsers(roles);
  }
  catch (error) {
    console.error(error);
  }
  finally {
    await session.close();
  }
}

async function createPrivileges() {
  return {
    managePrivilege: await Privilege.create({
      name: 'managePrivilege'
    }),
    manageRole: await Privilege.create({
      name: 'manageRole'
    }),
    manageUser: await Privilege.create({
      name: 'manageUser'
    }),
    manageObjectSet: await Privilege.create({
      name: 'manageObjectSet'
    }),
    detectObject: await Privilege.create({
      name: 'detectObject'
    })
  };
}

async function createRoles(privileges) {
  const roles = {
    userManager: await Role.create({
      name: 'userManager'
    }),
    normalUser: await Role.create({
      name: ''
    })
  };

  await roles.userManager.setPrivileges([
    privileges.managePrivilege,
    privileges.manageRole,
    privileges.manageUser
  ]);

  await roles.normalUser.setPrivileges([
    privileges.manageObjectSet,
    privileges.detectObject
  ]);

  return roles;
}

async function createUsers(roles) {
  const users = {
    admin: await User.create({
      loginName: 'admin',
      password: '12345678'
    }),
    user1: await User.create({
      loginName: 'user1',
      password: '123456'
    }),
    user2: await User.create({
      loginName: 'user2',
      password: '1234567'
    })
  };

  await users.admin.setRoles([
    roles.userManager
  ]);

  await users.user1.setRoles([
    roles.normalUser
  ]);

  await users.user2.setRoles([
    roles.normalUser
  ]);

  return users;
}

module.exports = createData;
