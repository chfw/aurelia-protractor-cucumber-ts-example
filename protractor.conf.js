'use strict';
const path = require('path');

exports.config = sharedConfig();

function sharedConfig() {
    const config = {
        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),
        cucumberOpts: {
            compiler: "ts:ts-node/register",
            require: [
              path.resolve(process.cwd(), './src/*.ts')
            ],
            format: 'pretty',
            tags: ''
        },
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
              'args': [
                '--show-fps-counter',
                '--no-default-browser-check',
                '--no-first-run',
                '--disable-default-apps',
                '--disable-popup-blocking',
                '--disable-translate',
                '--disable-background-timer-throttling',
                '--disable-renderer-backgrounding',
                '--disable-device-discovery-notifications',
                '--headless',
                '--no-gpu'
              ]
            }
        },
        specs: ['features/*.feature'],

        onPrepare: function () {
            // place something here
        },
        plugins: [{
            package: require.resolve('aurelia-protractor-plugin')
        }],

        allScriptsTimeout: 11000,
        disableChecks: true,

        // From `protractor-cucumber-framework`, allows cucumber to handle the 199 exception and record it appropriately
        ignoreUncaughtExceptions: true
    };

    return config;
}
