import React from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../Redux/actions';

class Button extends React.Component {
  render() {
    const {selected, getSelectedReddit } = this.props;
    return (
      <div>
        <button
        className="btn"
        disabled={selected === ''}
        type="button"
        onClick={()=> getSelectedReddit(selected)}
        >Refresh</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSelectedReddit: (selected) => dispatch(fetchApi(selected)),
});

export default connect(null, mapDispatchToProps)(Button);