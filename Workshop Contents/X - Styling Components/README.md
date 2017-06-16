# Styling React Components

React components are styled very similarly to how you would natively style an HTML element. You have two options: CSS classes and inline styles. These styles are passed into a component by using _props_.

## Inline styles

To add inline styles to your HTML elements, you just have to use the `style` property and pass it a JavaScript object defining your styles. You will notice that the keys of the CSS properties are camelCase, so `font-size` becomes `fontSize`.

Here is an example:

```jsx
<input style={{
  width: 150,
  border: '1px solid #000',
  fontSize: 18, // camelCase for CSS properties that contain hyphens
}} />
```


## CSS classes 

The other basic way of styling your elements is to pass it the `class` attribute. As `class` is a reserved keyword in JavaScript, we will use the `props` `className`.

Example:
```html
<input className="form-control"/>
```

Note: _Since JSX is closer to JavaScript than HTML, React uses the camelCase property naming convention. You’ll notice that other properties such as `tabindex` become `tabIndex`._

## The Creact React App way

`create-react-app` have webpack configured to be able to import a CSS file into your components. That gives you a way to have a `.css` file next to your component and import it.

To use it, you just have to define your CSS and import it in your component:

```css
.Component {
  max-width: 540px;
  margin: 0 auto;
  padding: 40px 20px;
}
```

```js
  import './Component.css';
```

## Further reading

There are a number of other ways to style React Components, here are a few:
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Glamorous](https://github.com/paypal/glamorous)
- And more
