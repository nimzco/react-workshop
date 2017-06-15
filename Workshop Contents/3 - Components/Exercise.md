But what if you want to insert images next to your title? Or even child nodes? A specific word in italic? In React, your components can have children and you can use your components like:
```jsx
<Title>
  🐑 Emoji picker 🐑
</Title>
```

To be able to do that, you will have to modify your existing `Title` component to use `props.children` as follows:

```jsx
function Title(props) {
  return (
    <h1>{props.children}</h1>
  );
}
```

To add some specific CSS you can create a `Title.css` file that you will import in `Title.js` as follow:

```js
import React from 'react';

export default function Title (props) {
  return (
    <h1
      className='Title'
      style={{
        fontSize: '2em',
        textAlign: 'center',
        fontWeight: 600,
        marginBottom: '1em',
        lineHeight: 1,
      }}
    >
      {props.children}
    </h1>
  );
}
```

## Create the autocomplete: input + list

Create an `Autocomplete` component as a class that extends `React.Component`

To create a stateful component, we create a new `class` that extends `React.Component`. (`React.Component` is a base we can build upon that React provides for us).

We then assign it a `render` method from which we return our `ReactElements`, which is similar to the functional component notation we looked at earlier.

```js
import React from 'react';

class Autocomplete extends React.Component {

  render() {
    const {items} = this.props;

    return (
      <ul>
        {items.map( (item) => {
          return (<li>{item.value}</li>)
        })}
      </ul>
    );
  }
}

export default Autocomplete;
```

This should render:

![s_70be75f83c2b9f85d390c0d7ceabd3d3275df6568afaec3545510572b41d159d_1496157017642_screen shot 2017-05-30 at 11 10 08 am](https://user-images.githubusercontent.com/1416436/27195911-922c58a0-51d6-11e7-9c8e-680791747b4b.png)
