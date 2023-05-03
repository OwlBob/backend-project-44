// eslint-disable-next-line import/no-extraneous-dependencies
import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const determinePrimeorNot = (num) => {
  if (num === 1) {
    return null;
  } if (num === 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionAnswer = () => {
  const generateRoundQuestion = generateRandomNum(2, 100);
  const rightAnswer = determinePrimeorNot(generateRoundQuestion);

  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
