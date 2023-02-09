import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const getRandomNum = (max) => Math.floor(Math.random() * max) + 1;
const takeCongratulations = (name) => {
  const congratulations = `Congratulations, ${name}!`;
  console.log(congratulations);
};
const rightMessage = () => console.log('Correct!');
const errorMessage = (userAnswer, correctAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

const gameLogic = (description, game, takeCorrectAnswer) => {
  welcome();
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 1; i <= 3; i += 1) {
    const gameObject = game();
    const correctAnswer = takeCorrectAnswer(gameObject);
    const { userAnswer } = gameObject;
    if (userAnswer !== correctAnswer) {
      errorMessage(userAnswer, correctAnswer, userName);
      return;
    }
    rightMessage();
  }
  takeCongratulations(userName);
};

export {
  getRandomNum, gameLogic,
};
