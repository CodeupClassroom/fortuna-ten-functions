"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iife is, don't worry about it :)
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

function isTrue(input) {
    return input === true;
}

function isFalse(val) {
    return val === false;
}

function not(input) {
    return !input;
}

function addOne(input) {
    return (Number(input) + 1);
}

function isEven(input) {
    if (typeof input === 'boolean' || input === undefined) {
        return false;
    } else {
        return Number(input) % 2 === 0;
    }
}

function isIdentical(arg1, arg2) {
    return arg1 === arg2;
}

function isEqual(arg1, arg2) {
    return arg1 == arg2;
}

function or(arg1, arg2) {
    return (arg1 || arg2);
}

function and(arg1, arg2) {
    return (arg1 && arg2);
}

function concat(arg1, arg2) {
    return (String(arg1) + String(arg2));
}