require('dotenv').config();

module.exports = {
  src_folders: ['tests'],
  page_objects_path: 'pages',
  output_folder: 'reports',

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },

  test_settings: {
    default: {
      launch_url: 'https://www.flipkart.com/',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['start-maximized']
        }
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'reports/screenshots'
      }
    }
  }
};