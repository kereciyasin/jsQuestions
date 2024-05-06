//* The code that writes whether the entered number is a prime number or not.

const number = +prompt("Please enter a positive number: ");

let primeNumber = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    primeNumber = false;
    break;
  }
}

if (primeNumber && number >= 1) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}
