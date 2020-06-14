class ApiConfig {
  constructor() {
    this.apiPathes = [];
    this.routeStatuses = {};

    window.mockApis = {
      prefix: '/mock',
      get: {},
      post: {},
      put: {},
      delete: {},
      head: {},
      connect: {},
      options: {},
      trace: {},
      patch: {},
    };
  }

  registerApiPath(apiConfig) {
    this.apiPathes.push(apiConfig);
    this.toggleMockMode(apiConfig);
  }

  getApiStatus({ method, path }) {
    const code = this.routeStatuses[`${method}${path}`];

    if (code !== 200) {
      return { code };
    }

    return { code: 200 };
  }

  toggleMockMode({ isMock, method, path }) {
    if (isMock) {
      window.mockApis[method][path] = `${window.mockApis.prefix}${path}`;

      return;
    }
    window.mockApis[method][path] = undefined;
  }

  setMockResponseCode({ code, method, path }) {
    this.routeStatuses[`${method}${path}`] = code;
  }

  getApiPathes() {
    return this.apiPathes;
  }
}

const apiConfig = new ApiConfig();
export default apiConfig;
