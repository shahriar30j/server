// var name = 'Shahriar';
// var age = 35;
// var hasHobbies = true;

// function summarizeUser(userName, userAge, userHasHobby) {
//     return (
//         'Name is ' + userName + ' , age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
//     );
// }

// console.log(summarizeUser(name, age, hasHobbies));

let name = 'Shahriar';
let age = 35;
let hasHobbies = true;

age = 36;

// const summarizeUser = function (userName, userAge, userHasHobby) {
//     return (
//         'Name is ' + userName + ' , age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
//     );
// }
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ' , age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
};

// const add = (a, b) =>{
//     return a+b;
// };
const add = (a, b) => a+b;
const addOne = a => a+1;
const addRandom = () => 1 + 2;

console.log(add(1, 2));
console.log(addOne(5));
console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
