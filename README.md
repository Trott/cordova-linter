# cordova-linter [![Build Status](https://secure.travis-ci.org/Trott/cordova-linter.png?branch=master)](http://travis-ci.org/Trott/cordova-linter)

Find common patterns in HTML, CSS, and JavaScript that are incompatible with Apache Cordova and PhoneGap.

## Getting Started
Install the tool with: `npm install -g cordova-linter`

Then lint a project with: `cordova-linter path/to/your/project`

Currently, all it does is check that you are not using absolute paths in `href` attributes.

## The Plan

Point this node CLI tool at your PhoneGap www directory. It will parse:

* HTML (using jsdom? cheerio? htmlparser2?)
* JS (using Esprima? maybe delegate to [ESLint](https://github.com/nzakas/eslint) with some plugins we write?)
* CSS (using css-parse?)

It will report common issues such as:

* [Issue #6](https://github.com/Trott/cordova-linter/issues/6): HTML refs to local resources using absolute links where Cordova/PhoneGap requires relative links.
* As above but for CSS URLs
* As above but for resources loaded in JS
* Find potentially problematic uses of load event when deviceReady is what is really needed.
* [Issue #1](https://github.com/Trott/cordova-linter/issues/1): Flag techniques used to trigger deviceReady in the browser for testing if they should be removed from a production build. 
* Detect CSS transitions that would benefit from hardware acceleration via the `translate3d` hack?
* Detect use of click event handlers without FastClick loaded
* Detect failure to load `cordova.js`
* Detect loading of `phonegap.js` instead of `cordova.js`
* What else?

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Rich Trott
Licensed under the Apache 2.0 license.
