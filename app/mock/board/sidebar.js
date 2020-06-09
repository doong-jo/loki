import apiManager from './apiManager';

class SideBar {
  constructor() {
    this.view = document.createElement('div');
    this.view.id = 'counter-api-sidebar';
    this.visibility = 'visible';
    this.apiManagerView = apiManager.getView();
  }

  initialize() {
    this.makeCloseButton();
    this.view.appendChild(this.apiManagerView);

    return this;
  }

  makeCloseButton() {
    this.toggleButton = document.createElement('button');
    this.toggleButton.classList.add('sidebar-button');
    this.toggleButton.innerHTML = '🔴';
    this.toggleButton.addEventListener('click', () => {
      this.toggle(this.visibility === 'visible' ? 'hidden' : 'visible');
    });

    this.view.appendChild(this.toggleButton);
  }

  toggle(draftVisibility) {
    if (draftVisibility === 'visible') {
      this.visibility = 'visible';
      this.view.classList.add(this.visibility);
      this.view.classList.remove(['hidden']);
      this.toggleButton.innerHTML = '🔴';

      return;
    }

    this.visibility = 'hidden';
    this.view.classList.add(this.visibility);
    this.view.classList.remove(['visible']);
    this.toggleButton.innerHTML = '🟢';
  }

  getView() {
    return this.view;
  }
}

export default SideBar;
