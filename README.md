# cordova-linter

Find common patterns in HTML, CSS, and JavaScript that are incompatible with Apache Cordova and PhoneGap.


## The Plan

Point this node CLI tool at your PhoneGap www directory. It will parse:

* HTML (using jsdom? cheerio? htmlparser2?)
* JS (using Esprima?)
* CSS (using css-parse?)

It will report common issues such as:

* CSS and HTML (and maybe even JS) refs to local resources using absolute links where Cordova/PhoneGap requires relative links.
* Find potentially problematic uses of load event when deviceReady is what is really needed.
* Flag techniques used to trigger deviceReady in the browser for testing if they should be removed from a production build. (See [issue #1](https://github.com/Trott/cordova-linter/issues/1) and join discussion there!)
* What else?

## Getting Started
Install the tool with: `npm install -g cordova-linter`

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
Licensed under the MIT license.
