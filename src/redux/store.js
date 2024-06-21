import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
import collapsedReducer from './features/collapsedSlice'
import empresasReducer from './features/empresasSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    collapsed: collapsedReducer,
    empresas: empresasReducer
  },
})

export default store
