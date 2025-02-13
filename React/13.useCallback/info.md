✅ Example Using an Arrow Function
jsx
Copy
Edit
const handleClick = useCallback(() => {
  console.log("Button clicked");
}, []);
✅ Example Using a Regular Function
jsx
Copy
Edit
const handleClick = useCallback(function () {
  console.log("Button clicked");
}, []);



Conclusion
useCallback is beneficial in scenarios involving:

Passing functions to memoized child components.
Preventing unnecessary useEffect executions.
Optimizing event handlers.
Managing expensive operations like debounce functions.