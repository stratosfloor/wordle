//  Inputs: Guess & Answer
//  Check letters
//    - Loop through strings
//    - If condition for correct, misplaced, incorrect. 
//    - 
//  Output: [
//    {"A": "incorrect"},
//    {"B": "correct"},
//    {"C": "misplaced"}
//   ]


export function guessFeedback(guess, answer) {
  const NUMBER_OF_LETTERS = 5;
  const result = [];

  for (let i = 0; i < NUMBER_OF_LETTERS; i++) {
    // console.log(guess[i] + ' : ' + answer[i])
    const obj = {};
    let value = "";
    
    if (guess[i] === answer[i]) {
      value = 'correct';
    }
    else if (answer.includes(guess[i])) {
      value = 'misplaced';
    }
    else {
      value = 'incorrect';
    }

    // for (let j = 0; j < NUMBER_OF_LETTERS; j++) {
    //   if (guess[i] === answer[j] && value === 'misplaced') {
    //     value = 'incorrect';
    //     console.log(guess[i] + ' : ' + answer[j])

    //   }
    // }


    obj.letter = guess[i];
    obj.result = value;
    result.push(obj);
  }

  console.log(result);
  return result;
}

guessFeedback('HALLÅ', 'CYKLA');
