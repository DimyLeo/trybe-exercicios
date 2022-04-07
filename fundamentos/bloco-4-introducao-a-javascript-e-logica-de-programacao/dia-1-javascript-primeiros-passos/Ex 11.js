let aliquotINSS;
let aliquotIR;

let salarioBruto = 5000.00;

if (salarioBruto <= 1556.94) {
    aliquotINSS = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.94) {
    aliquotINSS = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82) {
    aliquotINSS = salarioBruto * 0.11;
}
else {
    aliquotINSS = 570.88
}

let = baseSalario = salarioBruto - aliquotINSS;

if (baseSalario <= 1903.98) {
    aliquotIR = 0
}
else if (baseSalario <= 2826.65) {
    aliquotIR = (baseSalario * 0.075) - 142.80;
}
else if (baseSalario <= 3751.05) {
    aliquotIR = (baseSalario * 0.15) - 354.80
}
else if (baseSalario <= 4664.68) {
    aliquotIR = (baseSalario * 0.225) - 636.13
}
else {
    aliquotIR = (baseSalario * 0.275) - 869.36
}

console.log("Salario Bruto de: " + (baseSalario - aliquotIR))