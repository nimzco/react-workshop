Create a new file named `Title.js` and create a simple component that is just a function that returns a React element.


    import React from 'React';
    
    function Title() {
      return (
        <h1>🐑 Emoji picker 🐑</h1>
      );
    }


https://d2mxuefqeaa7sj.cloudfront.net/s_9D770EBD1641D231A06D1D808F243A8B1D9C4424B7C00B112F83DF7BA3151D4B_1496154046364_Screen+Shot+2017-05-30+at+10.20.16+AM.png


Now, in your `App.js`, you can use your Title component by importing it and simply adding the JSX call in your render function:


    import Title from './Title';
    render() {
      return {
        <Title />
      }
    }
