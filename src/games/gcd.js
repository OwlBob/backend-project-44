import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

const questionAnswer = () => {
  const firstNum = generateRandomNum(0, 100);
  const secondNum = generateRandomNum(0, 100);
  const roundQuestion = `${firstNum} ${secondNum}`;

  const strRightAnswer = gcd(firstNum, secondNum);
  const rightAnswer = String(strRightAnswer);

  return cons(roundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
