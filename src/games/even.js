import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const questionAnswer = () => {
  const generateRoundQuestion = generateRandomNum(1, 1000);
  const rightAnswer = isEven(generateRoundQuestion) ? 'yes' : 'no';
  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
