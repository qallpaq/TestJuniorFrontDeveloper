import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootReducer } from 'types/reducers';
import { setToast } from 'reducers/toast';

import { Root } from './styles';

const Toast = () => {
  const { toast, time } = useSelector((state: TRootReducer) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setToast(null));
    }, time);
  }, []);

  return <Root severity={toast?.status}>{toast?.message}</Root>;
};

export default Toast;
