import { combineReducers, configureStore } from '@reduxjs/toolkit'
import searchReducer from './slice'

const store = configureStore({ reducer: combineReducers({ searchReducer }) })
export default store
