import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import clientAPI from '../../apis/clients';

export const getClients = createAsyncThunk('fetch/clients', async () => {
  try {
    const response = await clientAPI.getAllClients();
    return response.data.clients_clients;
  } catch (error) {
    console.log(error);
  }
});

const clientSlice = createSlice({
  name: 'clients',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getClients.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default clientSlice.reducer;
