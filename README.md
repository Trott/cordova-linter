# cordova-linter [![Build Status](https://secure.travis-ci.org/Trott/cordova-linter.png?branch=master)](http://travis-ci.org/Trott/cordova-linter)

Find common patterns in HTML, CSS, and JavaScript that are incompatible with Apache Cordova and PhoneGap.

**This project is deprecated.** It was a beautiful idea that never took off. Feel free to fork it and make it awesome. I'm not doing any cordova work these days so my motivation just isn't there right now.

## Getting Started
Install the tool with: `npm install -g cordova-linter`

Then lint a project with: `cordova-linter path/to/your/project`

## Things The Linter Flags

* absolute paths in `src` or `href` attributes
* protocol-less paths in `src` or `href` attributes
* omission of a script tag loading cordova.js

## Stuff That Needs To Be Implemented

* Find potentially problematic uses of load event when deviceReady is what is really needed.
* [Issue #1](https://github.com/Trott/cordova-linter/issues/1): Flag techniques used to trigger deviceReady in the browser for testing if they should be removed from a production build.
* Detect CSS transitions that would benefit from hardware acceleration via the `translate3d` hack?
* Detect use of click event handlers without FastClick loaded
* Detect loading of `phonegap.js` instead of `cordova.js`
* Detect when an app isn't a single-page app? Or is that overkill? I mean, that's not really a lint thing, that's a whole app architecture thing.
* Documentation
* Examples

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Rich Trott
Licensed under the Apache 2.0 license.
