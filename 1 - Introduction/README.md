# Introduction

React is a JavaScript library that makes it easy to write *declarative* user interfaces.

It was created to solve the problem of **building large-scale applications with data that changes over time**. If you’ve ever used two-way data binding frameworks such as Angular or Twine to build a complex single-page application, this is a problem you might’ve faced yourself. Two-way data binding makes it difficult to understand

It has quickly become the tool of choice for easily building dynamic user interfaces, and is used by companies large and small including Facebook, Instagram, Netflix, Airbnb and many more!

<img width="590" alt="who-uses-react" src="https://user-images.githubusercontent.com/1416436/27457229-e437f6ea-5771-11e7-8f33-b0ba66a5391d.png">

React makes it simple to declaratively express what your app should look at any given point in time, without having to worry about mutating the DOM yourself.

When the state of your application changes, React will figure out which parts need to update, and will only render those using the minimal number of DOM mutations possible.

Some of the key features of React include:

- **Declarative** - You describe what you want to see in your view and not how to achieve it. In the jQuery days, developers would have to come up with a series of steps to manipulate the DOM to get from one app state to the next. In React, you simply change the state within the component and the view will update itself according to the state. It is also easy to determine how the component will look like just by looking at the markup in the `render()` method.

- **Functional** - The view is a pure function of `props` and `state`. In most cases, a React component is defined by `props` (external parameters) and `state` (internal data). For the same `props` and `state`, the same view is produced. Pure functions are easy to test, and the same goes for functional components. Testing in React is made easy because a component's interfaces are well-defined and you can test the component by supplying different `props` and `state` to it and comparing the rendered output.

- **Maintainable** - Writing your view in a component-based fashion encourages reusability. We find that defining a component's `propTypes` make React code self-documenting as the reader can know clearly what is needed to use that component. Lastly, your view and logic is self-contained within the component, and should not be affected nor affect other components. That makes it easy to shift components around during large-scale refactoring, as long as the same `props` are supplied to the component.

- **High Performance** - You might have heard that React uses a virtual DOM (not to be confused with [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)) and it re-renders everything when there is a change in state. Why is there a need for a virtual DOM? While modern JavaScript engines are fast, reading from and writing to the DOM is slow. React keeps a lightweight virtual representation of the DOM in memory. Re-rendering everything is a misleading term. In React it actually refers to re-rendering the in-memory representation of the DOM, not the actual DOM itself. When there's a change in the underlying data of the component, a new virtual representation is created, and compared against the previous representation. The difference (minimal set of changes required) is then patched to the real browser DOM.

- **Ease of Learning** - Learning React is pretty simple. The React API surface is relatively small compared to [this](https://angular.io/docs/ts/latest/api/); there are only a few APIs to learn and they do not change often. The React community is one of the largest, and along with that comes a vibrant ecosystem of tools, open-sourced UI components, and a ton of great resources online to get you started on learning React.

- **Developer Experience** - There are a number of tools that improves the development experience with React. [React Developer Tools](https://github.com/facebook/react-devtools) is a browser extension that allows you to inspect your component, view and manipulate its `props` and `state`. [Hot reloading](https://github.com/gaearon/react-hot-loader) with webpack allows you to view changes to your code in your browser, without you having to refresh the browser. Front end development involves a lot of tweaking code, saving and then refreshing the browser. Hot reloading helps you by eliminating the last step.

## Imperative vs. Declarative programming

We mentioned that React is a **declarative** library for building user-interfaces, but what does that mean exactly, and why is it a good thing? 🤔

Let's look at the differences between Imperative vs Declarative code.

### Imperative

> Imperative programming is a paradigm in which you use a sequence of statements to determine how to reach a certain goal.

If you’ve ever used jQuery to build user interfaces, you should already be familiar with Imperative programming. You explicitly give instructions to the browser to:

- Add element
- Modify element
- Re-order elements
- Remove element

While this approach is straightforward, it’s prone to falling out of sync with the underlying model as your application grows in size.

With Imperative programming, we’re not actually describing the different states of our UI, we’re managing the transitions between them.

### Declarative

React provides a **declarative** API so that you don’t have to worry about exactly what changes on every update and how to transition to that state.

> You only need to describe the state your application should be in at a given point in time.

If something changes in our application, React will add, remove or change elements for us to transition to that new state, using the minimum number of DOM operations.

This happens behind the scenes through a process called *reconciliation*, which we will briefly talk about later on.

Declarative programming generally leads to code that is:
- Easier to read and understand
- Minimizes the amount of mutations
- Reduces side-effects
- More predictable and less error-prone

## When should I use React?
Not every project may need to use React.

> 🔨  When all you have is a hammer, everything looks like a nail.

When evaluating the needs of a project, here are a few factors you might want to consider in making the decision of whether to use React or not:

- ✅  **Lots of state to manage**
- **✅  Lots of DOM management**
- **✅ Components re-used in multiple places**
- **🆗 To fight Spaghetti code 🍝**
- ⛔️ ~~Because it's the new hotness~~
- ⛔️ ~~React All The Things!~~
