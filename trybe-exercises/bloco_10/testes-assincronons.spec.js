const { uppercase, getUserName, getRepos, getAnimal } = require('./testes-assincronos');

describe('Testa retorno da função Uppercase', () => {
  it('Deve ser uma string totalmente maiúscula', done => { //Atenção ao done()
    uppercase('Olá, como vai você?', (value) => {
      expect(value).toBe('OLÁ, COMO VAI VOCÊ?'); // o Expect vai dentro do callback da função!!
      done(); // Atenção ao done()
    })
  });
});

//Exercicio 2
describe('Testa retorno da função getUserName', () => {
  it('Retorno deve ser Mark', () => {
    return getUserName(4).then((objectName) => {
      expect(objectName).toBe('Mark');
    });
  });
  it('Retorno de um id nao existente deve ser Erro', () => {
    return getUserName(7).catch((objectName) => {
      expect(objectName.error).toBe('User with 7 not found.');
    })
  })
});

//Exercicio 3 (fazer o 2 com async e await)
describe('Testa retorno da função getUserName com async/await', () => {
  it('Retorno deve ser Mark', async () => {
    const objectName = await getUserName(4);
    expect(objectName).toBe('Mark');
  });
  it('Retorno de um id nao existente deve ser Erro', async () => {
    try {
      await getUserName(7);
    } 
    catch(error) {
      expect(error.error).toBe('User with 7 not found.');
    }
  });
});

//Exercicio 4
describe('Testa a função getRepos', () => {
  it('Deve retornar o repositorio do todoList', async () => {
    const repoNames = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repoNames).toContain('sd-01-week4-5-project-todo-list');
    expect(repoNames).toContain('sd-01-week4-5-project-meme-generator');
  });
});

//Exercicio 6

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => {
        expect(error).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});