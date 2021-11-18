import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Button from './components/Button';
import { changeSelectedSubreddit } from './Redux/actions';


class App extends React.Component {
 





  render() {
    const { selected, changeSelected } = this.props;
    console.log(this.props);
    return (
    <div className="App">
      <h1>Selected: { selected } </h1>
      <select
      onChange={changeSelected}
      >
        <option value="">Select an option</option>
        <option value="frontend">Front-End</option>
        <option value="reactjs">React.Js</option>
      </select>
      <Button selected={selected}/>
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
      console.log(e.target.value);
      dispatch(changeSelectedSubreddit(e.target.value));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
