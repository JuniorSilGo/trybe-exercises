let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function maiorRepetido(numeros) {
  let repetido = 0;
  let contador = 0;
  let posicaoRepetido = 0;

  for (let numero in numeros) {
    let verifica = numeros[numero];
    for (let numero2 in numeros) {
      if (verifica === numeros[numero2]) {
        contador += 1;
      }
    }
    if (contador > repetido) {
      repetido = contador;
      posicaoRepetido = numero;
    }
    contador = 0;
  }
  return numeros[posicaoRepetido];
}
console.log(maiorRepetido(arrayTeste));
