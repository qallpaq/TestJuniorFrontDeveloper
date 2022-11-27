import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TError, TErrorReducer } from 'types/reducers';

const initialState: TErrorReducer = {
  error: null,
};

const error = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<TError>) {
      state.error = action.payload;
    },
  },
});

export default error.reducer;

export const { setError } = error.actions;
