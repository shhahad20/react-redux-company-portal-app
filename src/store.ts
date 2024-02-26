import { configureStore } from '@reduxjs/toolkit'
import companySlice from './features/companySlice'
// import { RootState } from './types'

export const store = configureStore({
  reducer: {
    companyReducer: companySlice,
  },
})

export type AppDispatch = typeof store.dispatch