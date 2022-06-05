let numeros = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(array) {
  let menor = array.length;
  for (let numero in array) {
    if (menor > array[numero]) {
      menor = numero;
    }
  }
  return menor;
}

console.log(menorIndice(numeros));