import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const getRandomNum = (max) => Math.floor(Math.random() * max);

const isEven = (number) => number % 2 === 0;

const playEven = () => {
  const userName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum(100);
    console.log('Question: ', number);
    const userAnswer = readlineSync.question('Your answer: ');
    const checkEven = isEven(number) && (userAnswer === 'yes');
    const checkNotEven = !isEven(number) && (userAnswer === 'no');
    if (checkEven === true || checkNotEven === true) {
      console.log('Correct!');
    } else {
      const correctAnswer = (isEven(number) ? 'yes' : 'no');
      const errorMesage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. /n Let's try again, ${userName}!`;
      console.log(errorMesage);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { playEven, welcome };
