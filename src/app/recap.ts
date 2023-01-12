const username: string = 'snake';
const sum = (a: number, b: number) => {
  return a + b;
};

sum(10, 20);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const nico = new Person(24, 'Serrano');
