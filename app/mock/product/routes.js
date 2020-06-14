import flexRoute from '../flexRoute';

function route(server, apiConfig) {
  server.namespace = '/mock/product';

  flexRoute(
    {
      method: 'get',
      path: '/products/:id',
      routeCallback: (schema, request) => {
        const id = request.params.id;

        return schema.products.find(id);
      },
    },
    apiConfig,
  )(server);

  flexRoute(
    {
      method: 'get',
      path: '/lodging-home',
      routeCallback: (schema) => schema.products.all(),
    },
    apiConfig,
  )(server);
}

export default route;
