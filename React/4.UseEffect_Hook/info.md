for creating a boiler plate for react app in same folder using vite use "." as project name

code -r ./foldername exits current folder form vscode and opens it with folder name given which is inside current folder

in react whenever a state changes the whole component is rerendered 



in main.jsx on strict mode the page first loads as a test and loads again to display
overall it loads two times on strict mode


order of execution of useeffect hooks is the order they  declared in the code if they multiple are triggered at the same time 

Initial Render (Mount):

Effects run in the order they are declared in the component.
Cleanup: Runs in reverse order before the next effects or unmount.



rafce for boiler plate for new react functional component




Key Rules of Re-rendering:
Parent → Child Flow
If the parent re-renders, all its children will re-render by default (unless optimized).

Child → Parent Flow
If a child re-renders (due to its own state or props changes), the parent does not re-render unless:

The child’s re-render is caused by a change in props passed from the parent.

The child’s re-render updates the parent’s state (e.g., via a callback).



first the child components useeffects hooks are called before the parent useeffect hooks
In React, child component useEffect hooks are called before the parent component’s useEffect hooks during the commit phase of the component lifecycle. Here’s a breakdown of the order:
Parent Render  
  ↳ Child Render  
    ↳ Child useEffect  
↳ Parent useEffect  




the state variables are initialized in the first render and multiple rerenders doesnt initialize them again reloading initializes them again




