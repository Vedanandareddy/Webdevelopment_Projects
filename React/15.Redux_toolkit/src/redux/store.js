import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './counter/counterslice'
// import the default export from counteslice

export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    
  },
})



// redux store containing all the states we want to access 