import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAnswer = () => {
  const generateRoundQuestion = generateRandomNum(1, 1000);
  let rightAnswer;
  if (generateRoundQuestion % 2 === 0) {
    rightAnswer = 'yes';
  }
  if (generateRoundQuestion % 2 !== 0) {
    rightAnswer = 'no';
  }
  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
