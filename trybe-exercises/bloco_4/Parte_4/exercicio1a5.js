let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda, ' + info.personagem);

info['recorrente'] = 'Sim';
console.log(info);

for (let keys in info) {
  console.log(keys);
}

console.log(' ');

for (let keys in info) {
  console.log(info[keys]);
}

console.log(' ');

let infoComplete = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

console.log (info.personagem + ' e ' + infoComplete.personagem);
console.log (info.origem + ' e ' + infoComplete.origem);
console.log (info.nota + ' e ' + infoComplete.nota);
if (info.recorrente === 'Sim' && infoComplete.recorrente === 'Sim') {
  console.log('Ambos recorrentes');
}else{
  console.log('Não são ambos recorrentes');
}
