let maior = 0;
let primos = [];
let teste = [];

for (let numero = 0; numero <= 50; numero += 1) {
  let primo = true;
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    maior = numero;
    primos.push(numero);
  }
}

console.log("O maior número primo é: " + maior);
console.log("");
console.log(primos);
