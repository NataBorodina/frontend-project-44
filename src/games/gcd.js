import { getName, getRandomNum, getAnswer, takeCongratulations, rightMessage, errorMessage } from './index.js';

const gsdQuestion = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const playCalc = () => {
  const userName = getName();
  console.log(gsdQuestion);
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNum(100);
    const number2 = getRandomNum(100);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = getAnswer();
    const correctAnswer = getGcd(number1, number2);
    if (+(userAnswer) !== correctAnswer) {
      errorMessage(userAnswer, correctAnswer, userName);
      return;
    }
    rightMessage();
  }
  takeCongratulations(userName);
};

export default playCalc;
