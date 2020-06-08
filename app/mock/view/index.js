import './index.css';
import SideBar from './sidebar';

class Controller {
  constructor() {
    this.sidebar = null;
  }

  initialize() {
    this.sidebar = new SideBar().initialize();
    const body = document.querySelector('body');
    body.appendChild(this.sidebar.getView());

    return this;
  }
}

export default Controller;
