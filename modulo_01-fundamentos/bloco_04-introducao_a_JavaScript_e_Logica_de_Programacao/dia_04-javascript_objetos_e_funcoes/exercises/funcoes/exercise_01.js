let palavra1 = 'arara';
let palavra2 = 'desenvolvimento';

function verificaPalindrome(word) {
  let array = word.split('');
  let inverted = array.reverse().join('');
  if (inverted === word) {
    return true;
  } else {
    return false;
  }

}

let resultado = verificaPalindrome(palavra1);

console.log(resultado);

resultado = verificaPalindrome(palavra2);

console.log(resultado);