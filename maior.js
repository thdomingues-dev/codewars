var lines = "19 15 150";

var vl = lines.split(" ");

var a = vl[0];

var b = vl[1];

var c = vl[2];

if (a > b && a > c) {
  console.log(a + " eh o maior");
} else if (b > c && b > a) {
  console.log(b + " eh o maior");
  console.log(b, typeof (c));
} else {
  console.log(c + " eh o maior");
}

console.log(vl);

console.log(vl.shift());
