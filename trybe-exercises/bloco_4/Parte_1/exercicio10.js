const cost = 12;
const salesPrice = 20;

if (cost < 0 || salesPrice < 0) {
  console.log("Valor informado menor do que zero")
} else {
  const realCost = cost * 1.20;
  const incomePerSale = salesPrice - realCost;
  console.log("O lucro das vendas foi de: " + incomePerSale * 1000);
}
