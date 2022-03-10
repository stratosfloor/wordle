export function guess(guess, answer) {
  if (guess.length != answer.length) {
    return "error";
  }
  const localAnswer = new Array(...new Set(answer));
  const NUMBER_OF_LETTERS = 5;
  const payload = [];

  for (let i = 0; i < NUMBER_OF_LETTERS; i++) {
    const obj = {};
    let value = "";

    if (guess[i] === answer[i]) {
      value = "correct";
      let index = localAnswer.indexOf(guess[i]);
      localAnswer.splice(index, 1);
    } else if (!answer.includes(guess[i])) {
      value = "incorrect";
    }

    obj.letter = guess[i];
    obj.result = value;
    payload.push(obj);
  }

  for (let j = 0; j < NUMBER_OF_LETTERS; j++) {
    if (payload[j].result === "" && localAnswer.includes(guess[j])) {
      payload[j].result = "misplaced";
      let index = localAnswer.indexOf(guess[j]);
      localAnswer.splice(index, 1);
    } else if (payload[j].result === "" && !localAnswer.includes(guess[j])) {
      payload[j].result = "incorrect";
    }
  }
  return payload;
}
