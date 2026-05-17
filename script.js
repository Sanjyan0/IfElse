let firstNum = 5;
let secondNum = 10;

let firstMessage;
let secondMessage;

if (firstNum % 2 === 0) {
    firstMessage = "The number " + firstNum + " is even.";
} else {
    firstMessage = "The number " + firstNum + " is odd.";
}

if (secondNum % 2 === 0) {
    secondMessage = "The number " + secondNum + " is even.";
} else {
    secondMessage = "The number " + secondNum + " is odd.";
}

console.log(firstMessage);
console.log(secondMessage);