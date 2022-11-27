import { ErrorCodeEnum } from 'constants/enum';

import { Dispatch } from 'redux';
import auctionsService from 'service/index';
import { setPending, fetchAuction, fetchAuctionList } from 'reducers/auctions';
import { setError } from 'reducers/error';
import { setToast } from 'reducers/toast';

export const getAuction = (auctionId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setPending(true));
    const { data } = await auctionsService.fetchAuction(auctionId);
    dispatch(fetchAuction(data.auction));
  } catch (error: any) {
    dispatch(setToast({ status: 'error', message: error.message }));
  } finally {
    dispatch(setPending(false));
  }
};

export const getAuctionList = (filter?: string) => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch(setPending(true));
    const { data } = await auctionsService.fetchAuctionList(filter);

    if (data.auctions.length === 0) {
      dispatch(setError({ code: ErrorCodeEnum.NO_AUCTIONS }));
    } else {
      dispatch(setError(null));
    }
    dispatch(fetchAuctionList(data.auctions));
  } catch (error: any) {
    dispatch(setToast({ status: 'error', message: error.message }));
  } finally {
    dispatch(setPending(false));
  }
};
