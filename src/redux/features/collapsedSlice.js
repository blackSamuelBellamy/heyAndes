import { createSlice } from '@reduxjs/toolkit'

const collapsedSlice = createSlice({
  name: 'collapsed',
  initialState: {
    isCollapsed: true,
  },
  reducers: {
    toggleCollapse: (state) => {
      state.isCollapsed = !state.isCollapsed
    },
    setCollapse: (state, action) => {
      state.isCollapsed = action.payload
    },
  },
})

export const { toggleCollapse, setCollapse } = collapsedSlice.actions
export default collapsedSlice.reducer
