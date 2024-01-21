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
const oneFunc = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
console.log("oneFunc --> ", oneFunc(5, 5, 5));
//* -------------------------->> rest operator << ----------------------------------
//want to accept n numbers in array as paramter
const hero = (...m) => {
    return m;
};
console.log(hero(10, 20, 30, 40, 50));
const newHero = (...m) => {
    return m;
};
const getData = (product) => {
    product.name = "odohfoh";
    // product.id="jhihuogg"   //can not able to access because it is read only
    console.log(product);
};
const newObj = {
    name: "yash",
    image: "idhihu",
    isAvailable: true,
    price: 2939,
    id: "ihsihgiuh",
};
getData(newObj);
//
// type themeMode = "dark" | "light";
// const mode: themeMode = "dark";
// if (mode === "dark" || mode === "light") {
// }
