
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

// 13 Reverse a string

let string = 'hello'

console.log('exercise 13');
let reversed = '';
for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
}
console.log(reversed);
