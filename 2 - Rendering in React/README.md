# Rendering in React

Elements are the smallest building blocks of React apps.

> An element describes what you want to see on the screen

Before diving in to see how these are created in React, let’s take a look at how DOM elements are generally created using plain JavaScript:

```js
// First, we create the element
const element = document.createElement('button');

element.setAttribute('type', 'submit');
element.innerHTML = 'Click me!';

// Then, we append it to the DOM
document.body.appendChild(element);
```

## `React.createElement()`

Creating elements in React has many similarities to creating elements in the DOM. We need to specify the ***type*** of element we want to create, give it certain parameters (called ***props*** in React), and the ***children*** that should be rendered within our element.

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

Note that React elements are a lightweight representation of the DOM, and are not actual DOM elements. They are represented as plain objects and are cheap to create.

## ReactDOM

React is split into two different packages, `react` and `react-dom`. The `react-dom` package provides DOM-specific methods that can be used at the top level of your app to render React elements into DOM elements.

### `ReactDOM.render()`

The `ReactDOM.render()` method is used to render React Elements to the DOM, and takes two arguments:

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

You may have seen React code samples floating around, and something that might’ve struck you is the funny HTML-like syntax in the JavaScript code that is used by most of the community.

It’s called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX is not a requirement for using React. Each JSX element is just syntactic sugar for calling `React.createElement(component, props, children)`. So, anything you can do with JSX can also be done with just plain JavaScript.

However, writing React using `React.createElement` can feel a bit tedious, and a bit too far removed from what the actual desired output is: HTML.

For this reason, most React developers choose to use JSX which makes it easier to write components.

```js
const element = (
    <ul className="list">
        <li><i>Hello</i> react!</li>
        <li>And hello <b>again</b></li>
    </ul>
);
```

> Since JSX is a non-standard extension of JavaScript no browser will understand it. This means we have to transpile it using a build tool like Babel. In this workshop, it is handled directly by `create-react-app`.


### Embedding Expressions in JSX

You can embed any JavaScript expression in JSX by wrapping it in *curly braces*. In JavaScript, an expression is any valid unit of code that resolves to a value.

For example, `2 + 2`, `user.firstName`, and `formatName(user)` are all valid expressions.

In practice, this means we can do things like this:
```js
<h1 className={'header--' + variation}>
  Welcome, {user.firstName}!
</h1>
```

### JSX is an Expression Too
After compilation, JSX expressions get compiled down to plain JavaScript.
This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

```jsx
function getGreeting(user) {
  if (user) {
    return <h1>Welcome, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

Which would compile down to:
```js
function getGreeting(user) {
  if (user) {
    return React.createElement('h1', null, `Welcome, ${formatName(user)}!`);
  }
  return React.createElement('h1', null, 'Hello, Stranger.');
}
```
