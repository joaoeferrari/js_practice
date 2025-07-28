// 1 Reverse a string

let string = 'hello'

console.log('exercise 13');
let reversed = '';
for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
}
console.log(reversed);

// 2 Convert a string to title case (first letter capital of each word)

let title = 'title of the page';

console.log('exercise 16');
let words = title.split(' ');
let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(capitalized.join(' '));