Redux toolkit used for getting the states form single source of truth which is redux store containing data we want to use across the components in nested components too

steps 

    create folder named redux and configure a store in store.js


    Provide the Redux Store to React
        Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

    Create slice 
        used for storing a particular variable and functions related to that variable  
        create a counter folder 

    Add Slice Reducers to the Store
        Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.


    Use Redux State and Actions in React Components
        Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/features/counter/Counter.js file with a <Counter> component inside, then import that component into App.js and render it inside of <App>.



Store - is what holds all the data your application uses.
Reducer - is what manipulates that data when it receives an action.
Action - is what tells reducer to manipulate the store data, it carries the name and (optionally) some data.
Reducer is usually in the format of a switch statement that switches between all possible Actions (cases) and then manipulates the Store data based on the action. When reducer data changes within redux, the properties in your components are changed and then the re-rendering occurs.