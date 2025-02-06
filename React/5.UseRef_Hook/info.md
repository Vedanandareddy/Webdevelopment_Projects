The useRef hook in React is a versatile tool for accessing DOM elements,
persisting values across renders without causing re-renders,
and interacting with mutable data. 


No Re-renders
Changing ref.current does not cause the component to re-render, making it ideal for:

Tracking values that don’t need UI updates (e.g., timers, DOM references).

Storing previous state/props without triggering infinite loops.

DOM Access
useRef is the only way to directly access DOM elements in React:


useState is for UI-critical state (triggers re-renders).

useRef is for non-UI state (avoids re-renders) and direct DOM access.


Use Case: Log how many times a component rendered.
Why useRef? Avoid infinite loops (since useState would trigger re-renders).



Manipulating the DOM with a ref 
It’s particularly common to use a ref to manipulate the DOM. React has built-in support for this.

First, declare a ref object with an initial value of null:

import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  // ...
Then pass your ref object as the ref attribute to the JSX of the DOM node you want to manipulate:

  // ...
  return <input ref={inputRef} />;
