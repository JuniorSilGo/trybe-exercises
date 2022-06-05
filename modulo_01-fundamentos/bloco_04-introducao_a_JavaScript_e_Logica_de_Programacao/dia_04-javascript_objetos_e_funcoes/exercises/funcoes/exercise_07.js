function verificaFinal(palavra, final){
  let palavraInvertida = palavra.split('').reverse().join('');
  let finalInvertido = final.split('').reverse().join('');
  let resultado;

  for (let index = 0; index < finalInvertido.length; index += 1) {
    if (palavraInvertida[index] !== finalInvertido[index]){
      resultado = false;
      break;
    } else {
      resultado = true;
    }
  }
  return resultado;
}

console.log(verificaFinal('trybe', 'be'));