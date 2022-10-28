function myFunction(x) {
    return x * 53;
};

console.log(myFunction(6))

function myFunction1(x, y) {
    return x ** y;
};

console.log(myFunction1(5, 5))

function _calNum(x, y) {
    return (x + y);
}

function _calc() {
    let num1 = prompt("first Number");
    let num2 = prompt("Second Number");
    let num3 = prompt("Third Number");
    let num4 = prompt("Fourth Number");
    let num5 = prompt("Fifth Number");
    alert(`${num1} + ${num2} + ${num3} + ${num4} + ${num5} = ${Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)}`);
};
// _calc();

function user(fName, lName, age) {
    return (fName, lName, age);
}

function user() {
    let fName = prompt("Your First Name is");
    let lName = prompt("Your Last Name is");
    let age = prompt("Your Age is");
    alert(`Your First Name is: ${fName}  \nYour Last Name is: ${lName} \nYou Are: ${age} years old`);
};

user();