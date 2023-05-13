import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'What number is missing in the progression?';

const lengthProgression = 10;

const makeProgression = () => {
  const firstNum = generateRandomNum(0, 15);
  const step = generateRandomNum(1, 5);
  const collNum = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    collNum.push(firstNum + i * step);
  }

  return collNum;
};

const questionAnswer = () => {
  const fullProgression = makeProgression();
  const hiddenNum = generateRandomNum(0, fullProgression.length - 1);

  const rightAnswer = String(fullProgression[hiddenNum]);

  fullProgression[hiddenNum] = '..';
  const generateRoundQuestion = fullProgression.join(' ');

  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
