//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var Bob = function() {};

Bob.prototype.hey = function(input) {

  switch(input) {
    case "question":
        return "Sure";
        break;
    case "yell":
        return "Whoa";
        break;
    case "address":
        return "Fine";
        break;
    default:
        default return "Whatever";
}
};

module.exports = Bob;
