import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'What number is missing in the progression?';

const makeStepsProgression = (firstNum, step) => {
  const collNum = [];
  for (let i = 0; i < 10; i += 1) {
    collNum.push(firstNum + i * step);
  }
  return collNum;
};

const questionAnswer = () => {
  const firstNum = generateRandomNum(0, 15);
  const step = generateRandomNum(1, 5);
  const fullProgression = makeStepsProgression(firstNum, step);
  const hiddenNum = generateRandomNum(0, fullProgression.length - 1);

  const strRightAnswer = fullProgression[hiddenNum];
  const rightAnswer = String(strRightAnswer);

  fullProgression[hiddenNum] = '..';

  const generateRoundQuestion = fullProgression.join(' ');

  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
