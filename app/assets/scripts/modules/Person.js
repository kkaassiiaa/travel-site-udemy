/* ------------- Pierwszy sposób za pomocą starego zapisu klasy ------------- */

// function Person(fullName, favColor)  {
//   this.name = fullName;
//   this.favoriteColor = favColor;
//   this.greet = function() {}
//     console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favoriteColor}.`);
//   }

// module.exports = Person;

/* ------------------------------ Drugi sposób ------------------------------ */

class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and my favorite color is ${this.favoriteColor}.`);
  }
}

module.exports = Person;