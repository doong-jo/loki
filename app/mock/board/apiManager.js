class ApiManager {
  constructor() {
    this.view = document.createElement('div');
    this.view.id = 'counter-api-list';
    this.view.innerHTML = 'api list area';
    this.routeStatuses = {};
  }

  getView() {
    return this.view;
  }

  getRouteStatus(fullPath) {
    const code = this.routeStatuses[fullPath];
    if (code && code !== 200) {
      return { code };
    }

    return 200;
  }

  registerRoute(fullPath) {
    this.routeStatuses[fullPath] = 200;
  }
}

const apiManager = new ApiManager();

export const getRouteStatus = (fullPath) => apiManager.getRouteStatus(fullPath);

export const registerRoute = (fullPath) => {
  apiManager.registerRoute(fullPath);
};

export default apiManager;
