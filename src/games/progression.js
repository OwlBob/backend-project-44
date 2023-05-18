import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'What number is missing in the progression?';

const lengthProgression = 10;

const makeProgression = () => {
  const firstNum = generateRandomNum(0, 15);
  const step = generateRandomNum(1, 5);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(firstNum + i * step);
  }

  return progression;
};

const questionAnswer = () => {
  const fullProgression = makeProgression();
  const hiddenNum = generateRandomNum(0, fullProgression.length - 1);

  const rightAnswer = String(fullProgression[hiddenNum]);

  fullProgression[hiddenNum] = '..';
  const roundQuestion = fullProgression.join(' ');

  return cons(roundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
