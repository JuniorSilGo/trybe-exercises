const costPrice = 150;
const salePrice = 185;

if (costPrice < 0 && salePrice < 0) {
  console.log("Erro: os valores não podem ser negativos");
} else {
  let totalCost = costPrice * 1.2;
  let profit = (salePrice - totalCost) * 1000;
  console.log('lucro: ' + profit);
}
