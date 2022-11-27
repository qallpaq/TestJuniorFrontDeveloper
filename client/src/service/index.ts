import { ApiService } from 'api/api-service';
import { TAuction, TAuctionMileage } from 'types/auction';

class AuctionsService {
  private _api = new ApiService();

  constructor() {
    this._api.baseURL(process.env.CONFIG.API_BASEPATH);
  }

  /**
   * Возвращает список аукционов, отфильтрованных по get-параметру search.
   */
  fetchAuctionList(filter = '') {
    return this._api.get<{ auctions: TAuction[] }>(
      `filterAuctions?search=${filter}`,
    );
  }

  /**
   * Возвращает информацию об отдельном аукционе, дополненную пробегом авто.
   */
  fetchAuction(auctionId: number) {
    return this._api.get<{ auction: TAuctionMileage }>(
      `/auction/:${auctionId}`,
    );
  }
}

const auctionsService = new AuctionsService();

export default auctionsService;
