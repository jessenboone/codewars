// Write a function to split a string and convert it into an array of words.
//
// e.g.
//
// string_to_array("Robin Singh") => ["Robin", "Singh"]
//
// string_to_array("I love arrays they are my favorite") => ["I", "love", "arrays", "they", "are", "my", "favorite"]
//
// Note: in Javascript the function is written in camelCase as 'stringToArray'



var string = "ThisIsATestStringAndShouldBeSplitUpIntoIndividualStrings";

function stringToArray(string){
var newString = string.split("");
for (var i = 1; i < newString.length; i++) {
  if (newString[i] === newString[i].toUpperCase()) {
    newString[i] = ' ' + newString[i];
    }
  }
  return newString.join('')

}

stringToArray(string);
