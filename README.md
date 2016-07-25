# sails + nightwatch + grunt

### Add dependencies

Add to package.json the dependencies below :

```
"phantomjs": "^1.9.8",
"nightwatch": "^0.8.6",
"grunt-nightwatch": "^0.5.3",
"grunt-selenium-webdriver": "^0.2.451",
"selenium-server-standalone-jar": "2.47.1"
```

> Don't forget to update npm !

```
npm install
```

### Nightwatch settings

Add the setting file for nightwatch (/nightwatch.json) :

```
{
    "src_folders" : ["tests/nightwatch"],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "",

    "test_workers" : {"enabled" : true, "workers" : "auto"},

    "selenium" : {
        "start_process" : true,
        "server_path" : "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.47.1.jar",
        "log_path" : "",
        "host" : "127.0.0.1",
        "port" : 4444,
        "cli_args" : {
          "webdriver.chrome.driver" : "",
          "webdriver.ie.driver" : ""
        }
    },

    "test_settings" : {
        "default" : {
            "launch_url" : "http://localhost",
            "selenium_port"  : 4444,
            "selenium_host"  : "localhost",
            "silent": true,
            "firefox_profile": false,
            "chrome_driver" : "",
            "screenshots" : {
                "enabled" : true,
                "path" : "screenshots",
                "on_failure": true,
                "on_error": false
            },
            "desiredCapabilities": {
                "browserName": "phantomjs",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "phantomjs.page.settings.userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4",
                "phantomjs.binary.path": "node_modules/phantomjs/lib/phantom/bin/phantomjs"
            },
            "use_xpath": false
        }
    }
}
```

### Add folders

Create a *screenshots* and *reports* folders for storing results:

```
mkdir screenshots & mkdir reports
```

Create a *tests/nightwatch* folder for storing the test files :

``` 
mkdir -p tests/nightwatch 
```

You can now execute tests with the `nightwatch` command.

### Add grunt task

Create a new file : *tasks/config/nightwatch.js* :

```
module.exports = function(grunt) {
    grunt.config.set('nightwatch', {
        options: {}
    });
    grunt.loadNpmTasks("grunt-nightwatch");
};
```

Now , you can execute tests with the `grunt nightwatch` command.
