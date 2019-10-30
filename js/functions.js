/*function showName(name) {
  console.log(name);
}

showName("Dmytro");
showName("Anna");
showName("Irina");
showName("Vladimir");
if (true) {
  showName("Andrey");
}*/
let sqr = (n) => {
  //console.log(n * n);

  return n * n;
}
//let a = 17;
//let b = sqr(a);
//console.log(sqr(17));

//console.log(typeof sqr);

let power = (a, b, f) => {
  return f(a, b);
}

let result = power(2, 4, (x, y) => x*x + y*y)
console.log(result);
