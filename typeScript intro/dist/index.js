"use strict";
//datatypes;
// let a: string = "{20}";
// let num: number = 201;
// let check: boolean = true;
let a = "yash";
let surname; //eiher string or number
surname = "200";
surname = 200;
console.log(a);
//we can define return type of ant function;we can explicitly define return type of function
function multiply(n, m) {
    console.log(n * m);
    return n * m;
}
const func = (n, m) => {
    return n * m;
};
// ***********************************************************************************
//array;
const arr = [10, 20, 40, 50]; //only  numbers are allowed;
const arr2 = ["a", "b", "c", "d"]; // only strings are allowed;
//or;
const arr3 = [1, 2, 3, 4, 5, "A"];
//fixed size array or tuple;
const fixed = [1, 2, 3];
const obj = {
    height: 400,
    width: 400,
    gender: true,
};
const demoObj = {
    height: 2012,
    width: 2030,
    scolor: true,
    func: (n, m) => {
        console.log(n * m);
    },
};
demoObj.func(10, 10);
console.log("blah");
