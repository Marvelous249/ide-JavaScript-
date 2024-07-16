function sumEvenNumbers(arr) {
    return arr.reduce((acc, current) => {
        if (current % 2 === 0) {
            return acc + current;
        } else {
            return acc;
        }
    }, 0);
}

module.exports = {sumEvenNumbers}
