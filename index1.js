function courseWork(){
  let sum = 0;
  let num = 0;
  this.addScore = function(score){
  if (score < 0) {score = 0;}
    if (score > 100) {score = 100;}
    sum += score;
    num++;
  }
  this.getAverage = function(){
    return (sum/num);
  } 
}



if (marks >= 0 && marks <= 100) {
    
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
