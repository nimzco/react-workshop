# Introduction

React is a JavaScript library that makes it easy to write *declarative* user interfaces.

It was created to solve the problem of **building large-scale applications with data that changes over time**. If you’ve ever used two-way data binding frameworks such as Angular or Twine to build a complex single-page application, this is a problem you might’ve faced yourself. Two-way data binding makes it difficult to understand 

It has quickly become the tool of choice for easily building dynamic user interfaces, and is used by companies large and small including Facebook, Instagram, Netflix, Airbnb and many more!

<img width="590" alt="s_2457af7b66ddaf025cd17086458b6faeff1aad9b80f2b6325be4420b27ae3b59_1496081730759_screen shot 2017-05-29 at 2 15 12 pm" src="https://user-images.githubusercontent.com/445045/27195947-b114e854-51d6-11e7-9cb4-9def0360495c.png">

React makes it simple to declaratively express what your app should look at any given point in time, without having to worry about mutating the DOM yourself. 

When the state of your application changes, React will figure out which parts need to update, and will only render those using the minimal number of DOM mutations possible.

## Should I use React?
> 🔨  When all you have is a hammer, everything looks like a nail. 

Not every project may need to use React.

When evaluating the needs of a project, here are a few factors that might make it a good candidate for using React:

✅  **Lots of state to manage**
**✅  Lots of DOM management**
**✅ Components re-used in multiple places**
**🆗 To fight Spaghetti code 🍝** 
⛔️ ~~Because it's the new hotness~~
⛔️ ~~React All The Things!~~ 

## Imperative vs. Declarative programming

We mentioned that React is a **declarative** library for building user-interfaces, but what does that mean exactly? 🤔

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
