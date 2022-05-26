const angleA = 15;
const angleB = 15;
const angleC = 150;
let totalAngle = angleA + angleB + angleC;

if (angleA < 0 || angleB < 0 || angleC < 0) {
  console.log("ângulo com valor negativo!");
} else if (totalAngle === 180) {
  console.log(true);
} else {
  console.log(false);
}
