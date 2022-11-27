import { routes } from 'constants/routes';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuctionsPage from 'pages/auctions/auctions.page';
import AuctionInfoPage from 'pages/auction-info/auction-info.page';
import { withToast } from 'hocs/with-toast';

const RootRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.auctions} element={<AuctionsPage />} />
        <Route path={routes.auctionInfo} element={<AuctionInfoPage />} />
      </Routes>
    </Router>
  );
};

export default withToast(RootRoutes);
