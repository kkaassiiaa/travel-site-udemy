//const Person = require('./modules/Person'); // stary sposób
import Person from './modules/Person'; // nowy sposób ES6
const $ = require('jquery');

console.log(Person);
let john = new Person("Jodn Doe", 'blue');
john.greet();

let jane = new Person('Jane Smith', 'black');
jane.greet();

$('h1').remove();