import './index.css';
import SideBar from './sidebar';

class Board {
  constructor() {
    this.sidebar = new SideBar();
  }

  initialize(apiPathes) {
    this.sidebar.initialize('visible', apiPathes);

    const body = document.querySelector('body');
    body.appendChild(this.sidebar.getView());

    return this;
  }
}

const board = new Board();
export default board;
