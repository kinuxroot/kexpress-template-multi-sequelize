'use strict';

const bodyParser = require('body-parser');
const kexpress = require('kexpress');
const router = require('./routes').router;
const RequestChecker = require('kexpress-http').RequestChecker;
const ResponseChecker = require('kexpress-http').ResponseChecker;
const FieldsCheckerErrorHandler = require('../../common/prehandlers/fields').errorHandler;

const StoreManager = require('kexpress-store').StoreManager;
const UniversalModelStore = require('kexpress-store').UniversalModelStore;
const modelInitializer = require('../../common/models');

class Application extends kexpress.core.app.Application {
  // Override
  async prepare() {
    await super.prepare();

    this.use(kexpress.middlewares.access.createWatcher(this.loggers.access));
    this.use(kexpress.middlewares.httpSession.createHttpSession(this.config.session));
    this.use(bodyParser.json());
    this.use(bodyParser.urlencoded({
      extended: true
    }));

    this.prehandle('request', new RequestChecker(FieldsCheckerErrorHandler, {
      schema: 'kexpress'
    }));
    this.prehandle('response', new ResponseChecker());
    this.prehandle('store', new StoreManager({
      stores: {
        default: new UniversalModelStore({
          initializer: modelInitializer.bind(null, this._config.store.default)
        })
      }
    }));
  }

  // Override
  async createRouters() {
    this.use('/', router);
  }
}

module.exports = {
  Application: Application
};
