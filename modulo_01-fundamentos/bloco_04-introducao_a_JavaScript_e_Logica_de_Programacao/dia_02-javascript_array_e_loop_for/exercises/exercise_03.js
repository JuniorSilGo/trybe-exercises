let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let sum = 0;

// for/of
// for (let number of numbers) {
//   sum += number;
// }
//   media = sum / numbers.length;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
media = sum / numbers.length;

console.log(media);