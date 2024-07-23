const {reverseArray, sumEvenNumbers} = require("./ReverseArrays.js");
const Stack = require("./Stack");

test("Test that elements can be added to array item", (number) => {
    let items = new Stack();
    items.pop(number)
    console.assert([23, 12, 8])
})

test("Test that returns elements in reverse order", () => {
    const array = reverseArray([8, 7, 9, 17, 13, 24, 29, 31, 32]);
    expect(array).toEqual([32, 31, 29, 24, 13, 17, 9, 7, 8])
})

test("Test that elements can be added to array item", () => {
    const answer = sumEvenNumbers();
    expect(answer).toEqual([26, 16, 8, 12]);
})