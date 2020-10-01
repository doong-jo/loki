const configs = {
  getApiPath: (method, path, directPath) => {
    const isMock = window.mockApis && window.mockApis[method][path];

    if (isMock) {
      return directPath
        ? `${window.mockApis.prefix}${directPath}`
        : window.mockApis[method][path];
    }

    return `${process.env.REACT_APP_API_DOMAIN}${directPath || path}`;
  },
};

export default configs;
