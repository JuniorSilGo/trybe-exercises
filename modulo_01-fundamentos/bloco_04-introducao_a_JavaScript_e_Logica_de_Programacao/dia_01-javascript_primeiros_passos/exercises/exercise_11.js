let salarioBruto = 3000.0;
let salarioBase = 0;
let inss = 0;
let ir = 0;
let salarioLiquido;

//INSS
if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = salarioBruto + 570.88;
}

salarioBase = salarioBruto - inss;

//IR
if (salarioBase <= 1903.98) {
  ir = salarioBase;
} else if (salarioBruto >= 1903.99 || salarioBruto <= 2826.65) {
  ir = salarioBase * 0.075 - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  ir = salarioBase * 0.15 - 354.8;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  ir = salarioBase * 0.225 - 636.13;
} else {
  ir = salarioBase * 0.275 - 869.36;
}

salarioLiquido = salarioBase - ir;

console.log("Salário Líquido: " + salarioLiquido);
