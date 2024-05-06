//* Print out the numbers between 1000 and 2000 that leave a remainder of 3 when divided by 13.

// for (let i = 1000; i < 2000; i++) {
//   if (i % 13 == 3) {
//     console.log(i);
//   }
// }

//*  Print the average of 5 numbers obtained from the user to the console. 

let counter = 0 
let total = 0
while(counter<5){
  let number = +prompt("Please enter a number: ")
  total += number
  counter++
}
console.log(total / counter);