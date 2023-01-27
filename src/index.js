import loadPage from './page-load';
import loadMenu from './menu';
import loadAbout from './about';

loadPage();
// loadMenu();
// loadAbout();

const switchTab = () => {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        
    });
  });
};
