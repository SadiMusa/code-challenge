function calculateNetSalary(BasicSalary, benefits){
  let grossSalary = basicSalary + benefits;
  let payee;
  if (grossSalary <= 24000){
    payee = grossSalary*0.1;
  }else if (grossSalary <= 40000){
    payee = 2400+ (grossSalary-24000)*0.15
  }else {
    payee= 2400 + 1600 + (grossSalary-40000)*0.2
  }


  let nhifDeduction;
  if (grossSalary<=20000){
    nhifDeduction = 150;
  }else {
    nhifDeduction = 300;
  }
  

  let nssfDeduction = 200;

  let netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;


  console.log(netSalary);


}