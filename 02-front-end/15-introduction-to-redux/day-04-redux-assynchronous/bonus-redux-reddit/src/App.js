import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      isFetching: false,
      items: [],
    };
  }

  handleSelectionChange = (event) => {
    this.setState({
      selected: event.target.value,
    });
  }


  render() {
    const { selected } = this.state;
    return (
    <div className="App">
      <h1>Selected: { selected } </h1>
      <select
      onChange={this.handleSelectionChange}
      >
        <option value="">Select</option>
        <option value="frontend">Front-End</option>
        <option value="reactjs">React.Js</option>
      </select>
    </div>
    );
  }
}

export default App;
