import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionAnswer = () => {
  const generateRoundQuestion = generateRandomNum(2, 100);
  const rightAnswer = isPrime(generateRoundQuestion);

  return cons(generateRoundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
