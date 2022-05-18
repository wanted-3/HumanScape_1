import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

type State = typeof initialState

const reducers = {
  // actions 선언

  setSearchInput: (state: State, action: PayloadAction<string>) => {
    const search = action.payload
    return { ...state, search }
  },
}

const { actions, reducer } = createSlice({
  name: 'searchSlice',
  initialState,
  reducers,
})

const searchReducer = reducer

export const { setSearchInput } = actions

export default searchReducer
