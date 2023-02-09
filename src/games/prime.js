import readlineSync from 'readline-sync';
import { getRandomNum, gameLogic } from './index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const game = () => {
  const number = getRandomNum(100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = (isPrime(number) ? 'yes' : 'no');
  return { userAnswer, correctAnswer };
};

export const takeCorrectAnswer = ({ correctAnswer }) => correctAnswer;

export const playPrime = () => { gameLogic(description, game, takeCorrectAnswer); };
