# React Fundamentals

### Length: 2 hours

## Prerequisites

### Cloning the workshop's boilerplate locally
First, and most importantly, please take a moment to clone the boilerplate repo we've set up for the workshop and follow the "Getting Started" instructions.

https://github.com/Shopify/react-workshop-boilerplate

Don't worry, it shouldn't take you more than a minute or two to get it set up.

### React
React is a JavaScript library, so it assumes you have a basic understanding of the JavaScript language. If you don't feel very confident, we recommend [refreshing your JavaScript knowledge](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).

### ES6
This workshop uses ES6 syntax in the examples. It is used sparingly, but we encourage you to get familiar with [arrow functions, classes, template literals, let, and const statements](https://babeljs.io/learn-es2015/)

## Syllabus

### Introduction

First, we'll take a trip down memory lane to shine a light on some of the challenges that React was designed to solve.

React is a "declarative" library for building user interfaces. What does that mean, and what is imperative code? We'll answer these questions and explore the benefits that come from shifting imperative code into declarative components.

Not every project may need to use React, we'll look at few factors that might make a project a good candidate to use React.

### Rendering in React

We'll explore the lowest level of React: rendering UI.
We'll take a look at what the "Virtual DOM" and JSX are, brush up on some JavaScript array methods, and do our first coding exercise.

Objectives:

- Render UI with React
- Become familiar with JSX

### Components

Objectives:

- How to define components
- Learn about props
- Styling components

### Stateful Components

This chapter introduces how to store internal state within components. It discusses how data flows and how components communicate with each other. Finally, it explores component composition and how it help choose between props or state.

## Further Learning

**Resources**

https://facebook.github.io/react/tutorial/tutorial.html

https://github.com/petehunt/react-howto

**`creact-react-app`**
If you'd like to start your next project from scratch, we strongly recommend you try [create-react-app](https://github.com/facebookincubator/create-react-app/). Create React App is a command-line tool for rapidly bootstrapping React applications, with zero configuration needed.

It needs Node v6.x.x or greater installed on your machine. You can easily double check this by running `node --version` from the command line.

From your terminal, run the following command to install it globally:
```sh
npm install -g create-react-app
```

To make sure it's working properly, try running:

```sh
create-react-app my-next-react-app
cd my-next-react-app
npm start
```
