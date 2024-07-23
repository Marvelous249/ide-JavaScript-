const {student,number,numbers, distribute} = require('./arrayPractices')

test('student function', () => {
    const result = student();
    expect(result).toEqual([88, 95, 71, 80, 91, 75]);
});

test('number function', () => {
    const result = number();
    expect(result).toEqual([90, 97, 83, 93, 100]);
});

test('numbers function', () => {
    const result = numbers();
    expect(result).toEqual([ 4, 16, 36, 64, 100 ]);
});

test('distribute function', () => {
    const result = distribute();
    expect(result).toEqual(["Book A to Emily, Book B to Jack, Book C to Sophia, Book D to Daniel"]);
});