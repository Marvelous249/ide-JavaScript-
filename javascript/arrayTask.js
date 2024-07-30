function solve(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const sumTwoNumber = arr[1] * arr[0];
        result.push([arr[i], sumTwoNumber]);
    }
    return result;
}

const input = []