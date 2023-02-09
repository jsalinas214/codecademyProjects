// my age as a number
let myAge = 25;

// early years subtracting 2.
let earlyYears = 2;
earlyYears *= 10.5;

// later years variable
let laterYears = myAge - 2;
//using the multiplication assignent operator.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// variable myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

// creating a variable myName and using the .toLowerCase() method.
let myName = 'James'.toLowerCase();

// using string interrpolation to create a statement.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)