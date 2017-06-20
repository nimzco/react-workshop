import React from 'react';

import Autocomplete from '../Autocomplete';
import Title from '../Title';

import {addItemToArray, removeItemFromArray} from '../utils';
import emojiList from './emojiList.json';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title>
          🐯 Emoji Picker 🐬
        </Title>
        <Autocomplete />
      </div>
    );
  }
}

export default App;
