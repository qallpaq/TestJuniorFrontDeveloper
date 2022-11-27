import React from 'react';
import { useSelector } from 'react-redux';
import { TRootReducer } from 'types/reducers';
import Toast from 'components/toast';

export const withToast = (Component: React.FC) => {
  function HOCToast(props: any) {
    const { toast } = useSelector((state: TRootReducer) => state.toast);

    return (
      <>
        {toast && <Toast />}
        <Component {...props} />
      </>
    );
  }

  return HOCToast;
};
