// 'use strict';

// const sum = (a, b) => a + b;

// const something = 'anything';

// const user = {
//     name: "Amos",
//     age: 32,
//     'ia married': false,
//     [something]: 'Pizza',
//     shoot(param) {
//         console.log('I can shoot', param);
//     },
//     talk() {
//         console.log('I can talk', this.name);
//     }
// };

// user.age = 30
// const newUser = user //referencing to an object address in memory by two objects
// newUser.name = "Khaled"
// const anotherUser = Object.assign({}, user) //shallow copying of object to another
// anotherUser.name = 'Amos'
// console.log(anotherUser);
// console.log(newUser)
// console.log(newUser.talk())
// console.log(user.shoot("Boyo"))

// for (let key in user) {
//    console.log(`${key}: ${user[key]}`);
// }

// function operation(a, b, func) {
//     return func(a, b);
// }

// console.log(operation(2,3, sum));
// const delay = ms => new Promise(res => setTimeout(res, ms));

// console.log(this);

// const obj = {
//   name: 'Amos',
//   namedFunction() {
//     console.log(this.name);

    // let that = this;
    // function insideName() {
    //   console.log(that);
    // }

//     const insideName = () => {
//       console.log(this);
//     }
//     insideName();
//   },
// };
// obj.namedFunction();

// const anotherObj = {
//   name: 'Monday',
// };

// anotherObj.namedFunction = obj.namedFunction

// anotherObj.namedFunction();






// const person = {
//   firstName: 'Amos',
//   lastName: 'Oneh',
//   gender: 'M',
//   age: 32,


  
//   fullName() {
//     const getTitle = () => {
//       return this.gender === 'M' ? 'Mr. ' : 'Mrs. ';
//     }
//     return `${getTitle()} ${this.lastName} ${this.firstName}`;
//   },
//   isMinor() {
//     return this.age < 18;
//   },
// };
// console.log(person.fullName());




// const arr = [1, 2, 3, 4, 5, 66, 7]

// arr.forEach((elem, index) => {
//   console.log(elem, index);
// });

// const a = arr.find((item) => item > 5)
// // console.log(a);
// const b = arr.filter((item) => item > 5)
// // console.log(b);

// const mappedArr = arr.map((item, index) => ({
//   [index]: item * 2
// }));
// const mappedArrd =arr.filter((item) => item % 2 === 0).map((item, index) => ({
//   [index]: item * 2
// }));

// // const reducedArr = arr.reduce((acc, item) => )

// console.log(mappedArr);
// console.log(mappedArrd);


const arr = [1, 23, 15, 45, -6, -8];
// console.log(arr);
// arr.splice(0, 2) // splice is use to delete item from an array at a position and can also replace items in the array
arr.splice(1, 2, 3, 4, 6)
// console.log(arr);

const sum = arr.reduce((acc, item) => acc + item)
const product = arr.reduce((acc, item) => acc * item, 0)

const sum1 = arr.reduce((acc, item) => {
  item > 0 ? acc.positives.push(item) : acc.negatives.push(item);
  return acc;
}, { positives: [], negatives: [] })

const mappedReduced = arr.reduce((acc, item) => {
  acc.push(item * item)
  return acc;
}, [])
// console.log(mappedReduced);

// console.log(sum1);
// console.log(sum);
// console.log(product);

const unflat = arr.map((item, index) => [item, index])
// console.log(unflat);
// console.log(unflat.flat());

// const unflatt = arr.flatMap((item, index) => [item, index])
// console.log(unflatt);
// console.log(Array.from("love"));// use to create an array

// const map = new Map();

// map.set(1, 'One')
// console.log(map.get(1));

const mainImage = document.querySelector(".main-image");
const images = document.querySelectorAll('.image-thumbnails > img')

images.forEach((img) => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;
  });
});
