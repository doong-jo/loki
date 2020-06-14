const configs = {
  getApiPath: (method, path, directPath) => {
    const isMock = window.mockApis && window.mockApis[method][path];

    if (isMock) {
      return directPath
        ? `${window.mockApis.prefix}${directPath}`
        : window.mockApis[method][path];
    }

    return `http://api3.dev-myrealtrip.com${directPath || path}`;
  },
};

export default configs;
