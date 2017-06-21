// If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.
//
// Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.
//
// We want to input a word as a string, and return a list representing that word as a taco.
//
// Key
//
// all vowels = beef
//
// t = tomato
//
// l = lettuce
//
// c = cheese
//
// g = guacamole
//
// s = salsa
//
// NOTE
// We do not care about case here. 'S' is therefore equivalent to 's' in our taco.
//
// Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.
//
// Note that no matter what ingredients are passed, our taco will always have a shell.


var word = "typography";



function tacofy(word) {
 var word2 =  word.toLowerCase()
  var arr = word2.split('');
  arr.push('shell');
  arr.unshift('shell');
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
      arr.splice(i, 1, 'beef');
    } else if (arr[i] === 't') {
      arr.splice(i, 1, 'tomato');
    } else if (arr[i] === 'l') {
      arr.splice(i, 1, 'lettuce');
    } else if (arr[i] === 'c') {
      arr.splice(i, 1, 'cheese');
    } else if (arr[i] === 'g') {
      arr.splice(i, 1, 'guacamole');
    } else if (arr[i] === 's') {
      arr.splice(i, 1, 'salsa');
    } else {
      arr.splice(i, 1);
      i--
    }
  }
  arr.push('shell');
  arr.unshift('shell');
  return arr;

}



tacofy(word);
