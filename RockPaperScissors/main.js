const getUserChoice = (userInput) => {
   userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
   } else {
      return 'Error! Invalid input.';
   }
};

const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber) {
      case 0:
         return 'rock';
         break;
      case 1:
         return 'paper';
         break;
      case 2:
         return 'scissors';
         break;
   }
};

const determineWinner = (userChoice, computerChoice) => {
   if (userChoice === computerChoice) {
      return 'Game Tied. Shall we play again?'
   }

   if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
         return 'Computer won.';
      };
         return 'Congrats, you win.';
   }

   if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
         return 'Computer won.';
      } else {
         return 'Congrats, you win.';
      }
   }

   if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
         return 'Computer won.';
      } else {
         return 'Congrats, you win.';
      }
   }

   if (userChoice === 'bomb') {
      return 'Congrats, you win.';
   }
};

const playGame = () => {
   const userChoice = getUserChoice('rock');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);

   console.log(determineWinner(userChoice, computerChoice));
};

playGame();