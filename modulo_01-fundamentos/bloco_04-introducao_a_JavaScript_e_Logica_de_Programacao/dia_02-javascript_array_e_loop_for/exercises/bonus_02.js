let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < numbers.length - i; j += 1) {
    if (numbers[j] < numbers[j + 1]) {
      let aux = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = aux;
    }
  }
}
console.log(numbers);