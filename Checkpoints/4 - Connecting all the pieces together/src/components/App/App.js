import React from 'react';

import Autocomplete from '../Autocomplete';
import TagList from '../TagList';
import Title from '../Title';

import emojiList from './emojiList.json';
import {addItemToArray, removeItemFromArray} from '../../utils';

class App extends React.Component {
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
      <div>
        <Title>
          🐯 Emoji Picker 🐬
        </Title>
        <TagList tags={selectedEmojis} onRemove={this.handleEmojiRemove} />
        <Autocomplete items={emojiList} onSelect={this.handleEmojiSelect} />
      </div>
    );
  }
}

export default App;
