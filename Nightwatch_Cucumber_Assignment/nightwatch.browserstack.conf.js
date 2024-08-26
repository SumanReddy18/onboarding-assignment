const baseConfig = require('./nightwatch.conf.js');
username = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_KEY
// buildName = process.env.JENKINS_LABEL

const config = {
    ...baseConfig,
    webdriver: {
        start_process: false,
        host: 'hub-cloud.browserstack.com',
        port: 443
    },
    test_settings: {
        ...baseConfig.test_settings,
        default: {
            ...baseConfig.test_settings.default,
            desiredCapabilities: {
                ...baseConfig.test_settings.default.desiredCapabilities,
                'browserstack.user': username,
                'browserstack.key': accessKey,
                'browserstack.debug': true,
                'browserstack.networkLogs': true,
                'browserstack.console': 'info',
                'browserstack.video': true,
                'browserstack.perfLog': true,
                chromeOptions: {
                    args: ['--start-maximized']
                },
                firefoxOptions: {
                    args: ['--start-maximized']
                }
            }
        },
        chrome: {
            desiredCapabilities: {
                browser: 'chrome',
                browser_version: 'latest',
                os: 'Windows',
                os_version: '11',
                resolution: '1920x1080',
                name: 'Flipkart Test - Cucumber - Chrome',
                build: 'Flipkart Testing Build - Cucumber - Chrome',
                'browserstack.networkLogs': true,
                'browserstack.console': 'info',
                'browserstack.video': true,
                'browserstack.perfLog': true
            }
        },
        firefox: {
            desiredCapabilities: {
                browser: 'firefox',
                browser_version: 'latest',
                os: 'Windows',
                os_version: '10',
                resolution: '1920x1080',
                name: 'Flipkart Test - Cucumber - Firefox',
                build: 'Flipkart Testing Build - Cucumber - Firefox',
                'browserstack.networkLogs': true,
                'browserstack.console': 'info',
                'browserstack.video': true,
                'browserstack.perfLog': true
            }
        },
        edge: {
            desiredCapabilities: {
                browser: 'edge',
                browser_version: 'latest',
                os: 'Windows',
                os_version: '11',
                resolution: '1920x1080',
                name: 'Flipkart Test - Cucumber - Edge',
                build: 'Flipkart Testing Build - Cucumber - Edge',
                'browserstack.networkLogs': true,
                'browserstack.console': 'info',
                'browserstack.video': true,
                'browserstack.perfLog': true
            }
        },
        safari: {
            desiredCapabilities: {
                browser: 'safari',
                browser_version: 'latest',
                os: 'OS X',
                os_version: 'Big Sur',
                resolution: '1920x1080',
                name: 'Flipkart Test - Cucumber - Safari',
                build: 'Flipkart Testing Build - Cucumber - Safari',
                'browserstack.networkLogs': true,
                'browserstack.console': 'info',
                'browserstack.video': true,
                'browserstack.perfLog': true
            }
        }
    },
    parallel: 2,
};

// Code to copy selenium host/port into test settings
for (const key in config.test_settings) {
    if (Object.prototype.hasOwnProperty.call(config.test_settings, key)) {
        const testSetting = config.test_settings[key];
        testSetting.selenium_host = config.webdriver.host;
        testSetting.selenium_port = config.webdriver.port;
    }
}

module.exports = config;
