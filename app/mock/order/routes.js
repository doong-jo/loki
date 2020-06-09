function route(server) {
  server.namespace = 'mock/order';

  server.get('/:id', (schema, request) => {
    const id = request.params.id;

    return schema.orders.find(id);
  });
  server.get('/list', (schema) => schema.orders.all());
  server.post('/:id', (schema, request) => {
    schema.orders.create({
      id: request.params.id,
      productId: request.requestBody,
    });
    return {
      id: request.params.id,
      productId: request.requestBody,
    };
  });
}

export default route;
