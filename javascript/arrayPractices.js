function student(){

    let testScores = [45, 88, 95, 62, 71, 58, 80, 91, 67, 75];

    let passingScores = testScores.filter((score ) => {return score > 70;})
    return passingScores;
}



function number() {
    let grades = [85, 92, 78, 88, 95];

    let increasedGrades = grades.map((grade ) => {return grade + 5;})

    return increasedGrades;
}

function numbers(){
    let squares = [2, 4, 6, 8, 10];

    let findSquares = squares.map((square ) => {return square ** 2;})
    return findSquares;
}

function distribute(){
    let members = ["Book A to Emily, Book B to Jack, Book C to Sophia, Book D to Daniel"];
    for (let member of members) {
        let member = members.shift(); // get the next book from the collection
        return member;
    }

}
module.exports = {student,number,numbers,distribute}



