function solution(str) {
  let myString = [];

  for (let i = 0; i < str.length; i++) {
    if (i + 1 < str.length) {
      myString.push(str[i] + str[i + 1]);
      i++;
    } else {
      myString.push(str[i] + "_");
    }
  }
  return myString;
}

console.log(solution("abcde"));

