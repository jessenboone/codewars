function fakeBin(x){
  var arr = x.split('');
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }
  return arr.join('');
  console.log(arr);
}
fakeBin('213188498487513')
