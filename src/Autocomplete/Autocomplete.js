import React, {Component} from 'react';
import {TextField, ActionList} from '@shopify/polaris';

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

    if (typeof onSelect === 'function') {
      onSelect(value);
    }

    // Let's clear the input for better UX
    this.setState({
      inputValue: '',
    });
  }

  showPopover = () => {
    this.setState({
      popoverVisible: true,
    });
  }

  hidePopover = () => {
    this.setState({
      popoverVisible: false,
    });
  }

  render() {
    const {items} = this.props;
    const {inputValue} = this.state;

    return (
      <div className="Autocomplete">
        <TextField
          placeholder='Start typing to search...'
          onChange={this.handleInputChange}
          value={inputValue}
        />
        <ActionList
          items={filterItems(items, inputValue).map(({value}) => ({
            content: value,
            onAction: () => this.handleItemSelect(value),
          }))}
        />
      </div>
    );
  }
}


/*
 * React.Component provides a method called setState,
 * which will update our component's internal state
 * and then re-render it.
 */

class Counter extends React.Component {
  state = {
    count: 0
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <button onClick={() => this.incrementCount()}>
        I was clicked {this.state.count} times!
      </button>
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
