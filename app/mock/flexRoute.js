function flexRoute({ method, path, routeCallback }, apiConfig) {
  function commit(server) {
    const servicePath = server.namespace.split('/mock').pop();

    server[method](path, (schema, request) => {
      const { code } = apiConfig.getApiStatus({
        method,
        path: `${servicePath}${path}`,
      });

      if (code !== undefined && code !== 200) {
        return { code };
      }
      return routeCallback(schema, request);
    });

    apiConfig.registerApiPath({
      isMock: true,
      method,
      path: `${servicePath}${path}`,
    });
  }

  return commit;
}

export default flexRoute;
