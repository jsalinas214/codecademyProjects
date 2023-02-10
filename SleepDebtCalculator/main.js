const getSleepHours = day => {
switch(day) {
   case 'monday':
      return 8
      break;
   case 'tuesday':
      return 8
      break;
   case 'wednesday':
      return 8
      break;
   case 'thursday':
      return 8
      break;
   case 'friday':
      return 8
      break;
   case 'saturday':
      return 8
      break;
   case 'sunday':
      return 8
      break;
   default: 
      return 'not a valid day.'
   }
};

const getActualSleepHours = () => {
   return getSleepHours('monday')
   + getSleepHours('tuesday')
   + getSleepHours('wednesday')
   + getSleepHours('thursday')
   + getSleepHours('friday')
   + getSleepHours('saturday')
   + getSleepHours('sunday')
};

const getIdealSleepHours = () => {
   const idealHours = 7.5;
   return idealHours * 7;
};

const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
   const idealSleepHours = getIdealSleepHours();

   if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
   } else if (actualSleepHours > idealSleepHours) {
      console.log("You got " + (actualSleepHours - idealSleepHours) + "more hours of sleep this week.");
   } else if (actualSleepHours < idealSleepHours) {
      console.log("You should get some rest because you've slept" + (idealSleepHours - actualSleepHours) + ".");
   } else {
      console.log('Error! Check your code!');
   }
};

calculateSleepDebt();