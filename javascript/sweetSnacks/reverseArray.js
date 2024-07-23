function reverseArray() {

    let arrayNumbers = []

    let elements = [8, 7, 9, 17, 13, 24, 29, 31, 32];

    for (let count = 0; count < elements.length; count++) {
        arrayNumbers.unshift(elements[count])
    }
    return arrayNumbers;
}
reverseArray()


function sumEvenNumbers() {
    let newArray = []
    let numbers = [26, 35, 16, 8, 12, 5, 19, 17]

    for (let count = 0; count < numbers.length; count++) {
        if (numbers[count] % 2 === 0) {
            newArray.push(numbers[count]);
        }
    }
    return newArray;
}
sumEvenNumbers()

module.exports = {reverseArray, sumEvenNumbers};