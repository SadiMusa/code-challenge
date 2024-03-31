function isValidMark(mark){
    console.log(mark >=0 && mark <= 100);
}


function getGrades(mark)
{
    
    let grade='';
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
  
    console.log(`The student's grade is: ${grade}`);
} else {
    console.log("Null.");
}
