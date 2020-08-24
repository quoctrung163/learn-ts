function sayHi(hi) {
    console.log("say" + hi);
}
function sayGoodBye(bye) {
    console.log("say " + bye);
}
/// <reference path="./sayHi.ts" />
/// <reference path="./sayGoodBye.ts" />
sayHi('hi');
sayGoodBye("goodbye");
