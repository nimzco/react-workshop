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

https://d2mxuefqeaa7sj.cloudfront.net/s_9D770EBD1641D231A06D1D808F243A8B1D9C4424B7C00B112F83DF7BA3151D4B_1496116576936_zadL82o.png

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

