import './index.css';
import SideBar from './sidebar';

class Board {
  constructor() {
    this.sidebar = null;
  }

  initialize() {
    this.sidebar = new SideBar().initialize();
    this.sidebar.toggle('hidden');

    const body = document.querySelector('body');
    body.appendChild(this.sidebar.getView());

    return this;
  }
}

export default Board;
