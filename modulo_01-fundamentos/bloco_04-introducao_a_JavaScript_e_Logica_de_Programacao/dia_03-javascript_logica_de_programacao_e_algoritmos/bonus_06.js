let numero = 15;
let primo = true;

for (let divisor = 2; divisor < numero; divisor += 1) {
  
  if(numero % divisor === 0) {
    primo = false;
  }
}

if(primo){
  console.log(numero + ' é primo');
} else {
  console.log(numero + ' não é primo');
}
