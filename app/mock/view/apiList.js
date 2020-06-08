class ApiList {
  constructor() {
    this.view = document.createElement('div');
    this.view.id = 'counter-api-list';
    this.view.innerHTML = 'api list area';
  }

  getView() {
    return this.view;
  }
}

export default ApiList;
