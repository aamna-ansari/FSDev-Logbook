// Task 1

const person = {
  name: "Hitesh",
  age: 19.5,
  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
console.log(person.introduce());

// Task 2: Function within a Function
function outer() {
  function inner() {
    return "I'm Inner Function";
  }
  return inner();
}

console.log(outer());


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  };
};

const person1 = new Person("Hitesh", 19.5);
const person2 = new Person("AaMna", 24);

console.log(person1.introduce()); 
console.log(person2.introduce()); 
