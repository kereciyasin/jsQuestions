//* The code that writes whether the entered number is a prime number or not.

const number = +prompt("Please enter a positive number: ");

let primeNumber = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    primeNumber = false;
    break;
  }
  primeNumber ? "Prime number" : " Not prime number";
}
