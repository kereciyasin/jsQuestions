const text = "HelloWord!";
const arr = text.split("");
arr.reverse();
const reversedText = arr.join("");

console.log(reversedText); //* yawsuralC

//* with chaining in a single line
console.log(text.split("").reverse().join(""));
