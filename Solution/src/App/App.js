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
      selectedEmojis: [...selectedEmojis, emoji],
    });
  }

  handleEmojiRemove = (index) => {
    const {selectedEmojis} = this.state;

    this.setState({
      selectedEmojis: [...selectedEmojis.slice(0, index), ...selectedEmojis.slice(index + 1)],
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
