let userName = 'James';

userName ? console.log(`Hello ${userName}`) : console.log(`Hello`);

const userQuestion = `Will i get a job by the end of the year?`;

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
   case 0:
      eightBall = `defintely not.`;
      break;
   case 1:
      eightBall = `It is certain.`;
      break;
   case 2:
      eightBall = `It is decidedly so.`;
      break;
   case 3:
      eightBall = `Reply hazy try again.`;
      break;
   case 4:
      eightBall = `Cannot predict now.`;
      break;
   case 5:
      eightBall = `Do not count on it.`;
      break; 
   case 6:
      eightBall = `My sources say no.`;
      break;
   case 7:
      eightBall = `Signs point to yes.`;
      break;
}

console.log(`The Magic 8ball says ${eightBall}`);


/*
if (randomNumber === 0) {
  eightBall = `defintely not.`;
} else if (randomNumber === 1) {
  eightBall = `It is certain.`;
} else if (randomNumber === 2) {
  eightBall = `It is decidedly so.`;
} else if (randomNumber === 3) {
  eightBall = `Reply hazy try again.`;
} else if (randomNumber === 4) {
  eightBall = `Cannot predict now.`;
} else if (randomNumber === 5) {
  eightBall = `Do not count on it.`;
} else if (randomNumber === 6) {
  eightBall = `My sources say no.`;
} else {
  eightBall = `Signs point to yes.`;
}
 */