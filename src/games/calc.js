import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'What is the result of the expression?';

const operationsSigns = ['+', '-', '*'];

const generateExpression = (firstOperand, randomSigns, secondOperand) => {
  let result;

  switch (randomSigns) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
  }

  return result;
};

const questionAnswer = () => {
  const firstOperand = generateRandomNum(1, 5);
  const secondOperand = generateRandomNum(1, 5);
  const randomSigns = operationsSigns[generateRandomNum(0, operationsSigns.length - 1)];
  const generateRoundQuestion = `${firstOperand} ${randomSigns} ${secondOperand}`;
  const rightAnswer = String(generateExpression(firstOperand, randomSigns, secondOperand));

  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
