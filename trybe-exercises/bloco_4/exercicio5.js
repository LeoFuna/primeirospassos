const angle1 = 50;
const angle2 = 60;
const angle3 = 30;

const sum = angle1 + angle2 + angle3;

if (angle1 <= 0|| angle2 <= 0 || angle3 <= 0 || typeof(sum) != "number") {
  console.log("ERRO! Angulo informado inválido");
}
else {
  switch (sum) {
    case (180):
      console.log(true);
      break;
    
    default:
      console.log(false);
  }
}