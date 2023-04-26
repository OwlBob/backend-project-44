#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';

const randomNumber = (min = 1, max = 1000) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};

const defineEven = () => {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const num = randomNumber();
    const userAswer = readlineSync.question(`Question: ${num}\nYour answer: `);

    if (num % 2 === 0) {
      if (userAswer === 'yes') {
        console.log('Correct!'); // (>^.^)>
      } else {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        break;
      }
    }

    if (num % 2 !== 0) {
      if (userAswer === 'no') {
        console.log('Correct!'); // (>^.^)>
      } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        break;
      }
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`); // (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
    }
  }
};

defineEven();

export default defineEven;
