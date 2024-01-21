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
