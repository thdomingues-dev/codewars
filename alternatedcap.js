function capitalize(s) {
  let myString = ["", ""];

  for (let i = 0; i < s.length; i++) {
    myString[0] += s[i].toUpperCase();
    myString[1] += s[i];

    if (i + 1 < s.length) {
      myString[0] += s[i + 1];
      myString[1] += s[i + 1].toUpperCase();
    }

    i++;
  }

  return myString;
};

console.log(capitalize("qualquer coisa aqui"));