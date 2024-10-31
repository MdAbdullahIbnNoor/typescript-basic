"use strict";
// Function
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 4);
// Arrow function
const addNumber = (num1, num2) => num1 + num2;
// Object --> function --> Method
const poorUser = {
    name: "Abdullah",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    },
};
// array mapping
const arr = [1, 4, 25];
const newArray = arr.map((elem) => elem * elem);
