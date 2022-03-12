import { expect, test } from "@jest/globals";
import { guess } from "../guess";

/*
Test all outcomes of guesses and answers

  - No guess
  - Correct guess
  - All letters is guess is wrong
  - One letter wrong
  - Same letter more than once in guess
  - Same letter more than once in answer
  - Same letter more than once in both guess and answer

*/

test('Guess is empty, should retur null', () => {
  expect(guess('','CYKLA')).toBeNull()
})

test('Correct guess', () => {
  expect(guess('HALLÅ','HALLÅ')).toStrictEqual(
    [
      {
        letter: 'H',
        result: 'correct',
      },
      {
        letter: 'A',
        result: 'correct',
      },
      {
        letter: 'L',
        result: 'correct',
      },
      {
        letter: 'L',
        result: 'correct',
      },
      {
        letter: 'Å',
        result: 'correct',
      }
    ]
  )
})


test('Test with one letter wrong', () => {
  expect(guess('AAAAA','AAAAB')).toStrictEqual(
    [
      {
        letter: 'A',
        result: 'correct',
      },
      {
        letter: 'A',
        result: 'correct',
      },
      {
        letter: 'A',
        result: 'correct',
      },
      {
        letter: 'A',
        result: 'correct',
      },
      {
        letter: 'A',
        result: 'incorrect',
      }
    ]
  )
})

test('Test with two of the same letters in guess and one is correct"', () => {
  expect(guess('HALLÅ','CYKLA')).toStrictEqual(
    [
      {
        letter: 'H',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'misplaced',
      },
      {
        letter: 'L',
        result: 'incorrect',
      },
      {
        letter: 'L',
        result: 'correct',
      },
      {
        letter: 'Å',
        result: 'incorrect',
      }
    ]
  )
})

test('Only wrong letters', () => {
  expect(guess('AAAAA','BBBBB')).toStrictEqual(
    [
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'incorrect',
      }
    ]
  )
})

test('Guess is all same letter and answer contains four of that letter', () => {
  expect(guess('AAAAA','BBABB')).toStrictEqual(
    [
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'correct',
      },
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'incorrect',
      }
    ]
  )
})


test('Test with many of the same letters i both guess and answer', () => {
  expect(guess('AABAA','BBABB')).toStrictEqual(
    [
      {
        letter: 'A',
        result: 'misplaced',
      },
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'B',
        result: 'misplaced',
      },
      {
        letter: 'A',
        result: 'incorrect',
      },
      {
        letter: 'A',
        result: 'incorrect',
      }
    ]
  )
})