import readlineSync from 'readline-sync';

const takeName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default takeName;
