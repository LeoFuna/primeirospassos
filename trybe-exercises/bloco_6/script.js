window.onload = function() {
  const brazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const element = document.querySelector('#estado');
  for (let index = 0; index < brazilianStates.length; index += 1) {
    const newelement = document.createElement('option');
    newelement.innerText = brazilianStates[index];
    element.appendChild(newelement);
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
  
  function isValidDate(dateString)
  {
      // First check for the pattern
      if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString) === false) {
        return false;
      }
  
      // Parse the date parts to integers
      var parts = dateString.split("/");
      var day = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10);
      var year = parseInt(parts[2], 10);
  
      // Check the ranges of days, month and year
      if(year < 0 || month < 1 || month > 12 || day < 0 || day > 31) {
        return false;
      }
  }
  
  //Usa ReGex para verificar se o email está dentro do padrão de email
  function validateEmail(email) {
   if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())) {
      return true;
    }
      return false;
  }
  
  //Verifica se o tamanho do CPF é 11 caracteres
  function validateCpf(cpf) {
    if (cpf.length !== 11) {
      return false;
    }
      return true;
  }
  
  
  //Função que faz o submit e teste das validações dos campos
  function submitForm(event) {
    const email = document.querySelector('#email').value;
    const cpf = document.querySelector('#cpf').value;
    const date = document.querySelector('#data-inicio').value;
    if (validateEmail(email) === false) {
      event.preventDefault();
      alert('Favor informar Email válido');
    } else if (!validateCpf(cpf)) {
      event.preventDefault();
      alert('Favor informar CPF válido');
    } else if (isValidDate(date) === false) {
      event.preventDefault();
      alert('Favor informar data válida');
    } else {
      return true;
    }
  }

  function createCurriculum(event) {
    if (submitForm(event) === true) {
      const element = document.createElement('div');
      element.id = 'gerate-curriculum';
      const form = document.querySelector('body');
      form.appendChild(element);
      let infoCurriculum = new FormData(document.querySelector('#main-form'));
      for (let index of infoCurriculum.entries()) {
        const newP = document.createElement('p');
        newP.innerText = index[0] + ': ' + index[1];
        document.querySelector('#gerate-curriculum').appendChild(newP);
      }
    }
  }
  
  document.querySelector('#cpf').addEventListener('click', createCurriculum);
  document.querySelector('#submit-btn').addEventListener('click', createCurriculum);
}


