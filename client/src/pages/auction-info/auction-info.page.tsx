import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Container, Typography } from '@mui/material';
import { TRootReducer } from 'types/reducers';
import { getAuction, getAuctionList } from 'thunk/index';
import { getImagePath, getTimeLeftFromCurrent } from 'utils/index';
import Loader from 'components/loader';

const AuctionInfoPage = () => {
  const { auctions } = useSelector((state: TRootReducer) => state);
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const currentAuction = auctions.list.find(
    auction => auction.id == ((id as unknown) as number),
  );

  const { isEnd } = getTimeLeftFromCurrent(
    currentAuction?.finishTime as number,
  );

  // After reloading page find current auction by id
  useEffect(() => {
    if (auctions.list.length === 0) {
      dispatch(getAuctionList());
    }

    id && dispatch(getAuction(+id));
  }, []);

  if (auctions.isPending) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg">
      {isEnd && (
        <Alert severity="warning" sx={{ marginBottom: '16px' }}>
          Лот закрыт
        </Alert>
      )}
      <Typography variant="h5" mb={3}>
        Подробная информация об автомобиле {currentAuction?.title}
      </Typography>
      <img
        src={getImagePath(currentAuction?.imgUrl as string)}
        alt={currentAuction?.title || 'car'}
        style={{ width: '500px' }}
      />
      <Typography variant="subtitle1" mt={2}>
        Пробег: {auctions.auction.mileage} км
      </Typography>
    </Container>
  );
};

export default AuctionInfoPage;
