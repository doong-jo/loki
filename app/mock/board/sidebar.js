import ApiManager from './apiManager';

class SideBar {
  constructor() {
    this.view = null;
    this.toggleButton = null;
    this.visibility = 'visible';
    this.apiManager = new ApiManager();
  }

  initialize(draftVisibility, apiPathes) {
    this.view = document.createElement('div');
    this.view.id = 'counter-api-sidebar';
    this.makeCloseButton();
    this.toggle(draftVisibility || 'hidden');

    this.apiManager.makeApiListView(apiPathes);
    this.view.appendChild(this.apiManager.getView());

    return this;
  }

  makeCloseButton() {
    // const toggleLayout = document.createElement('span');
    this.toggleButton = document.createElement('button');
    this.toggleButton.classList.add('sidebar-button');
    this.toggleButton.innerHTML = '▶';
    this.toggleButton.addEventListener('click', () => {
      this.toggle(this.visibility === 'visible' ? 'hidden' : 'visible');
    });

    // toggleLayout.appendChild(this.toggleButton);

    this.view.appendChild(this.toggleButton);
  }

  toggle(draftVisibility) {
    this.visibility = draftVisibility;
    if (draftVisibility === 'visible') {
      this.view.classList.remove(['hidden']);
      this.view.classList.add(this.visibility);

      return;
    }

    this.view.classList.remove(['visible']);
    this.view.classList.add(this.visibility);
  }

  getView() {
    return this.view;
  }
}

export default SideBar;
