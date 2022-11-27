import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box mt={2} mb={3}>
      <Divider />
      <Container maxWidth="lg">
        <Box mt={3} mb={2}>
          <Typography variant="h1" fontSize="h3.fontSize">
            Аукционы
          </Typography>
        </Box>
        <Divider />
      </Container>
    </Box>
  );
};

export default Header;
