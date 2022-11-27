import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { TAuction } from 'types/auction';
import { getImagePath } from 'utils/index';
import { useTimer } from 'hoocs/use-timer';

import { Root, Title, Timer, Bid } from './styles';

type TProps = {
  onClick: () => void;
} & TAuction;

const Auction: React.FC<TProps> = ({
  title,
  bid,
  imgUrl,
  finishTime,
  id,
  onClick,
  ...rest
}) => {
  const { timer, isTimeEnd } = useTimer(finishTime);

  return (
    <Root
      img={getImagePath(imgUrl)}
      disabled={isTimeEnd}
      onClick={() => !isTimeEnd && onClick()}
      {...rest}
    >
      <Title>
        <Typography>{title}</Typography>
        <Timer>{timer}</Timer>
      </Title>
      {bid !== 0 && <Bid>Ставка: {bid} р</Bid>}
    </Root>
  );
};

const areEqual = (prev: TProps, next: TProps) => prev.bid === next.bid;

export default memo(Auction, areEqual);
