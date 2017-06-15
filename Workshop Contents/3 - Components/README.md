# Components
Everything in React starts with a component.

> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
>
> Conceptually, components are like JavaScript functions.
> They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

The simplest way to define a component is to write a JavaScript function:

```js
function Title(props) {
  return (
    <h1>{props.name}</h1>
  );
}
```

<img width="461" alt="Title Component" src="https://user-images.githubusercontent.com/1416436/27197363-eca74c2c-51db-11e7-8e45-3e946e3b3a7d.png">

# Pass data to our Component with props

Passing properties to our components is as easy as writing them as attributes (***props***) on these HTML-like tags, and to add children we simply wrap them!

## Specifying Attributes with JSX

Much like we do in HTML, we can also specify attributes using JSX:

```js
<Title name="🐯 Emoji Picker 🐬" />
```

These can be any valid JavaScript expression:

- String
- Number
- Array
- Object
- Function

They can also span on multiple lines for easier readability.

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
*Numbers, Arrays, Objects, and Functions must be wrapped in curly braces.*


# Styling components
- Inline style
- CSS Modules
- Further reading
