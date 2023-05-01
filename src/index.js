// архитектура запуска игр
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-extraneous-dependencies
import { car, cdr } from '@hexlet/pairs';
import sayHello from './cli.js';

const brainGames = (gameRules, questionAnswer) => {
  const userName = sayHello(); // всегда игра начинается с приветсвия и с вопроса об имени игрока
  console.log(gameRules);
  const numberOfRounds = 3; // всегда во всех играх три раунда
  for (let i = 1; i <= numberOfRounds; i += 1) {
    // формирования первой итерации с вопросом и формирования ответа
    const step = questionAnswer();
    const question = car(step);
    const rightAnswer = cdr(step);
    const userAnswer = readlineSync.question(`Question: ${question}\n Your anwer: `);
    const strRightAnswer = String(rightAnswer);
    let roundResult; // сравнение полученного ответа юзера с правильным ответом
    if (userAnswer === strRightAnswer) {
      roundResult = 'Correct!';
      console.log(roundResult);
    }
    if (userAnswer !== strRightAnswer) {
      roundResult = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;
      console.log(roundResult);
      break;
    }

    if (i === numberOfRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainGames;
