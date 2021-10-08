import React from 'react';

class LastJob extends React.Component {
  render() { 
    return (
    <fieldset className="lastJob">
    <textarea name="resumo" id="resumo" cols="30" rows="10" maxLength='2000'></textarea>
    <textarea name="cargo" id="cargo" cols="30" rows="10" maxLength='40'></textarea>
    <textarea name="descricao" id="descricao" cols="30" rows="10" maxLength='500'>
    </textarea>
    </fieldset>
  );
  }
}
 
export default LastJob;