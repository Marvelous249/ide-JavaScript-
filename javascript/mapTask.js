const studentGrade = [95, 78, 85, 60, 45, 92]

let result = studentGrade.map((grade)=> {

    if (studentGrade >=90 && studentGrade <= 100){
        grade = "A";
    }
    else if (studentGrade >= 80 && studentGrade <= 89){
        grade = "B";
    }
    else if (studentGrade >= 70 && studentGrade <= 79){
        grade = "C";
    }
    else if (studentGrade >= 60 && studentGrade <= 69){
        grade = "D";
    }
    else if (studentGrade < 60)
        grade = "F";

    return grade

})

console.log(result)