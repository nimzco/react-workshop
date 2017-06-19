import React, { Component } from 'react';

import Autocomplete from '../Autocomplete';
import TagList from '../TagList';
import Title from '../Title';

import emojiList from './emojiList.json';

// Import the styles for our App
import './App.css';

// To use Polaris, we need to import the Polaris styles. This only needs to be done once
import '@shopify/polaris/styles.css';

class App extends Component {
  state = {
    selectedEmojis: [],
  };

  handleEmojiSelect = (emoji) => {
    const {selectedEmojis} = this.state;

    this.setState({
      selectedEmojis: addItemToArray(selectedEmojis, emoji),
    });
  }

  handleEmojiRemove = (index) => {
    const {selectedEmojis} = this.state;

    this.setState({
      selectedEmojis: removeItemFromArray(selectedEmojis, index),
    });
  }

  render() {
    const {selectedEmojis} = this.state;

    return (
      <div className="App">
        <Title>🐯 Emoji Picker 🐬</Title>
        <TagList
          tags={selectedEmojis}
          onRemove={this.handleEmojiRemove}
        />
        <Autocomplete
          items={emojiList}
          onSelect={this.handleEmojiSelect}
        />
      </div>
    );
  }
}

export default App;

/*
 * The Array.push and Array.splice methods operate on the original array,
 * which ends up mutating state directly. In React, we want to always avoid
 * mutating `this.state` directly. By manipulating this.state directly you
 * end up circumventing React’s state management, which may have potential
 * side-effects.
 *
 * Instead, we want to always create new copies of the objects and arrays
 * we want to update and and manipulate the copies. Once we're done mutating
 * the copies, we assign them back using this.setState().
 */

function addItemToArray(array, item) {
  return [...array, item];
}

function removeItemFromArray(array, index) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
