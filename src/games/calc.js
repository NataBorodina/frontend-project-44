import readlineSync from 'readline-sync';
import { getRandomNum, gameLogic } from './index.js';

const description = 'What is the result of the expression?';

export const game = () => {
  const number1 = getRandomNum(100);
  const number2 = getRandomNum(100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${number1} ${operator} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-eval
  const correctAnswer = String(eval(`${number1} ${operator} ${number2}`));
  return { userAnswer, correctAnswer };
};

export const takeCorrectAnswer = ({ correctAnswer }) => correctAnswer;

export const playCalc = () => { gameLogic(description, game, takeCorrectAnswer); };
