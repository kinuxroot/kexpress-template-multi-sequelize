'use strict';

/* eslint-disable no-console*/

const initialize = require('../common/models');
const { getStoreConfig } = require('../common/lib/store');
const inquirer = require('inquirer');
const createDatabase = require('./database/createDatabase');
const dropDatabase = require('./database/dropDatabase');
const createData = require('./mockData');

const storeConfig = getStoreConfig().default;

const { session } = initialize(storeConfig);

async function database() {
  try {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: '请选择操作:',
        choices: [
          '创建数据库',
          '删除数据库',
          new inquirer.Separator(),
          '创建数据表',
          '初始化数据',
          '退出'
        ]
      }
    ]);
    if (Reflect.has(answer, 'choice') && answer.choice === '创建数据库') {
      await createDatabase();
      await database();
    }
    if (Reflect.has(answer, 'choice') && answer.choice === '删除数据库') {
      const confirmAnswer = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: '确定删除数据库吗，请确保做好数据备份工作，数据无价!'
        }
      ]);
      if (
        Reflect.has(confirmAnswer, 'confirm') &&
        confirmAnswer.confirm === true
      ) {
        await dropDatabase();
        await database();
      }
    }
    if (Reflect.has(answer, 'choice') && answer.choice === '创建数据表') {
      await session.sync();
      console.log('创建数据表成功');
      await database();
    }
    if (Reflect.has(answer, 'choice') && answer.choice === '初始化数据') {
      await createData();
      await database();
    }
    if (Reflect.has(answer, 'choice') && answer.choice === '退出') {
      console.log('退出成功');

      await session.close();
      process.exit(0);
    }
  }
  catch (error) {
    console.error(error);
  }
}

database();
