import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAuctionsReducer } from 'types/reducers';
import { TAuction, TAuctionMileage } from 'types/auction';

const initialState: TAuctionsReducer = {
  isPending: false,
  isFirstLoading: true,
  list: [],
  auction: {},
};

const auctions = createSlice({
  name: 'auctions',
  initialState,
  reducers: {
    setPending(state, action: PayloadAction<boolean>) {
      state.isPending = action.payload;
    },
    isFirstLoading(state, action: PayloadAction<boolean>) {
      state.isFirstLoading = action.payload;
    },
    fetchAuctionList(state, action: PayloadAction<TAuction[]>) {
      state.list = action.payload;
    },
    fetchAuction(state, action: PayloadAction<TAuctionMileage>) {
      state.auction = action.payload;
    },
  },
});

export default auctions.reducer;

export const {
  setPending,
  isFirstLoading,
  fetchAuctionList,
  fetchAuction,
} = auctions.actions;
