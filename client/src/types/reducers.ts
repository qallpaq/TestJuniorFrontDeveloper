import { ErrorCodeEnum } from 'constants/enum';

import { TStatus } from 'types/common';

import { TAuction, TAuctionMileage } from './auction';

export type TAuctionsReducer = {
  isPending: boolean;
  isFirstLoading: boolean;
  list: TAuction[];
  auction: TAuctionMileage | Record<string, unknown>;
};

export type TFilterReducer = {
  isClicked: boolean;
  value: string;
};

export type TError = null | { code: ErrorCodeEnum };

export type TErrorReducer = {
  error: TError;
};

export type TToast = null | { status: TStatus; message: string };

export type TToastReducer = {
  toast: TToast;
  time: number;
};

export type TRootReducer = {
  auctions: TAuctionsReducer;
  filter: TFilterReducer;
  error: TErrorReducer;
  toast: TToastReducer;
};
