import { getName, getRandomNum, getAnswer, takeCongratulations, rightMessage, errorMessage } from './index.js';

const evenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const playEven = () => {
  const userName = getName();
  console.log(evenQuestion);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum(100);
    console.log('Question: ', number);
    const userAnswer = getAnswer();
    const checkEven = isEven(number) && (userAnswer === 'yes');
    const checkNotEven = !isEven(number) && (userAnswer === 'no');
    if (checkEven === true || checkNotEven === true) {
      rightMessage();
    } else {
      const correctAnswer = (isEven(number) ? 'yes' : 'no');
      errorMessage(userAnswer, correctAnswer, userName);
      return;
    }
  }
  takeCongratulations(userName);
};

export default playEven;
