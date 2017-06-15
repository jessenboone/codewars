// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


var str = "this string is a test";


function disemvowel(str) {
  var newStr = str.split('');
  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u' || newStr[i] === 'A' || newStr[i] === 'E' || newStr[i] === 'I' || newStr[i] === 'O' || newStr[i] === 'U') {
    newStr.splice(i, 1);
    i--;
    }
  }
  console.log(newStr);
  return newStr.join('');


}

disemvowel(str);
