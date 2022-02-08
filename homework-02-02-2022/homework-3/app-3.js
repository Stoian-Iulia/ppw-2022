const digit1 = Number(prompt("Input first digit"));
const digit2 = Number(prompt("Input second digit"));
const digit3 = Number(prompt("Input third digit"));

let res1 = Math.max(digit1, digit2, digit3);
let res2 = Math.min(digit1, digit2, digit3);

alert(`The largest number: ${res1}`);
alert(`The smallest number: ${res2}`);