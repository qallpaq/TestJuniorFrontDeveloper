import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TToast, TToastReducer } from 'types/reducers';

const initialState: TToastReducer = {
  toast: null,
  time: 5000,
};

const toast = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast(state, action: PayloadAction<TToast>) {
      state.toast = action.payload;
    },
  },
});

export default toast.reducer;

export const { setToast } = toast.actions;
