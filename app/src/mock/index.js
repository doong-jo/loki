import { Server, Model } from 'miragejs';

import { productData, productRoutes } from './product';
import { orderData, orderRoutes } from './order';

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

MockServer.db.loadData({ ...productData, ...orderData });

export default MockServer;
