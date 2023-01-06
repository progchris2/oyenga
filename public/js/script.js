import HomePageManage from './homePage';
import {ModalProgChris} from './components/modal'

// Web Components
customElements.define('modal-prog-chris', ModalProgChris)

// homepage menu management
const homePage = new HomePageManage();
homePage
    .toggleContentMenu()