const person = {
    name: 'Shahriar',
    age: 35,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

// const printName = (personData) => {
//     console.log(personData.name);
// }
const printName = ({name}) => {
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name, age);

// person.greet();
// const copiedPerson = {...person};
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
// for (let option of hobbies){
//     console.log(option);
// }

// console.log(hobbies.map(hobby =>{
//     return 'Hobby :' + hobby;
// }));

// console.log(hobbies.map(hobby => 'Hobby :' + hobby));

// hobbies.push('Programming');

// console.log(hobbies);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) =>{
//     return args;
// }

// console.log(toArray(1, 2, 3, 4));