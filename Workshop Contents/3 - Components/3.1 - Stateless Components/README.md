# Components
Everything in React starts with a component. A component takes in parameters, called ***props***, and returns a hierarchy of views to display.

> Components let you split an application's UI into independent, reusable pieces, and think about each piece in isolation.
>
> Conceptually, components are like JavaScript functions.
> They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

## Stateless Components
Stateless components are the simplest way to define a component. They are said to be ***pure**: given a set of props, stateless components always return the same output.

To create a stateless component, we write a JavaScript function that returns JSX:

```js
function Title() {
  return (
    <h1>Hello World</h1>
  );
}

// Later in our app, we can render this component by invoking it
<Title />
```

Notice that `Title` is capitalized. When creating custom React components you need to capitalize the name of the component. This lets the [JSX transpiler](https://babeljs.io/docs/plugins/transform-react-jsx/) know that this is a custom component, and not a built-in HTML element.

As it stands, our Title component isn't very re-usable though, since it will always return 'Hello World' as its value. To create components that are generic and re-usable, we'll need to be able to pass them attributes, which will be the subject of the next section.

## Passing data to our component

### Specifying attributes with JSX

The simplest way to explain component props would be to say that they function similarly to HTML attributes. In other words, props provide configuration values for the component.

```js
<Title value="🐯 Emoji Picker 🐬" />
```

We'll need to slightly update the implementation of the `Title` component to read the `value` attribute from it's props:

```js
/*
 * Functional components receive a `props` parameter,
 * which contains all the attributes passed to them.
 */
function Title(props) {
  return (
    <h1>{props.value}</h1>
  );
}
```

<img width="461" alt="Title Component" src="https://user-images.githubusercontent.com/1416436/27197363-eca74c2c-51db-11e7-8e45-3e946e3b3a7d.png">


### Prop Types

Props can be any valid JavaScript expression:

- String
- Number
- Array
- Object
- Function

They can also span on multiple lines for easier readability.

Here's an example using a combindation of different expressions:

```js
<ProductList
  products={[
    {name: 'Leather Wallet', price: 40},
    {name: 'Fidget Spinner', price: 10},
    {name: 'Hoverboard', price: 999},
  ]}
  onProductSelect={function(product) {
    console.log(product);
  }}
  limit={10}
/>
```
*Note: As you may have noticed, Numbers, Arrays, Objects, and Functions must be wrapped within curly braces.*

### Passing children to Components
Passing children to components is as simple as
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
