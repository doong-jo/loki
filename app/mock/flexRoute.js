import { getRouteStatus, registerRoute } from './board/apiManager';

function flexRoute(server, path, routeCallback) {
  const fullPath = `${server.namespace}${path}`;
  registerRoute(fullPath);

  const interceptCallback = () => {
    const status = getRouteStatus(fullPath);
    if (status !== 200) {
      return () => status;
    }

    return routeCallback;
  };

  server.get(path, interceptCallback());
}

export default flexRoute;
