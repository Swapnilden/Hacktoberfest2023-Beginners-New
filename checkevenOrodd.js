function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let num = 7; // Change this to test with different numbers
let result = checkEvenOrOdd(num);
console.log(`${num} is ${result}.`);
