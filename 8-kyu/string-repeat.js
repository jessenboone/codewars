// Write a function called repeatStr which repeats the given string string exactly n times.
//
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
  var temp = s;
  for (var i = 0; i < n - 1; i++) {
    s = s + temp;
    console.log(i, s)
  }
  return s;
}

repeatStr(6, 'ha ha') // ha ha ha ha
