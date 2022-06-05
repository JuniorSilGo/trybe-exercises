let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes) {
  let maior = 0;
  let maiorNome = '';
  for (let nome in nomes) {
    if (nomes[nome].length > maior) {
      maior = nomes[nome].length;
      maiorNome = nomes[nome];
    }
  }
  return maiorNome;
}

console.log(maiorNome(arrayTeste));