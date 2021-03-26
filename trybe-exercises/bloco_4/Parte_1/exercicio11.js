const salaryGross = 3000;
let salaryINSS = 0;
let salary = 0;
if (salaryGross <= 1556.94) {
  const salaryINSS = salaryGross * 0.92;
} 
else if (salaryGross > 1556.94 && salaryGross <= 2594.92) {
  salaryINSS = salaryGross * 0.91;
}
else if ( salaryGross > 2594.92 && salaryGross <= 5189.82 ) {
  salaryINSS = salaryGross * 0.89;
} 
else {
  salaryINSS = salaryGross - 570.88;
}

if (salaryINSS <= 1903.98) {
  salary = salaryINSS;
} 
else if (salaryINSS > 1903.98 && salaryINSS <= 2826.65) {
  salary = salaryINSS - ((salaryINSS * 0.075) - 142.80);
}
else if ( salaryINSS > 2826.65 && salaryINSS <= 3751.05 ) {
  salary = salaryINSS - ((salaryINSS * 0.15) - 354.80);
} 
else if ( salaryINSS > 3751.05 && salaryINSS <= 4664.68 ) {
  salary = salaryINSS - ((salaryINSS * 0.225) - 636.13);
} 
else {
  salary = salaryINSS - ((salaryINSS * 0.275) - 869.36);
}

console.log("O salário líquido é: " + salary)