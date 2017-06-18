# Stateful Components
Where _props_ allow for data to be passed into a component from the outside, _state_ allows a component to keep track of it's own data needed for updating or conditionally rendering our UI.

State can be anything and everything, ranging from:

- “this checkbox is checked”
- “that modal is open”
- “this data was fetched”

To create a stateful component, we have to create a new `class` that extends `React.Component`. `React.Component` is a base we can build upon that React provides for us and comes with a set of methods we can use.

To render our component, we have to assign it a `render` method.

State is set using the `setState` method. Calling `setState` triggers UI updates, and forces our component to re-render.

As a simple example of state, let’s create a `Counter` component that counts how often we’ve clicked a button:

<img width="473" alt="s_9d770ebd1641d231a06d1d808f243a8b1d9c4424b7c00b112f83df7ba3151d4b_1496116576936_zadl82o" src="https://user-images.githubusercontent.com/1416436/27197542-94fe6fd6-51dc-11e7-8b09-92799e4e5b23.png">


```js
class Counter extends React.Component {
  // First, we need to initialize the state of our component
  state = {
    count: 0
  }

  handleButtonClick = () => {
    // Then, we call the `this.setState` method
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <button onClick={this.handleButtonClick}>
        I was clicked {this.state.count} times!
      </button>
    );
  }
}
```

Whenever `this.setState` is called, an update to the component is scheduled, causing React to merge in the passed state update and rerender the component along with its descendants.


## Unidirectional Data Flow
In React, application data flows unidirectionally via the state and props objects (as opposed to the two-way binding of libraries). This means that, in a multi component heirachy, a common parent component should manage the state and pass it down the chain via props.

Your state should be updated using the `setState` method to ensure that a UI refresh will occur, if necessary. The resulting values should be passed down to child components using props.

## Lifting State Up
When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the `state` back down to the children via `props`, so that the child components are always in sync with each other and with the parent.

For more examples of this pattern, take a look at [the official React documentation](https://facebook.github.io/react/tutorial/tutorial.html#lifting-state-up)
