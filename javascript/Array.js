function sum(array) {
    const result = [];
    for (let i = 0; i < array.length; i +=2) {
        const SumTwoElementTogether = array[i] * (array[i + 1]);
        result.push(SumTwoElementTogether);
    }
    return result;
}

const input = [2, 1, 3, 5, 10, 6]
const output = sum(input);
console.log(output);


