const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver")

module.exports = {
  "src_folders": [
    "tests"
  ],
  "output_folder": "./output/", 
  "selenium": { 
    "start_process": true, 
    "server_path": seleniumServer.path,
    "log_path" : "./output/",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : chromedriver.path, 
      "webdriver.gecko.driver" : geckodriver.path,
      "webdriver.ie.driver" :  "./bin/IEDriverServer32.exe",
    }
  },
  "test_settings": {
    "default": {
      "globals": {
        "waitForConditionTimeout": 5000 
      },
      "desiredCapabilities" : {
        "browserName" : "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      "chromeOptions": {
        "args" : ["--no-sandbox"]
      }
    },
    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    },
    "edge": {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    },
    "ie11": {
      "desiredCapabilities": {
        "browserName": "internet explorer",
        "platform": "Windows",
        "version": "11"
      }
    }
  }
}