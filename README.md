# KExpress Standard Template

This template is created for kexpress v1.0.x.
This template use sequelize as the ORM library.
If you want to create a new project from this template, please execute following command:

    kexpress-cli create kinuxroot/kexpress-template-multi-sequelize <projectName>
    cd <projectName>
    npm install

Then you need to create your interfaces in init directory.
There are some example apps in `init` directory.

    npm run init

Then please modify the store.js in config directory and run tools to initialize database.

    vim config/dev/store.js
    npm run tools
