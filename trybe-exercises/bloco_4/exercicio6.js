const peca = "RainHa"
const ajustePeca = peca.toLowerCase();

switch (ajustePeca) {
  case "peao": 
  console.log("Frente 1 casa");
    break;
  case "torre":
    console.log("Horizontal e Vertical");
    break;
  case "bispo":
    console.log("Diagonal");
    break;
  case "cavalo":
    console.log("Em L");
    break;
  case "rainha":
    console.log("Todas as direções");
    break;
  case "rei":
    console.log("Todas as direções 1 casa");
    break;
  default:
    console.log("Peça informada inválida");
}