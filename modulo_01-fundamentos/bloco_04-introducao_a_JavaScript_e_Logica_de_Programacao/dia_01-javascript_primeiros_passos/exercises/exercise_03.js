const valueA = 19;
const valueB = 31;
const valueC = 27;
let highestValue = 0;

if ( valueA > valueB && valueA > valueC){
  highestValue = valueA;
} else if (valueB > valueC) {
  highestValue = valueB;
} else {
  highestValue = valueC;
}


console.log(highestValue);