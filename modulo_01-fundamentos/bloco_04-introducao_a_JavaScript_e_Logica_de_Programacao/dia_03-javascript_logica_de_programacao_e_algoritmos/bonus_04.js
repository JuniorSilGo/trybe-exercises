let n = 5;
let simbolo = '*'
let linha = '';
let matriz = (n + 1) / 2;
let esquerda = matriz;
let direita = matriz;

for (let indexlinha = 0; indexlinha <= matriz; indexlinha += 1) {
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna > esquerda && indexColuna < direita) {
      linha = linha + simbolo;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1;
}