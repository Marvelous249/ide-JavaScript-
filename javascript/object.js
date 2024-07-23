// let animal ={
//     name:"unknown",
//     color:"green",
//     sound: function (){
//         return (`${this.name} made a sound`)
//     }
// }
// let cat = Object.create(animal);
// cat.name = "pussy cat";
// cat.color = "black";
// console.log(cat);
// //console.log(cat.sound());
//
// let blackCat = Object.create(cat);
// blackCat.color = "red";
// console.log(blackCat);
//
// let dog = [];
// Object.setPrototypeOf(dog, animal);
// dog.name = "Bulldog";
// console.log(dog);
//
// let fruit = {
//     name: "",
//     colour: "",
// };
//
// let lion = {
//     _proto_: fruit,
//     _proto_: animal,
// };
//      console.log(lion)
//
//     function person(name, age){
//         this.name = name;
//         this.age = age;
//
//         this.describe = function (){
//             console.log(`My name is ${this.name} and i am ${this.age} year`);
//         }
// }
// const marvelous = new person("oladimeji", 16);
// person.prototype.species = "Human";
// console.log(marvelous.species);
// marvelous.describe();

class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    };
    getName(){
        return (this.name);
    };
}
const goat = new Animal("goat", "black");
console.log(goat.getName())