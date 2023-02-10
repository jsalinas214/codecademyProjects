let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false; 
const age = 25;

if (registeredEarly === true && age > 18) {
   raceNumber += 1000;
}

if (registeredEarly === true && age > 18) {
   console.log(`${raceNumber} your race will begin at 9:30 am.`);
} else if (registeredEarly === false && age > 18) {
   console.log(`${raceNumber} your race will begin at 11:00 am.`);
} else if (age < 18) {
   console.log(`${raceNumber} your race will begin at 12:30 pm.`);
} else {
   console.log(`runners attend the registration desk`);
}