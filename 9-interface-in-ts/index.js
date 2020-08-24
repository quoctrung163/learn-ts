function getPerson(person) {
    return `name: ${person.name}, age: ${person.age}`;
}
console.log(getPerson({
    name: `quoctrung`,
    age: 20
}));
;
function getPersonTwo(person) {
    return `name: ${person.name}, age: ${person.age}`;
}
const result = getPersonTwo({
    name: 'quoctrung163',
    age: 20
});
console.log(result);
