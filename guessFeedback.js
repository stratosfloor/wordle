export function guessFeedback(guess, answer) {
  const localAnswer = new Array(...new Set(answer));
  console.log(localAnswer);
  const NUMBER_OF_LETTERS = 5;
  const result = [];

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
    result.push(obj);
  }

  for (let j = 0; j < NUMBER_OF_LETTERS; j++) {
    if (result[j].result === "" && localAnswer.includes(guess[j])) {
      result[j].result = "misplaced";
    } else if (result[j].result === "" && !localAnswer.includes(guess[j])) {
      result[j].result = "incorrect";
    }
  }
  console.log(localAnswer);
  console.log(result);
  return result;
}

guessFeedback("HALLÅ", "CYKLA");
guessFeedback("AAAAA", "BBAAB");
