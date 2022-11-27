import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Root = styled(Box)<{ img: string; disabled: boolean }>`
  cursor: ${p => (p.disabled ? 'no-drop' : 'pointer')};
  position: relative;
  width: 300px;
  height: 180px;
  border-radius: 5px;
  overflow: hidden;
  background-position: center center;
  background: round;
  background-image: url('${p => p.img}');

  &:before {
    z-index: 999;
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${p =>
      p.disabled ? 'rgba(108, 107, 107, 0.8)' : 'transparent'};
  }
`;

export const Title = styled(Box)`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${p => p.theme.palette.grey[200]};
`;

export const Timer = styled(Typography)`
  color: ${p => p.theme.palette.grey[600]};
`;

export const Bid = styled(Typography)`
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  padding: 5px;
  background: rgba(179, 179, 179, 0.8);
  border-radius: 5px 0 0 0;
`;
