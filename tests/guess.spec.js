import { expect, test } from "@jest/globals";
import { guessFeedback } from "../guessFeedback";


test('Simple test with guess "HALLÅ" and answer "CYKLA"', () => {
  expect(guessFeedback('HALLÅ','CYKLA')).toStrictEqual(
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