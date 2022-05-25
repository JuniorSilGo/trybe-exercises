let chessPiece = "BisPo";

chessPiece = chessPiece.toLowerCase();

switch (chessPiece) {
  case "rei":
    console.log("Movimentos do rei: move-se uma casa por vez em qualquer direção.");
    break;
  case "rainha":
    console.log("Movimentos da rainha: move-se quantas casas quiser na horizontal, vertical ou diagonais desde que estejam livres.");
    break;
  case "torre":
    console.log("Movimentos da torre: move-se quantas casas quiser na horizontal ou na vertical desde que estejam livres.");
    break;
  case "bispo":
    console.log("Movimentos do bispo: move-se quantas casas quiser na diagonal desde que estejam livres.");
    break;
  case "cavalo":
    console.log("Movimentos do cavalo: move-se duas casas na horizontal ou vertical e depois uma para o lado, formando um 'L', o cavalo pode saltar sobre outras peças.");
    break;
  case "peão":
    console.log("Movimentos do peão: move-se para frente, uma casa por vez, exceto na primeira vez, podendo mover-se duas casas. O peão captura na diagonal uma casa por vez e não pode retroceder");
    break;
  default:
    console.log('Peça inválida!');
}
