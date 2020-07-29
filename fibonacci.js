var hash = [0, 1];

function fibonacci(n) {
  var current = n < hash.length ? hash[n] : fibonacci(n - 1) + fibonacci(n - 2);
  return hash[n] = current, current;
}

console.log(fibonacci(5));