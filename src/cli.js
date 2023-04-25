import readlineSync from 'readline-sync';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  let userName;
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default sayHello;
