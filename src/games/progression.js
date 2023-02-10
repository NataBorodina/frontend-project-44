import readlineSync from 'readline-sync';
import { getRandomNum, gameLogic } from './index.js';

const description = 'What number is missing in the progression?';

const takeArray = (start, step) => {
  const arr = [start];
  for (let i = 1; arr.length <= 9; i += 1) {
    const item = arr[i - 1] + step;
    arr.push(item);
  }
  return arr;
};

const takeGameArray = (arr, spaseIndex) => {
  const gameArray = arr;
  gameArray[spaseIndex] = '..';
  return gameArray.join(' ');
};

const game = () => {
  const start = getRandomNum(100);
  const step = getRandomNum(100);
  const array = takeArray(start, step);
  const spaseIndex = Math.floor(Math.random() * 9) + 1;
  const correctAnswer = String(array[spaseIndex]);
  const gameArray = takeGameArray(array, spaseIndex);
  console.log(`Question: ${gameArray}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { userAnswer, correctAnswer };
};

export const takeCorrectAnswer = ({ correctAnswer }) => correctAnswer;

export const playProgression = () => { gameLogic(description, game, takeCorrectAnswer); };
