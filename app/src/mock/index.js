import { Server, Model } from 'miragejs';

import { productData, productRoutes } from './product';
import { orderData, orderRoutes } from './order';

const ProductServer = new Server({
  models: {
    product: Model,
    order: Model,
  },

  routes() {
    productRoutes(this);
    orderRoutes(this);
  },
});

ProductServer.db.loadData({ ...productData, ...orderData });

export default ProductServer;
