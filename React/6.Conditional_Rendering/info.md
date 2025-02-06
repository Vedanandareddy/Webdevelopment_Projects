Solution 1: Use Parentheses Instead of Curly Braces
If you want to implicitly return the JSX element, you can use parentheses () instead of curly braces {}. This way, the arrow function will automatically return the JSX element

{todos.map(tod => (
  <Todo key={tod.id} todo={tod} />
))}



Solution 2: Explicitly Use return
Alternatively, if you prefer to use curly braces {}, you must explicitly use the return statement to return the JSX element.


{todos.map(tod => {
  return <Todo key={tod.id} todo={tod} />;
})}


Key Points:

Key Prop : Ensure that each Todo component has a unique key prop. In this example, I assumed that each tod object has an id property that can be used as the key. If your data structure is different, adjust the key accordingly.



Parentheses vs. Curly Braces :

Parentheses () : Automatically return the expression inside.
Curly Braces {} : Require an explicit return statement to return a value.