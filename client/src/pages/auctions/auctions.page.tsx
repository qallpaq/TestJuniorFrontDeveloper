import { ErrorCodeEnum } from 'constants/enum';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Divider, Grid } from '@mui/material';
import { getAuctionList } from 'thunk/index';
import { TRootReducer } from 'types/reducers';
import { withPolling } from 'hocs/with-polling';
import Auction from 'components/auction';
import Loader from 'components/loader';
import FilterForm from 'components/filter-form';
import AuctionsError from 'components/auctions-error';
import { isFirstLoading } from 'reducers/auctions';

const AuctionsPage = () => {
  const { auctions, error } = useSelector((state: TRootReducer) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const list = auctions.list;
  const isPending =
    auctions.isPending && auctions.isFirstLoading && list.length === 0; // Show loader only at first load

  const handleClick = (id: number) => navigate(`/${id}`);

  useEffect(() => {
    dispatch(getAuctionList());
    dispatch(isFirstLoading(false));
  }, []);

  if (isPending) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg">
      <FilterForm />
      <Divider sx={{ marginBottom: '24px', marginTop: '24px' }} />
      {error.error?.code === ErrorCodeEnum.NO_AUCTIONS ? (
        <AuctionsError />
      ) : (
        <Grid container={true} spacing={2}>
          {list?.map(auction => (
            <Grid item={true} key={auction.id}>
              <Auction
                onClick={() => handleClick(auction.id)}
                key={auction.id}
                {...auction}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default withPolling(AuctionsPage);
