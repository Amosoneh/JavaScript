'use strict';

const sum = (a, b) => a + b;

const something = 'anything';

const user = {
    name: "Amos",
    age: 32,
    'ia married': false,
    [something]: 'Pizza',
    shoot(param) {
        console.log('I can shoot', param);
    },
    talk() {
        console.log('I can talk', this.name);
    }
};

user.age = 30
const newUser = user //referencing to an object address in memory by two objects
newUser.name = "Khaled"
const anotherUser = Object.assign({}, user) //shallow copying of object to another
anotherUser.name = 'Amos'
// console.log(anotherUser);
// console.log(newUser)
console.log(newUser.talk())
console.log(user.shoot("Boyo"))

// for (let key in user) {
//    console.log(`${key}: ${user[key]}`);
// }

function operation(a, b, func) {
    return func(a, b);
}

console.log(operation(2,3, sum));
const delay = ms => new Promise(res => setTimeout(res, ms));

console.log(this);