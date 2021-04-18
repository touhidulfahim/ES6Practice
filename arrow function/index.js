function sayHello() {
    console.log("Hello Worlds!")
}
sayHello();

//
let simplyCallArrowFunction = () => {
    console.log("Hi this is arrow function!")
}
simplyCallArrowFunction();


//Arrow with multiple perameter
let printPersonInfo = (name, age) => {
    console.log("Touhidul Fahim", 31)
}
printPersonInfo();

//Arrow with multiple perameter
printPersonInfo = name => console.log("Touhidul Fahim");
printPersonInfo();

//math in arrow function
let calculateMath = number => number * number;
console.log(calculateMath(12));