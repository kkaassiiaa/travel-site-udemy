const Person = require('./modules/Person');
const $ = require('jquery');

console.log(Person);
let john = new Person("Jodn Doe", 'blue');
john.greet();

let jane = new Person('Jane Smith', 'green');
jane.greet();

$('h1').remove();