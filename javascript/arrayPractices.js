function student(){

    let testScores = [45, 88, 95, 62, 71, 58, 80, 91, 67, 75];

    let passingScores = testScores.filter((score  ) => {
        return score > 70;
})
console.log(passingScores);
}
student();

function number() {
    let grades = [85, 92, 78, 88, 95];

    let increasedGrades = grades.map((grade ) => {
        return grade + 5;
})
    console.log(increasedGrades);
}
number();

function numbers(){
    let squares = [2, 4, 6, 8, 10];

    let findSquares = squares.map((square ) => {
        return square ** 2;
    })
    console.log(findSquares);
}
numbers();


