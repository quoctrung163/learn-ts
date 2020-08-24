// function types
interface Arr {
  (numberArr: number[], callbackFunc: any, initialState: any): number;
}

const reduce: Arr = (arr, callback, initialState) => {
  if (typeof (initialState) === 'undefined') {
    initialState = arr[0];
    arr.slice(1);
  }

  for (const item of arr) {
    initialState = callback(initialState, item);
  }

  return initialState;
}

console.log(reduce([1, 2, 3, 4], (init, item) => {
  return init + item
}, 0));

// array types
// ex1
interface StringArray {
  [index: number]: string;
  length: number;
  push: any;
}

const myArr: StringArray = ['Dog', 'Cat'];
myArr.push('Lion');
console.log(myArr);
console.log(myArr.length);

//ex2
interface StringArray2 {
  [index: string]: string;
  // do index: string -> ko co length
}

const myObj: StringArray2 = {
  0: "One",
  "Mot": 'One'
}