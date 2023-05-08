import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getNod = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return getNod(secondNum, firstNum % secondNum);
};

const questionAnswer = () => {
  const firstNum = generateRandomNum(0, 100);
  const secondNum = generateRandomNum(0, 100);
  const generateRoundQuestion = `${firstNum} ${secondNum}`;

  const strRightAnswer = getNod(firstNum, secondNum);
  const rightAnswer = String(strRightAnswer);

  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
