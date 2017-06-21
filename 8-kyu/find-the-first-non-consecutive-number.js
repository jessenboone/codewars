var arr = [1,2,3,4,5,6,7,8,9,11]

function firstNonConsecutive (arr) {
  for (var i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i] + 1) {
    return arr[i];
  } else {
    return null;
    }
  }
}

firstNonConsecutive()
