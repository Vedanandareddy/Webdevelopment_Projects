import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
// sets initial value of the state 

export const counterSlice = createSlice({
  name: 'counter',
//   naming the variable 
  initialState,
  reducers: {
    // functions related to  the counter written in reducers 
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multiplybyValue: (state,action) => {
        // action.payload contains the value passed to the function 
        state.value*=action.payload;
        // state changed by changing state.value 
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,multiplybyValue } = counterSlice.actions
// exporting the functions you want to use in other components

export default counterSlice.reducer