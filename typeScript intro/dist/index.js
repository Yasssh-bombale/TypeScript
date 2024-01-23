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
// ***************************** >>  classes  << ******************************************************
class player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    getMyweight() {
        return this.weight;
    }
}
class player2 extends player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
    getProtectedData() {
        return this.power;
    }
}
const player1 = new player(20, 30, 40);
console.log(player1.getMyweight());
console.log(player1.id);
const player3 = new player2(10, 20, 30, true);
console.log(player3.getProtectedData()); //now protected is accessible;
// console.log(player1.weight);Property weight is private and only accessible within class player .
// console.log(player1.power); Property power is protected and only accessible within class player and its subclasses.
// *  [TypeAssertion] DOM --------------------------------------->>
const h1 = document.querySelector("h1");
// h1?.onclick()  typescript automatically add ? after h1?. because typescript says h1 is posibly null to overcome this sutuation below syntax is followed;
const h2 = document.querySelector("h1");
h2.onclick;
const myImg = document.getElementById("myIMG");
myImg.src;
const form = document.getElementById("myForm");
const input = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const val = Number(input.value);
    console.log(typeof val);
    const p = document.createElement("p");
    const result = val + 25;
    p.innerHTML = result.toLocaleString();
    form.appendChild(p);
};
const human = {
    name: "yash",
    age: 100,
};
const human2 = {
    name: "yassshu",
    age: 100,
    email: "hero@gmail.com",
};
const funct = (n, m) => {
    return { n, m };
};
const foo = funct(human, human2);
