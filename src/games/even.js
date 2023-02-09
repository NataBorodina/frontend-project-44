import readlineSync from 'readline-sync';
import { getRandomNum, gameLogic } from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const game = () => {
  const number = getRandomNum(100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = (isEven(number) ? 'yes' : 'no');
  return { userAnswer, correctAnswer };
};

export const takeCorrectAnswer = ({ correctAnswer }) => correctAnswer;

export const playEven = () => { gameLogic(description, game, takeCorrectAnswer); };
