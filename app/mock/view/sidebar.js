import ApiList from './apiList';

class SideBar {
  constructor() {
    this.view = document.createElement('div');
    this.view.id = 'counter-api-sidebar';
    this.visibility = 'visible';
    this.apiListView = new ApiList().getView();
  }

  initialize() {
    this.makeCloseButton();
    this.view.appendChild(this.apiListView);

    return this;
  }

  makeCloseButton() {
    const button = document.createElement('button');
    button.innerHTML = 'X';
    button.addEventListener('click', () => {
      this.toggle(button);
    });

    this.view.appendChild(button);
  }

  toggle(button) {
    if (this.visibility === 'visible') {
      this.visibility = 'hidden';
      this.view.classList.add(this.visibility);
      this.view.classList.remove(['visible']);
      button.innerHTML = '<';

      return;
    }

    this.visibility = 'visible';
    this.view.classList.add(this.visibility);
    this.view.classList.remove(['hidden']);
    button.innerHTML = 'X';
  }

  getView() {
    return this.view;
  }
}

export default SideBar;
