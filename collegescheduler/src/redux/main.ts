
import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import screenSlice from "./screen"
import waitingSlice from "./waiting"
import userSlice from "./User"
import courseSlice from "./SelectedCourse"
export const store = configureStore({
  reducer: {
    screen: screenSlice,
    waiting:waitingSlice,
    user:userSlice,
    course:courseSlice
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
