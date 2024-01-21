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
console.log("blah");
