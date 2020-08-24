const reduce = (arr, callback, initialState) => {
    if (typeof (initialState) === 'undefined') {
        initialState = arr[0];
        arr.slice(1);
    }
    for (const item of arr) {
        initialState = callback(initialState, item);
    }
    return initialState;
};
console.log(reduce([1, 2, 3, 4], (init, item) => {
    return init + item;
}, 0));
const myArr = ['Dog', 'Cat'];
myArr.push('Lion');
console.log(myArr);
console.log(myArr.length);
const myObj = {
    0: "One",
    "Mot": 'One'
};
