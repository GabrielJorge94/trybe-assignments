import React from 'react';

class PersonalData extends React.Component {
  render() { 
    return (
    <fieldset className='personalData'>
    <input type="text" name="nome" id="nome" maxLength='40'/>
    <input type="email" name="email" id="email" maxLength='50' />
    <input type="text" name="cpf" id="cpf" maxLength='11' />
    <input type="text" name="endereco" id="endereco" maxLength='200' />
    <input type="text" name="cidade" id="cidade" maxLength='28' />
    <select name="estado" id="estado"></select>
    <input type="radio" name="" id="" />
    <input type="radio" name="" id="" />
  </fieldset>
  );
  }
}
 
export default PersonalData;