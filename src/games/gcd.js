import readlineSync from 'readline-sync';
import { getRandomNum, gameLogic } from './index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const game = () => {
  const number1 = getRandomNum(100);
  const number2 = getRandomNum(100);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = String(getGcd(number1, number2));
  return { userAnswer, correctAnswer };
};

export const takeCorrectAnswer = ({ correctAnswer }) => correctAnswer;

export const playGcd = () => { gameLogic(description, game, takeCorrectAnswer); };
