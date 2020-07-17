let arr = [3, 4, 4, 3, 6, 3];
let myArray = [];
for (let i = 0; i < arr.length; i++) {
  if (myArray.includes(arr[i])) {
    myArray.splice(myArray.indexOf(arr[i]), 1);
    myArray.push(arr[i]);
  } else {
    myArray.push(arr[i]);
  }
}
console.log(myArray);
