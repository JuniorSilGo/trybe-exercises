let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1){
    counter += 1; 
  }
}

if (counter !== 0) {
  console.log('Total de número ímpares: ' + counter);
} else {
  console.log('nenhum valor ímpar encontrado');
}