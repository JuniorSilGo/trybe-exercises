let numeros = [2, 4, 6, 7, 10, 0, -3];

function maiorIndice(array) {
  let maior = 0;
  for (let numero in array) {
    if (maior < array[numero]) {
      maior = numero;
    }
  }
  return maior;
}

console.log(maiorIndice(numeros));

