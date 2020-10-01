import { Server, Model } from 'miragejs';

import { productData, routeProduct } from './product';
import board from './board';
import apiConfig from './apiConfig';
import flexRouter from './flexRouter';

const MockServer = new Server({
  models: {
    product: Model,
  },

  routes() {
    this.namespace = `/mock`;
    flexRouter.initialize(this);

    routeProduct();
  },
});

MockServer.passthrough('http://api3.dev-myrealtrip.com/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**/**/**');
MockServer.db.loadData({ ...productData });

board.initialize(apiConfig.getApiPathes());

export default MockServer;
