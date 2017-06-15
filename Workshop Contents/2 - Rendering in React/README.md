# Rendering in React

Elements are the smallest building blocks of React apps.

> An element describes what you want to see on the screen

Before diving in to see how these are created in React, let’s take a look at how elements are generally created using plain JavaScript:

```js
const element = document.createElement('button');
const container = document.getElementById('container');

element.setAttribute('type', 'submit');
element.innerHTML = 'Click me!';

container.appendChild(element);
```

## `createElement()`

Creating elements in React has many similarities. We need to specify the ***type*** of element we want to create, give it certain attributes (called ***props*** in react), and the ***children*** that should be rendered within our element.

```js
React.createElement('button');
// -> <button></button>

React.createElement('button', { type: 'submit' });
// -> <button type="submit"></button>

React.createElement('button', { className: 'primary', type: 'submit' });
// -> <button class="primary" type="submit"></button>

React.createElement('button', { className: 'primary', type: 'submit' }, 'Click me!');
// -> <button class="primary" type="submit">Click me</button>
```

*Notice how the HTML* `class` *attribute has to be set via the* `className` *property in React. This is because* `class` *is a reserved keyword in JavaScript.*

## `ReactDOM.render()`

The `ReactDOM.render()` function is used to render React Elements to the DOM, and takes two arguments: 

- The ReactElement to render
- The DOM node we want to render into (the “entry point”)
```js
const element = React.createElement('h1', {className: 'heading'}, 'Hello World!');

ReactDOM.render(
  element,
  document.getElementById('container')
);
```

## Introduction to JSX

You might have seen React code samples floating around, and something that might’ve struck you is the weird HTML-ish syntax in the JavaScript code that is used by most of the community.

JSX is not a requirement for using React. Each JSX element is just syntactic sugar for calling `React.createElement(component, props, children)`. So, anything you can do with JSX can also be done with just plain JavaScript.

However, writing React using `React.createElement` can feel bit too far removed from what the actual desired output is though: HTML.

Instead, we can use JSX to make the code look more like the rendered HTML:

```jsx
const element = (
    <ul className="list">
        <li><i>Hello</i> react!</li>
        <li>And hello <b>again</b></li>
    </ul>
);
```

It’s called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.


> Since JSX is a non-standard extension of JavaScript no browser will understand it. This means we have to transpile it using a build tool like Babel. Thankfully, `create-react-app` does this for us automatically.
## Embedding Expressions in JSX

You can embed any JavaScript expression in JSX by wrapping it in *curly braces*. In JavaScript, an expression is any valid unit of code that resolves to a value.

For example, `2 + 2`, `user.firstName`, and `formatName(user)` are all valid expressions.
In practice, this means we can do things like:

```js
<h1>
  Welcome, {user.firstName}!
</h1>
```

## JSX is an Expression Too

After compilation, JSX expressions get compiled down to plain JavaScript.
This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```js
function getGreeting(user) {
  if (user) {
    return <h1>Welcome, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
Which would compile down to:

```
function getGreeting(user) {
  if (user) {
    return React.createElement('h1', null, `Welcome, ${formatName(user)}!`);
  }
  return React.createElement('h1', null, 'Hello, Stranger.');
}
```
