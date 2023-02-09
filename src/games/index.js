import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const getAnswer = () => readlineSync.question('Your answer: ');
const getRandomNum = (max) => Math.floor(Math.random() * max);
const takeCongratulations = (name) => {
  const congratulations = `Congratulations, ${name}!`;
  console.log(congratulations);
};
const rightMessage = () => console.log('Correct!');
const errorMessage = (userAnswer, correctAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

export {
  getName, getRandomNum, getAnswer, welcome, takeCongratulations, rightMessage, errorMessage,
};
