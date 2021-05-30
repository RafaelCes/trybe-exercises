import React from 'react';
import PersonalData from './PersonalData';
class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      Nome: '',
      Email: '',
      CPF: '',
      Endereço: '',
      Cidade: '',
      Estado: '',
      Tipo: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value,
    });
  }

  render() {
    return(
      <form>
        <PersonalData state={ this.state} handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default Form;