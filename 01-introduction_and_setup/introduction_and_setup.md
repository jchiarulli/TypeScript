# TypeScript 101
* Alternative to JavaScript (superset)
* Basically extends JavaScript with new features and syntax
* Browsers by default don't understand TypeScript like they do with JavaScript
* In most cases TypeScript is easy to compile and it comes with a bunch of new features

## Features
* Allows us to use strict types, e.g., if a certain variable is declared to be a number then later on it cannot be changed to a boolean, a string, or something else
  * This makes the error checking and debugging process easier and it also forces us to write cleaner and better code
  * Whereas, JavaScript uses dynamic types, so variables can change their type
* Supports modern features (arrow functions, let, const)
  * All of the newer featues that are not automatically supported in browsers can be used since TypScript is compiled to JavaScript which can be older JavaScript which the browsers will understand
  * Similar to the Babel compiler
* Extra features (generics, interfaces, tuples, etc.)