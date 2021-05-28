import React from 'react';

class DadosPessoais extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      endereco: ''
    }
    this.blockSpecialCaracter = this.blockSpecialCaracter.bind(this)
  }

  blockSpecialCaracter({ target }) {
    if (target.value[target.value.length - 1] === 'e') {
      this.setState = {
        endereco: target.value.slice(0, target.value.length - 1)
      }
    } else {
      this.setState = {
        endereco: target.value
      }
    }
  }
  
  render() {
    return (
      <fieldset className='dadosPessoais'>
        <label>
          <input type='text' name="name" maxLength="40" placeholder="Nome" required style={{textTransform: 'uppercase'}} />
        </label>
        <label>
          <input type='email' name="email" maxLength="50" placeholder="Email" required />
        </label>
        <label>
          <input type='text' name="cpf" maxLength="11" placeholder="CPF" required />
        </label>
        <label>
          <input type='text' name="endereco" maxLength="200" value={ this.state.endereco } placeholder="Endereço" onChange={ this.blockSpecialCaracter } required />
        </label>
        <label>
          <input type='text' name="cidade" maxLength="28" placeholder="Cidade" onBlur={() => console.log('Deve remover numeros caso começe')} required />
        </label>
        <select name="estado" required>
          <option>ES</option>
          <option>SC</option>
        </select>
        <label>
          <label for='moradia-casa'>Casa</label>
          <input type='radio' name='moradia' id='moradia-casa' value='casa' required/>
          <label for='moradia-apartamento'>Apartamento</label>
          <input type='radio' name='moradia' id='moradia-apartamento' value='apartamento' required />
        </label>
      </fieldset>
    )
  }
}

export default DadosPessoais;