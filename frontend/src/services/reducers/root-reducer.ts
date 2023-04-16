import { combineReducers } from 'redux'
import flatSlice from '../slices/flatSlice'
import regionsSlice from '../slices/regionsSlice'

export const rootReducer = combineReducers({
  flatData: flatSlice,
  regionData: regionsSlice,
})

export type RootState = ReturnType<typeof rootReducer>
