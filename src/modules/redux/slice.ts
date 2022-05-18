import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const reducers = {
  // actions 선언
}

const { reducer } = createSlice({
  name: 'searchSlice',
  initialState,
  reducers,
})

const searchReducer = reducer

export default searchReducer
