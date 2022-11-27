import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuctionList } from 'thunk/index';
import { TRootReducer } from 'types/reducers';

/**
 * Подписка на обновление данных (polling).
 */
export const withPolling = (Component: React.FC) => {
  function HOCPolling(props: any) {
    const { value } = useSelector((state: TRootReducer) => state.filter);
    const dispatch = useDispatch();
    const timeout = +process.env.CONFIG.POLLING_INTERVAL * 1000; // 20ms ==> 20sec

    useEffect(() => {
      // Polling only if filter clear
      const interval = setInterval(
        () => !value && dispatch(getAuctionList()),
        timeout,
      );

      return () => clearInterval(interval);
    }, [value]);

    return <Component {...props} />;
  }

  return HOCPolling;
};
