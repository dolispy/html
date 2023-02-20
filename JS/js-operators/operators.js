// Arithmetic Operators +, -, *, /, %, 
let a = 100;
let b = 45;
let sum = a + b;


//let sumElement = document.getElementById('sum');
//sumElement.innerText = sum;
console.log(sum);

let difference = a - b;
//let differenceElement = document.getElementById('difference');
//differenceElement.innerText = difference;
console.log(difference);

let multiplication = a * b;
//let multiplicationElement = document.getElementById('multiplication');
//multiplicationElement.innerText = multiplication;
console.log(multiplication);


let division = a / b;
//let divisionElement = document.getElementById('division');
//divisionElement.innerText = division;
console.log(division);

//Modulo - Remainders
let c = 50;
let remainder = a % c;
console.log('Remainder of a divided by b equals ' + remainder
);

// Exponentional - raise to the power of  **
let exponentResult = c ** 3;
console.log(exponentResult);
 
// Increment (++) & Decrement (--)
let initialValue = 43;
initialValue++;
console.log(initialValue);

initialValue --;
console.log(initialValue);

let numberOfCars = 66;
console.log('number of cars is ' + ++numberOfCars );


let numberOfOranges = 99;
console.log('I now have ' + numberOfOranges++  + ' oranges');

//Assignment Operators
//let x = x + 1;
//let y = y - 1;

//let z = z + 6;
//let w = w - 6; 
//let p = p * 6;
//let q = p / 6;




//Comparison Operators (<, >, >=, <=, !=, !==, ==, ===)
let d = -34;
console.log(d > 10);

let cash = 2000;
let expenses = '2000';

//console.log(cash == expenses);
//console.log(cash === expenses);

console.log(true == 0);

let myAge = 37;

//if age is greater than or equals to 18, print 'Eligible to Vote'
//if age is less than 18, print 'Not Eligible to Vote'


//(condition) ? true : false are ternary operators
(myAge >= 18) ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote');

//Logical Operators
let nationality = 'Nigerian';

(myAge >= 18 && nationality === 'Nigerian') ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote');


let WAEC = 'PASS';
let NECO = 'PASS';

(WAEC === 'PASS' || NECO === 'PASS') ? console.log('Admitted') : console.log('Not Admitted');



//Bitwise Operators



//OPERATOR PRECEDENCE
//BODMAS

//PEMDAS -> Parenthesis, Exponent, Multiplication, Division, Addition, Subtraction
const result = (26 - 2) + 6 / 2
console.log(result);