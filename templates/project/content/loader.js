'use strict';

const kexpress = require('kexpress');
const kexpressHttp = require('kexpress-http');
const kexpressStore = require('kexpress-store');
const logger = kexpress.core.logger.error;

kexpressHttp.load(kexpress);
kexpressStore.load(kexpress);

let command = process.env.KEXPRESS_COMMAND;
if ( !command ) {
  command = 'start';
}

const startupConfig = require('./app.startup');
const commandFunction = kexpress.master[command];

commandFunction(startupConfig)
.catch(e => {
  logger.error(e);

  process.exit(0);
});
