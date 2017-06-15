Create a new file named `Title.js` and create a simple component that is just a function that returns a React element.

```js
import React from 'React';

function Title() {
  return (
    <h1>😺 Emoji picker 🐶</h1>
  );
}
```

<img width="461" alt="s_9d770ebd1641d231a06d1d808f243a8b1d9c4424b7c00b112f83df7ba3151d4b_1496154046364_screen shot 2017-05-30 at 10 20 16 am" src="https://user-images.githubusercontent.com/445045/27197092-0109bffc-51db-11e7-9571-0517798c710a.png">

Now, in your `App.js`, you can use your Title component by importing it and simply adding the JSX call in your render function:

```js
import Title from './Title';
render() {
  return {
    <Title />
  }
}
```
