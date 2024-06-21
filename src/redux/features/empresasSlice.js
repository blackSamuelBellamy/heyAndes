import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../firebase/config'


export const fetchEmpresas = createAsyncThunk('empresas/fetchEmpresas', async () => {
  const querySnapshot = await getDocs(collection(db, 'empresas'))
  const empresas = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return empresas
})

const empresasSlice = createSlice({
  name: 'empresas',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmpresas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmpresas.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchEmpresas.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export default empresasSlice.reducer
