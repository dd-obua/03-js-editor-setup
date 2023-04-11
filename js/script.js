'use strict';

const currentYear = new Date().getFullYear();

const calcAge = birthYear => currentYear - birthYear;

const age = calcAge(1993);
console.log(age);
