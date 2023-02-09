import { getName, getRandomNum, getAnswer, takeCongratulations, rightMessage, errorMessage } from './index.js';

const calcQuestion = 'What is the result of the expression?';

const playCalc = () => {
  const userName = getName();
  console.log(calcQuestion);
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNum(100);
    const number2 = getRandomNum(100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const userAnswer = getAnswer();
    const correctAnswer = eval(`${number1} ${operator} ${number2}`);
    if (+(userAnswer) !== correctAnswer) {
      errorMessage(userAnswer, correctAnswer, userName);
      return;
    }
    rightMessage();
  }
  takeCongratulations(userName);
};

export default playCalc;
