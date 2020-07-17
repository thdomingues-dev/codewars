function arrayDiff(a, b) {
  let aux = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) aux.push(a[i]);
  }
  return aux;
}

const test = arrayDiff([1, 2], [1]);
console.log(test);