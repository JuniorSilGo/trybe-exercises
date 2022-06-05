// exercício 1

function operacoes(a, b) {
  console.log('soma:' + (a + b));
  console.log('subtração:' + (a - b));
  console.log('multiplicação:' + (a * b));
  console.log('divisão:' + (a / b));
  console.log('Módulo:' + (a % b));
}
operacoes(17, 3);

// exercício 2

function maiorNumero(a, b) {
  if (a > b) {
    console.log(a + ' maior que ' + b);
  } else if ( b > a) {
    console.log(b + ' maior que ' + a);
  } else {
    console.log('Os números são iguais');
  }
}
maiorNumero(7, 17);

// exercício 3

function maiorDosTres(a, b, c) {
  if (a > b && a > c) {
    console.log(a + ' é o maior número!');
  } else if (b > c) {
    console.log(b + ' é o maior número!');
  } else {
    console.log(c + ' é o maior número!');
  }
}
maiorDosTres(8, 6, 2);
maiorDosTres(7, 11, 5);
maiorDosTres(5, 3, 9);

// exercício 4

function positivoNegativo(valor) {
  if (valor > 0) {
    console.log('Positive');
  } else if (valor < 0) {
    console.log('Negative');
  } else {
    console.log('Zero');
  }
}
positivoNegativo(0);
positivoNegativo(-17);
positivoNegativo(9);

// exercício 5

function existenciaTriangulo(a, b, c) {
  if (a < 0 || b < 0 || c < 0 ) {
    console.log('Ângulo inválido');
  } else if (a + b + c === 180) {
    console.log('True');
  } else {
    console.log('False');
  }
}
existenciaTriangulo(60, 60, 60);
existenciaTriangulo(90, 90, 32);
existenciaTriangulo(-7, 120, 60);