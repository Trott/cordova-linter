phonegap-linter
===============

Finds common PhoneGap-incompatible patterns in HTML, CSS, and JavaScript.

The Plan
========

Point this node CLI tool at your PhoneGap www directory. It will parse:

* HTML (using jsdom? cheerio? htmlparser2?)
* JS (using Esprima?)
* CSS (using css-parse?)

It will report common issues such as:

* CSS and HTML (and maybe even JS) refs to local resources using absolute links where PhoneGap/Cordova requires relative links.
* Find potentially problematic uses of load event when deviceReady is what is really needed.
* What else?

