import React from 'react';

import {filterItems} from '../../utils';
import './Autocomplete.css';

export default class Autocomplete extends Component {
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
          {filterItems(items, inputValue).map((item, index) =>
            <li
              key={index}
              className="Autocomplete-List__item"
              onClick={() => this.handleItemSelect(item)}
            >
              {item.value}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

