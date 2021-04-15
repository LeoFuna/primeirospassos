window.onload = function() {
  const brazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const element = document.querySelector('#estado');
  for (let index = 0; index < brazilianStates.length; index += 1) {
    const newelement = document.createElement('option');
    newelement.innerText = brazilianStates[index];
    element.appendChild(newelement);
  }
}

function checkCpf(event) {
  const letterInput = event.charCode;
  console.log(letterInput)
  if (letterInput < 47 || letterInput > 58) {
    event.preventDefault();
    alert("Favor informa somente os números");
  }
}

const cpfElement= document.querySelector('#cpf');
cpfElement.addEventListener('keypress', checkCpf);

