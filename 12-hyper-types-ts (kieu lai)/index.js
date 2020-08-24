var hybrid;
hybrid = function (str) {
    if (str === 'demo') {
        return 1;
    }
    return 0;
};
hybrid.numb = 555;
hybrid.add = function () {
    hybrid.numb += 5;
    console.log(hybrid.name);
};
console.log(hybrid("demo"));
console.log(hybrid.numb);
hybrid.add;
