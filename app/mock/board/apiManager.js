import apiConfig from '../apiConfig';

class ApiManager {
  constructor() {
    this.view = document.createElement('div');
    this.view.id = 'counter-api-list';
    this.view.innerHTML = '<h2>APIs<h2>';
    this.apiListView = null;
    // this.routeStatuses = {};
  }

  getView() {
    return this.view;
  }

  makeApiListView(apiPathes) {
    this.apiListView = document.createElement('div');
    for (const apiPath of apiPathes) {
      const apiView = this.makeApiView(apiPath);
      this.apiListView.appendChild(apiView);
    }

    this.view.appendChild(this.apiListView);
  }

  makeApiView({ isMock, method, path }) {
    const apiView = document.createElement('div');
    apiView.classList.add('api');
    apiView.innerHTML = `
      <b>${method.toUpperCase()}</b> ${path}
      <ul></ul>
    `;
    const ulTag = apiView.querySelector('ul');
    ulTag.appendChild(this.makeMockCheckBox({ isMock, method, path }));
    ulTag.appendChild(this.makeStatusInput({ method, path, code: 200 }));

    return apiView;
  }

  makeMockCheckBox({ isMock, method, path }) {
    const mockCheckBox = document.createElement('li');
    mockCheckBox.innerHTML = `
      if (👻) {<input id="${method}${path}-input-type" type="checkbox" />}
    `;
    const checkBoxElement = mockCheckBox.querySelector('input[type=checkbox]');
    checkBoxElement.checked = isMock;

    mockCheckBox.addEventListener('change', ({ target }) => {
      const isMock = target.checked;
      apiConfig.toggleMockMode({ isMock, method, path });
    });

    return mockCheckBox;
  }

  makeStatusInput({ method, path, initialStatusCode }) {
    const statusInput = document.createElement('li');
    statusInput.innerHTML = `
      statusCode: <input id="${method}${path}-input-status" type='number' value=${
      initialStatusCode || 200
    } min=100 max=504 />
    `;
    const inputElement = statusInput.querySelector('input');
    inputElement.addEventListener('change', ({ target }) => {
      const code = Number(target.value);
      apiConfig.setMockResponseCode({ code, method, path });
    });

    return statusInput;
  }
}

export default ApiManager;
