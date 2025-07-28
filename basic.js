// 1 Declare a variable to store your name and print it
console.log('exercise 1');
let name = 'joao'
console.log(`${name} \n`);

// 2 Create two number variables and print their sum, difference, product, and quotient

let a = 10
let b = 20

console.log('exercise 2');
console.log(`sum: ${a+b}`)
console.log(`sub: ${a-b}`)
console.log(`mul: ${a*b}`)
console.log(`div: ${a/b} \n`)

// 3 Swap the values of two variables without using a third variable

let c = 1
let d = 2

c = c + d
d = c - d
c = c - d;

console.log('exercise 3');
console.log(`c: ${c}`)
console.log(`d: ${d} \n`)

// 4 Check the type of different variables (string, number, boolean, null, undefined)

let e = 5
let f = 'joao'
let g = true

console.log('exercise 4');
console.log(`e: ${typeof e}`)
console.log(`f: ${typeof f}`)  
console.log(`g: ${typeof g} \n`)

// 5 Check if a number is even or odd

let h = 10

if (h % 2 === 0) {
    console.log('exercise 5');
    console.log(`${h} is even \n`);
} else {
    console.log('exercise 5');
    console.log(`${h} is odd \n`);
}

// 6 Determine if a person is eligible to vote (age >= 18)

let age = 16

if ( age >= 18 ) {
    console.log('exercise 6');
    console.log('You can vote! \n');
} else {
    console.log('exercise 6');
    console.log('You cannot vote! \n');
}

// 7 Write a program to check if a number is positive, negative, or zero

let number = 11

if (number < 0) {
    console.log('exercise 7');
    console.log(`${number} is negative \n`);
} else if (number > 0) {
    console.log('exercise 7');
    console.log(`${number} is positive \n`);
} else {
    console.log('exercise 7');
    console.log(`${number} is zero \n`);
}

// 8 Create a program that returns the largest of three numbers
function max(a, b, c) {
    let list = [a, b, c];
    let maxItem = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] > maxItem) {
            maxItem = list[i];
        }
    }
    return maxItem;
}

console.log('exercise 8');
console.log(`max: ${max(1,2,3)} \n`);

// 9 Print numbers from 1 to 10 using a for loop
console.log('exercise 9');
for (let i = 1; i<=10; i++) {
    console.log(i);
}
console.log('');

// 10 Print the multiplication table of any number
let table = 7

console.log('exercise 10');
console.log(`Multiplication table of ${table}:`);
for ( let i = 1; i <= 10; i ++){
    console.log(`${table} x ${i} = ${table * i}`)
}
console.log('');

// 11 Calculate the sum of the first n natural numbers

let firsts = 4
let sum = 0

for (let i = 1; i <= firsts; i++) {
    sum += i; 
}

console.log('exercise 11');
console.log(`Sum of the first ${firsts} numbers: ${sum} \n`);

// 12 Print all even numbers from 1 to 100

console.log('exercise 12');

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

// 13 Count the number of vowels in a string

let vowels = ['a', 'e', 'i', 'o', 'u']
let word = 'test'

console.log('exercise 14');
for (let i in word) {
    if (vowels.includes(word[i])) {
        console.log(`The letter ${word[i]} is a vowel`);
    } else {
        console.log(`The letter ${word[i]} is not a vowel`);
    }
}

// 14 Check if a string is a palindrome

let palindrome = 'racecar';

let check1 = [];
let check2 = [];

for (let i in palindrome) {
    check1.push(palindrome[i]); // ordem original
    check2.unshift(palindrome[i]); // ordem invertida
}

// console.log(check1);
// console.log(check2);

console.log('exercise 15');
if (check1.join('') === check2.join('')) { // convert to string
    console.log(`${palindrome} is a palindrome \n`);
} else {
    console.log(`${palindrome} is not a palindrome \n`);
}

// 15 Find the largest number in an array

let largest = [6,12,3,4,5,6,7,8,9,10];
let larg_num = largest[0];

for (let i=1; i < largest.length; i++) {
    if (largest[i] > larg_num) {
        larg_num = largest[i];
    }
} 

console.log('exercise 16');
console.log(`Largest number: ${larg_num} \n`);

// 16 Reverse an array without using .reverse()

let array = [1,2,3,4,5];
let arrayReversed = [];

for (let i in array){
    arrayReversed.unshift(array[i]);
}

console.log('exercise 17');
console.log(`Reversed array: ${arrayReversed} \n`);

// 17 Remove duplicates from an array

let arrayDup = [1,2,3,4,5,1,2,3];
let uniqueArray = [];

for (let i in arrayDup) {
    if (!uniqueArray.includes(arrayDup[i])) {
        uniqueArray.push(arrayDup[i]);
    }
}

console.log('exercise 18');
console.log(`Unique array: ${uniqueArray} \n`);

// 18 Sort an array in ascending and descending order

let arraySort = [5,3,8,1,2];

let ascendindArray = [...arraySort].sort((a, b) => a - b); //spread operator to avoid modifying the original array
let descendingArray = [...arraySort].sort((a, b) => b - a); 
console.log('exercise 19');
console.log(`Ascending order: ${ascendindArray} \n`);
console.log(`Descending order: ${descendingArray} \n`);

// 19 Write a function to calculate the factorial of a number

function fac(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * fac(number - 1);
    }
} 

let numberFac = 5;
console.log('exercise 20');
console.log(`Factorial of ${numberFac}: ${fac(numberFac)} \n`);


function convertTemp(temp){
    let c_toF = (temp * 9/5) + 32;
    return c_toF;
}

console.log('exercise 21');
console.log(`Celsius to F°: ${convertTemp(30)}`)

// 20 Write a function that checks if a number is prime