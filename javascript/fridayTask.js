// input = [1, 1, 2, 3, 3, 4]
// for (let i = 0; i < input.length; i++) {
//     console.log(input.filter())
// }
const input = [1, 1, 2, 3, 3, 4];

const output = input.filter((element, index, self) => {
    const alreadyExists = self.indexOf(element) !== index;
    return !alreadyExists;
});

console.log(output);