function londonCityHacker(journey) {
  let coast = 0;

  for (let i = 0; i < journey.length; i++) {
    if (Number.isInteger(journey[i]) && Number.isInteger(journey[i + 1])) {
      coast += 1.50;
      i += 1;
      console.log("here");
    } else if (Number.isInteger(journey[i])) {
      coast += 1.50;
      console.log("here2");
    } else {
      coast += 2.40;
    }
  }
  return "£" + coast.toFixed(2);
}

console.log(londonCityHacker([12, 'Central', 'Circle', 21]));