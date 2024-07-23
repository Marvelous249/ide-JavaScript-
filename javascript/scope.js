// const name = "Esther";
//
// function speak(params){
//     let language = "English"
//     console.log(`Hello ${name} in ${language}`)
//     function eat(){
//         let food = "rice";
//         console.log(food);
//     }
// }

let row = 3
let column = 3

let twoDimensionalArray = Array(row).fill(null).map(()=> new Array(column).fill(0));
console.log(twoDimensionalArray)