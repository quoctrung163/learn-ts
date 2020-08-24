function getPerson(person: { name: string, age: number }): string {
  return `name: ${person.name}, age: ${person.age}`;
}

console.log(getPerson({
  name: `quoctrung`,
  age: 20
}));

interface personTwo {
  name: string,
  age: number
};

function getPersonTwo(person: personTwo): string {
  return `name: ${person.name}, age: ${person.age}`;
}

const result = getPersonTwo({
  name: 'quoctrung163',
  age: 20
})
console.log(result);