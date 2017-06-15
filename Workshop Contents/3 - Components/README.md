# Components

Everything in React starts with a component.


> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
> 
> Conceptually, components are like JavaScript functions. 
> They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

The simplest way to define a component is to write a JavaScript function:


    function Title(props) {
      return (
        <h1>{props.name}</h1>
      );
    }


https://d2mxuefqeaa7sj.cloudfront.net/s_9D770EBD1641D231A06D1D808F243A8B1D9C4424B7C00B112F83DF7BA3151D4B_1496154046364_Screen+Shot+2017-05-30+at+10.20.16+AM.png

# Pass data to our Component with props

Passing properties to our components is as easy as writing them as attributes (***props***) on these HTML-like tags, and to add children we simply wrap them!

## Specifying Attributes with JSX

Much like we do in HTML, we can also specify attributes using JSX:


    <Title name="🐯 Emoji Picker 🐬" />

These can be any valid JavaScript expression:

- String
- Number
- Array
- Object
- Function

They can also span on multiple lines for easier readability.


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

*Numbers, Arrays, Objects, and Functions must be wrapped in curly braces.*


# Styling components
- Inline style
- CSS Modules
- Further reading
