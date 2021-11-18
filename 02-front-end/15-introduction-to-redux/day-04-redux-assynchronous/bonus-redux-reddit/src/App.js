import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Button from './components/Button';
import { changeSelectedSubreddit } from './Redux/actions';
import Reddit from './components/Reddit';


class App extends React.Component {
     render() {
    const { selected, changeSelected } = this.props;
    return (
    <div>
      <div className="container">
        <h1>Selected: { selected } </h1>
        <div className="container-row">
          <select
          className="select-container"
          onChange={changeSelected}
          >
              <option value="" hidden>Select an option</option>
              <option value="frontend">Front-End</option>
              <option value="reactjs">React.Js</option>
          </select>
          <Button selected={selected}/>   
        </div>
        {selected !== '' && <Reddit />}       
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    selected: state.selectedReducer.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelected: (e) => {
      dispatch(changeSelectedSubreddit(dispatch, e.target.value));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
