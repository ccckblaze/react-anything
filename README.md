# react-everything

`react-everything` is a library to create easily native implementations
of React. Originall React was intended to manipulate DOM elements; React Native,
on the other hand, manipulates native mobile views. Similarly, `react-everything` is intended to
facilitate using React to manipulate any other elements.
In other words, it helps creating React applications where there is no DOM or mobile views.

This library was first developed to support [react-phaser](https://github.com/evilfer/react-phaser).

Most likely `react-everything` will be soon obsolete, since it seems that React
will eventually implement a complete DOM-free version.

### Default React vs React.native

As of version 0.15.rc2, the default React package loads the DOM manipulation code.
`react-everything` modifies the default React object to remove the DOM related code,
and links React with any other implementation.

As an alternative, it's possible to use `react-everything/src/native`, which loads a
a React version without any DOM related code.

`react-everything` and `react-everything/src/native` should behave exactly in the same way.
However, the later will compile to a smaller production file (~130KB using webpack).
On the other hand, if you want to use any other library that also requires React (e.g., react-redux),
the default `react-everything` should be used.
