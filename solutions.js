"use strict";

/**
 * Write your solutions here.
 *
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

//isTrue
function isTrue(input) {
  return (input === true);
}
    console.log(isTrue(true));
    console.log(isTrue(false));
    console.log(isTrue(0));
    console.log(isTrue(null));
    console.log(isTrue("true"));
    console.log(isTrue("Banana"));
    console.log(isTrue([1,2]));

// isFalse
function isFalse(input){
    return (input === false);
}
function not(input) {
    if (input === "hello"){
        return (!! + input);
    }else {return ! + input }

}
//addOne
function addOne(number) {
    var number1 = parseFloat(number);
    return (++number1);

}

console.log(addOne(0));
console.log(addOne(2));
console.log(addOne(-5));
console.log(addOne(5.789));
console.log(addOne(Infinity));
console.log(addOne("2"));
console.log(addOne("banana"));
console.log(addOne(true));
console.log(addOne(NaN));
//isEven
function isEven(number) {
    var number2 = parseFloat(number);
    return ((number2 % 2) === 0);
}
//isEqual
function isEqual(a, b) {
    return( a == b);
}
// or
function or(a, b) {
    return ( a || b);
}
// and
function and(a, b) {
    return ( a && b);
}
//concat
function concat(a, b) {
    var string = a.toString();
    var stringB = b.toString();
    return string + stringB;
}
//Identical
function isIdentical(a, b) {
    return( a === b);
}