/* Write a function, which takes a non-negative integer
(seconds) as input and returns the time in a
human-readable format (HH:MM:SS) */

//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59

//The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {

  let h = Math.floor(seconds / 3600)
  let m = Math.floor((seconds % 3600) / 60)
  let s = Math.floor((seconds % 3600) % 60)

  let result = (numb) => numb < 10 ? "0" + numb : numb;

  return (result(h) + ":" + result(m) + ":" + result(s));
}

console.log(humanReadable(359999));