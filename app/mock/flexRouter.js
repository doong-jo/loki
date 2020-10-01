import apiConfig from './apiConfig';

function splitCommand(routeCommand) {
  const splittedCommand = routeCommand.split('::');
  if (!splittedCommand || splittedCommand.length !== 2) {
    console.error('Invalid route command >> ', routeCommand);
  }
  const method = splittedCommand[0].toLowerCase();
  const path = splittedCommand[1];

  return {
    method,
    path,
  };
}

class FlexRouter {
  constructor() {
    this.targetServer = null;
  }

  initialize(server) {
    this.targetServer = server;
  }

  route(routeCommand, routeCallback) {
    const { method, path } = splitCommand(routeCommand);

    this.targetServer[method](path, (schema, request) => {
      const { code } = apiConfig.getApiStatus({
        method,
        path,
      });

      if (code !== undefined && code !== 200) {
        return { code };
      }

      return routeCallback(schema, request);
    });

    apiConfig.registerApiPath({
      isMock: true,
      method,
      path,
    });
  }
}

const flexRouter = new FlexRouter();
export const route = (routeCommand, routeCallback) => {
  flexRouter.route(routeCommand, routeCallback);
};
export default flexRouter;
