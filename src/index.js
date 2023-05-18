import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const numberOfRounds = 3;

const brainGames = (gameRules, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

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
