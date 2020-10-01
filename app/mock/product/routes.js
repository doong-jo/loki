import { route } from '../flexRouter';

function routeProduct() {
  route('GET::/product/products/:id', ({ products }, { params }) =>
    products.find(params.id),
  );

  route('GET::/product/lodging-home', ({ products }) => products.all());
}

export default routeProduct;
