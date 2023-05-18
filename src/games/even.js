import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const questionAnswer = () => {
  const roundQuestion = generateRandomNum(1, 1000);
  const rightAnswer = isEven(roundQuestion) ? 'yes' : 'no';
  return cons(roundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
