//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

function shouting(input) {
  return input.toUpperCase() == input;
}
function askingAQuestion(input) {
  return input[input.length-1] == "?";
}
function talkingForcefully(input) {
  return input[input.length-1] == "!";
}
function onlyNumbers(input) {
  return ;
}

Bob.prototype.hey = function(input) {
  if( onlyNumbers(input) ){
    return 'Whatever';
  }
  else if( shouting(input) ){
    return 'Whoa, chill out!';
  }
  // else if ( talkingForcefully(input) ) {
  //   return 'Whatever.';
  // }
  else if ( askingAQuestion(input) ) {
    return 'Sure.';
  }
  else {
    return 'Whatever.';
  }
};
module.exports = Bob;
