import React from 'react';

class App extends React.Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const {value} = this.state;

    return (
      <div>
        <h1>{value}</h1>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
