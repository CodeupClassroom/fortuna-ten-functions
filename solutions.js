



function isTrue(input) {
    return typeof input == "boolean";
}
isTrue();

function isFalse(x) {
    return x === 0;
}
isFalse();

function not(input){
    return input !== true;
}
not(0);

function addOne(inputNumber) {
    return inputNumber++;
}
addOne();

function isEven(singleInput){
    return singleInput % 2 == 0;
}
isEven();

function isIdentical(input, input2) {
    return input === input2;
}
isIdentical();

function isEqual(inputOne, inputTwo){
    return inputOne == inputTwo;
}
isEqual(3, "3");

function or(input, input2){
    return input || input2;
}
or();

function and(input, input2) {
    return input && input2;
}
and();

function concat(input1, input2){
    return input1 + input2;
}
concat();

/*
 * Write your solutions here.
 *
 * /



 */
 /*
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
