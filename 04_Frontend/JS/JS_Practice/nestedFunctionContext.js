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
