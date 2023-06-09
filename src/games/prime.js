import { cons } from '@hexlet/pairs';
import generateRandomNum from '../tools.js';
import brainGames from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const questionAnswer = () => {
  const roundQuestion = generateRandomNum(2, 100);
  const rightAnswer = isPrime(roundQuestion) ? 'yes' : 'no';

  return cons(roundQuestion, rightAnswer);
};

export default () => brainGames(gameRules, questionAnswer);
