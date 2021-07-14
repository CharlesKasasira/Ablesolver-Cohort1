/**
 * Example of destructuring
 */
 const person = {
    'firstname' : 'David',
    'lastname' : 'Kasasira',
    'middlename' : 'Derrick',
    'Town' : 'Namuwongo'
}
// Destructured variables
const {firstname, lastname} = person 

console.log(firstname)

//None destructured variables
console.log(person.firstname);

let a = 4;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);