const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, No: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order['name'] = 'Luiz Silva';
  order.payment.total = '50';
  console.log(`Olá ${order.name}, o total do seu pedido de ${order.order.pizza} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`);
}

orderModifier(order);


 //Exercicio 2

 const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurnoManha = (objeto, chave, valor) => objeto[chave] = valor; // função que atribui nova chave e valor a um objeto


const listKeys = objeto => Object.keys(objeto); // função que retorna as chaves de um obj passado

const objectLength = objeto => console.log(listKeys(objeto).length); // função que imprime o tamanho do objeto à partir das suas keys

const listValues = objeto => Object.values(objeto); // função que lista os valores dentro de um objeto

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const totalEstudantes = objeto => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes; // função retorna total de estudantes em todas as salas

const getValueByNumber = (chave, posicao) => { // função que pega o valor de uma das chaves dentro do objeto allLessons
  const valores = Object.values(allLessons[chave]);
  return valores[posicao];
}

const verifyPair = (objeto, chave, valor) => {
  const chaveValores = Object.entries(objeto);
  let verifier = false;
  for( let index in chaveValores) {
    chaveValores[index][0] === chave && chaveValores[index][1] === valor ? verifier = true : verifier;
  }
  return verifier;
}
console.log(verifyPair(lesson1, 'professor', 'Maria Clara'));
