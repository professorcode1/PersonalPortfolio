import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
  name: 'screen',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState:0,
  reducers: {
    setCourse: (state, action: PayloadAction<number>) => {
      return action.payload
    }
  }
})

export const { setCourse } = courseSlice.actions



export default courseSlice.reducer