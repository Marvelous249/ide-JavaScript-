function sumPairs(array) {
    const result = [];
    for (let i = 0; i < array.length -1; i += 2) {
        const SumTwoElementTogether = array[i] + (array[i + 1]);
        result.push(SumTwoElementTogether);
    }
    return result;
}

const input = [2, 5, 4, 1, 2, 3];
const output = sumPairs(input);
console.log(output);

function sumTwoElement(array){
    const answer = [];
    for (let i = 0; i < array.length -1; i += 2) {
        const SumElementTogether = array[i] + (array[i + 1]);
        answer.push(SumElementTogether);
    }
    return answer;
}
const in_put = [1, 5, 3, 2, 3, 3];
const out_put = sumTwoElement(in_put);
console.log(out_put);

