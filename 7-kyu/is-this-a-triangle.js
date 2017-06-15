// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).



function isTriangle(a,b,c) {
  console.log(a,b,c)
   if ((a > 0 && b > 0 && c > 0) && (a + b > c && a + c > b && b + c > a)) {
     return true;
   }
   return false;
}
