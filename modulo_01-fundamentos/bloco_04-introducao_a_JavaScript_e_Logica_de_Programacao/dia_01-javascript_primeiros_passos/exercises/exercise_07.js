const grade = 77;

if (grade < 0 || grade > 100) {
  console.log("Erro: Nota inválida!");
} else if (grade >= 90) {
  console.log("Conceito A");
} else if (grade >= 80) {
  console.log("Conceito B");
} else if (grade >= 70) {
  console.log("Conceito C");
} else if (grade >= 60) {
  console.log("Conceito D");
} else if (grade >= 50) {
  console.log("Conceito E");
} else {
  console.log('Conceito F');
}
