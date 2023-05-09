const myAge = 29; // age in human years

let earlyYears = 2; // early years are equivalent to more years than later years
earlyYears *= 10.5; // convert early dog years to human years

let laterYears = myAge - 2; // early years have already been accounted for
laterYears *= 4; // convert later dog years to human years

console.log(
    `Early Years: ${earlyYears}` + '\n' +
    `Later Years: ${laterYears}` + '\n'
);

const myAgeInDogYears = earlyYears + laterYears; // sum of early and later years to find total age in dog years
const myName = 'Pat'//.toLowerCase(); // returns name in all lowercase

console.log(
    `My name is ${myName}.` + '\n' +
    `I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`
); // logs age conversion to console, populated by variable values