import { Server, Model } from 'miragejs';

import { productData, productRoutes } from './product';
import { orderData, orderRoutes } from './order';
import Board from './board';

const MockServer = new Server({
  models: {
    product: Model,
    order: Model,
  },

  routes() {
    productRoutes(this);
    orderRoutes(this);
  },
});

MockServer.passthrough('http://api3.dev-myrealtrip.com/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**/**');
MockServer.passthrough('http://api3.dev-myrealtrip.com/**/**/**/**');
MockServer.db.loadData({ ...productData, ...orderData });

new Board().initialize();

export default MockServer;
