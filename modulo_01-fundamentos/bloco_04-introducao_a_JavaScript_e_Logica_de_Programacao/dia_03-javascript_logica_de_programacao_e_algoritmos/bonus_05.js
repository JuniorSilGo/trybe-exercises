let n = 7;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;
let simbolo = '*';

for (let linha= 1; linha <= meio; linha += 1) {
  let saida = '';
  for (let coluna = 1; coluna <= n; coluna += 1) {
    if (coluna == esquerda || coluna == direita || linha == meio) {
    saida += simbolo;
    } else {
      saida += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(saida);
}