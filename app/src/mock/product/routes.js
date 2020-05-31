function route(server) {
  server.namespace = 'product';

  server.get('/:id', (schema, request) => {
    const id = request.params.id;

    return schema.products.find(id);
  });
  server.get('/list', (schema) => schema.products.all());
}

export default route;
