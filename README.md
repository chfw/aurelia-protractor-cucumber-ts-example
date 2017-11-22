# Aurelia protractor cucumber typescript example

[![Build Status](https://travis-ci.org/chfw/aurelia-protractor-cucumber-ts-example.svg?branch=master)](https://travis-ci.org/chfw/aurelia-protractor-cucumber-ts-example)

This is an example project to demonstrate how to use protractor.js, cucumber.js and typescript
to test aurelia projects. Hope it provide guidances for like-minded people.


## Usage

```shell
$ npm install
$ ./node_modules/.bin/webdriver-manager update
$ npm test

> aurelia-cucumber-typescript-example@1.0.0 test
> protractor protractor.conf.js

(node:17432) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
[08:42:13] I/launcher - Running 1 instances of WebDriver
[08:42:13] I/local - Starting selenium standalone server...
[08:42:14] I/local - Selenium standalone server started at http://192.168.1.97:55286/wd/hub
Feature: Sample feature

    As a user of aurelia.js
    I want to have documentation on aurelia
    So that I can concentrate on building awesome applications

  Scenario: Reading documentation
  ✔ Given I am on the aurelia js org web site
  ✔ When I click on "Get Started"
  ✔ Then I should see "Quick Start"

1 scenario (1 passed)
3 steps (3 passed)
0m02.585s
[08:42:18] I/local - Shutting down selenium standalone server.
[08:42:18] I/launcher - 0 instance(s) of WebDriver still running
[08:42:18] I/launcher - chrome #01 passed

```


## License

Unlicense
