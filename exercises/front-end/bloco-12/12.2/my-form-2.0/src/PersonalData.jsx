import React from 'react';

class PersonalData extends React.Component {
  render() {
    return (
      <fieldset>
        <label>Nome: 
          <input type='text' name='Nome' value={this.props.state.Nome } onChange={ this.props.handleChange } />
        </label>
        <label>Email: 
          <input type="text" name='Email' value={ this.props.state.Email } onChange={ this.props.handleChange } />
        </label>
        <label>CPF: 
          <input type="text" name='CPF' value={ this.props.state.CPF } onChange={ this.props.handleChange } />
        </label>
        <label>Endereço: 
          <input type="text" name='Endereço' value={ this.props.state.Endereço } onChange={ this.props.handleChange } />
        </label>
        <label>Estado: 
          <input type="text" name='Estado' value={ this.props.state.Estado } onChange={ this.props.handleChange } />
        </label>
      </fieldset>
    );
  }
}

export default PersonalData;
