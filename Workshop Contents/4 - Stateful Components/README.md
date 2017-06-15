# Stateful Components

Where props allow for data to be passed into a component from the outside, state allows a component to keep track of it's own data needed for updating or conditionally rendering our UI.

State can be anything and everything, ranging from:

- “this checkbox is checked”
- “that modal is open”
- “this data was fetched”

To create *stateful* components, we have to use a slightly different notation to create components: the ES6 `class` notation!

To create a stateful component, we create a new `class` that extends `React.Component`. (`React.Component` is a base we can build upon that React provides for us).

We then assign it a `render` method from which we return our `ReactElements`, which is similar to the functional component notation we looked at earlier.

As a simple example of state, let’s create a `Counter` component that counts how often we’ve clicked a button:

<img width="473" alt="s_9d770ebd1641d231a06d1d808f243a8b1d9c4424b7c00b112f83df7ba3151d4b_1496116576936_zadl82o" src="https://user-images.githubusercontent.com/1416436/27197542-94fe6fd6-51dc-11e7-8b09-92799e4e5b23.png">

```js
class Counter extends React.Component {
  state = {
    count: 0
  }
  handleButtonClick = () => {
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
