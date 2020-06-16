import { Server, Model } from 'miragejs';

import board from './board';
import apiConfig from './apiConfig';

const MockServer = new Server({
  models: {
    product: Model,
  },

  routes() {
    productRoutes(this, apiConfig);
  },
});

MockServer.passthrough('http://api3.dev-myrealtrip.com/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**/**/**');
MockServer.db.loadData({ ...productData });

board.initialize(apiConfig.getApiPathes());

export default MockServer;
