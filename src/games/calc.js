import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'What is the result of the expression?';

const operationsSigns = ['+', '-', '*'];

const questionAnswer = () => {
  const firstOperand = generateRandomNum(1, 5);
  const secondOperand = generateRandomNum(1, 5);
  const randomSigns = operationsSigns[generateRandomNum(0, operationsSigns.length - 1)];
  const generateRoundQuestion = `${firstOperand} ${randomSigns} ${secondOperand}`;

  let strRightAnswer;
  if (randomSigns === '+') {
    strRightAnswer = firstOperand + secondOperand;
  } else if (randomSigns === '-') {
    strRightAnswer = firstOperand - secondOperand;
  } else {
    strRightAnswer = firstOperand * secondOperand;
  }
  const rightAnswer = String(strRightAnswer);

  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
