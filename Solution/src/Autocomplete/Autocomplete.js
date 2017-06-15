import React, {Component} from 'react';
import './Autocomplete.css';

export default class Autocomplete extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }

  handleItemSelect(value) {
    const {onSelect} = this.props;

    onSelect(value);

    // Let's clear the input for better UX
    this.setState({
      inputValue: '',
    });
  }

  render() {
    const {items} = this.props;
    const {inputValue} = this.state;

    return (
      <div>
        <input
          placeholder='Start typing to search...'
          value={inputValue}
          onChange={this.handleInputChange}
          className="Autocomplete-Input"
        />
        <ul className="Autocomplete-List">
          {filterItems(items, inputValue).map( (item, index) =>
            <li
              key={index}
              className="Autocomplete-List__item"
              onClick={() => this.handleItemSelect(item.value)}
            >
              {item.value}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

// Filtering the results
function filterItems(items, query = '') {
  /*
   * This is a really naive approach to filtering our results,
   * you'll want to use something more robust in a real-world
   * application, but it'll get the job done for us.
   */
  return items.filter(({value, keywords}) =>
    value.toLowerCase().includes(query.toLowerCase()) ||
    keywords.toLowerCase().includes(query.toLowerCase())
  );
}
