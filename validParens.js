let parens = "";
let myCount = 0;
for (let i = 0; i < parens.length; i++) {
  if (parens[i] === '(') {
    myCount--;
  } else {
    myCount++;
  }
}
if (!myCount && parens.length < 0) console.log(true);
return false;
