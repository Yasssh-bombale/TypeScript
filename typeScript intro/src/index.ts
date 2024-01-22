//datatypes;

// let a: string = "{20}";
// let num: number = 201;
// let check: boolean = true;

let a = <string>"yash";
let surname: string | number; //eiher string or number
surname = "200";
surname = 200;
console.log(a);

//we can define return type of ant function;we can explicitly define return type of function

function multiply(n: number, m: number): number {
  console.log(n * m);
  return n * m;
}
// multiply("hey","balh"); can not assignamble string to a number parameter;

// ***********************************************************************************

type userName = (n: number, m: number) => number;

const func: userName = (n, m) => {
  return n * m;
};

// ***********************************************************************************

//array;
const arr: number[] = [10, 20, 40, 50]; //only  numbers are allowed;
const arr2: string[] = ["a", "b", "c", "d"]; // only strings are allowed;

//or;
const arr3: Array<number | string> = [1, 2, 3, 4, 5, "A"];

//fixed size array or tuple;

const fixed: [number, number, number] = [1, 2, 3];

//***************************************************************************

type Obj = {
  height: number;
  width: number;
  gender?: boolean; //gender is now optional
};

const obj: Obj = {
  height: 400,
  width: 400,
  gender: true,
};

//Interface:
interface demo {
  height: number;
  width: number;
  gender?: boolean;
}
type funcType = (n: number, m: number) => void;

interface newDemo extends demo {
  scolor: boolean;
  func: funcType;
}

const demoObj: newDemo = {
  height: 2012,
  width: 2030,
  scolor: true,
  func: (n, m) => {
    console.log(n * m);
  },
};
demoObj.func(10, 10);

// *----------------------------->> functions <<-------------------------------

type functionType = (n: number, m: number, l?: number) => number;

const oneFunc: functionType = (n, m, l) => {
  if (typeof l === "undefined") return n * m;
  return n * m * l;
};
console.log("oneFunc --> ", oneFunc(5, 5, 5));

//* -------------------------->> rest operator << ----------------------------------

//want to accept n numbers in array as paramter

const hero = (...m: number[]): number[] => {
  return m;
};

console.log(hero(10, 20, 30, 40, 50));

// using type;
type heroType = (...m: number[]) => number[];

const newHero: heroType = (...m) => {
  return m;
};

// ************************** functions with objects ******************

interface productObj {
  name: string;
  price: number;
  isAvailable: boolean;
  image: string;
  readonly id: String;
}

type getData = (product: productObj) => void;

const getData: getData = (product) => {
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
  readonly id: string;
  constructor(
    public height: number,
    private weight: number,
    protected power: number
  ) {
    this.id = String(Math.random() * 100);
  }
  getMyweight() {
    return this.weight;
  }
}
class player2 extends player {
  special: boolean;
  constructor(height: number, weight: number, power: number, special: boolean) {
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

const h2 = <HTMLElement>document.querySelector("h1");
h2.onclick;

const myImg = <HTMLImageElement>document.getElementById("myIMG");
myImg.src;

const form = <HTMLFormElement>document.getElementById("myForm");
const input = <HTMLInputElement>document.querySelector("form > input");

form.onsubmit = (e) => {
  e.preventDefault();

  const val = Number(input.value);
  console.log(typeof val);

  const p = document.createElement("p");
  const result = val + 25;

  p.innerHTML = result.toLocaleString();
  form.appendChild(p);
};

// interface personType {
//   name: string;
//   age: number;
//   isEmployed: boolean;
//   gender: boolean;
// }

// const person: personType = {
//   name: "yash",
//   age: 100,
//   isEmployed: true,
//   gender: true,
// };

// const getData = (key: keyof personType) => {
//   return person[key];
// };
