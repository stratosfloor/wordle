export function getWord(list, numberOfLetters, uniqueLetters = false) {
  let payload = [];
  if (!uniqueLetters) {
    payload = list.filter((word) => word.length == numberOfLetters);
  } else {
    payload = list
      .filter((word) => word.length == numberOfLetters)
      .filter((word) => numberOfLetters == new Set(word).size);
  }
  console.log(payload);
  if (payload.length > 0) {
    return payload[Math.floor(Math.random() * payload.length)];
  } else {
    console.log("No word found");
    return null;
  }
}
