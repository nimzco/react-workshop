import React from 'react';

import {filterItems} from '../../utils';
import './Autocomplete.css';

export default class Autocomplete extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
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
            >
              {item.value}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

