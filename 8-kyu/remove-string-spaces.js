
var test = 'this is a test string';

function noSpace(test){
  var te = test.split('');
 for (var i = 0; i < te.length; i++) {
   if (te[i] === ' ') {
     delete te[i]
     i--

   }
 }

return te.join('')
console.log(te)
}

noSpace(test)
