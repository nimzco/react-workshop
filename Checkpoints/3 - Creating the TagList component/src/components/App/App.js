import React from 'react';

import Autocomplete from '../Autocomplete';
import TagList from '../TagList';
import Title from '../Title';

import emojiList from './emojiList.json';

class App extends React.Component {
  render() {
    const selectedEmojis = ['🐯 Tiger', '🐬 Dolphin'];

    return (
      <div>
        <Title>
          🐯 Emoji Picker 🐬
        </Title>
        <TagList tags={selectedEmojis} />
        <Autocomplete items={emojiList} />
      </div>
    );
  }
}

export default App;
