import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFilterReducer } from 'types/reducers';

const initialState: TFilterReducer = {
  isClicked: false,
  value: '',
};

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setClicked(state, action: PayloadAction<boolean>) {
      state.isClicked = action.payload;
    },
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export default filter.reducer;

export const { setValue, setClicked } = filter.actions;
