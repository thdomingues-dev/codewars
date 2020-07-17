function accum(s) {
  let myString = "";

  for (let i = 0; i < s.length; i++) {
    myString += s[i].toUpperCase();
    myString += s[i].repeat(i).toLowerCase();

    if (i + 1 != s.length) myString += "-";
  }
  return myString;
}

console.log(accum("ABcDeFghi"));