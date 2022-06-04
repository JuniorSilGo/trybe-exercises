//1°
let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

let fullName = player.name + " " + player.lastName;

//2°
console.log("A jogadora " + fullName + " tem " + player.age + " de idade");

//3°
player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

//4°
let contador = player.bestInTheWorld.length;
console.log(
  "A jogadora " +
    fullName +
    " foi eleita a melhor do mundo por " +
    contador +
    " vezes"
);

//5°
let ouro = player.medals.golden;
let prata = player.medals.silver;

console.log(
  "A jogadora possui " +
    ouro +
    " medalhas de ouro e " +
    prata +
    " medalhas de prata"
);
