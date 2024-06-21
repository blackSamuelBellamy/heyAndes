import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkTheme: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme
    },
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload
    },
  },
})

export const { toggleTheme, setDarkTheme } = themeSlice.actions
export default themeSlice.reducer
