/* var fatorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
}

console.log(fatorial(3)); */


var fatorial = function (n) {
  return n < 2 ? 1 : n * fatorial(n - 1);
}

console.log(fatorial(4));