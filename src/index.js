import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import sayHello from './cli.js';

const brainGames = (gameRules, questionAnswer) => {
  const userName = sayHello();
  console.log(gameRules);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const step = questionAnswer();
    const question = car(step);
    const rightAnswer = cdr(step);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your anwer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainGames;
