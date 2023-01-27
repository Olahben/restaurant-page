import loadPage from './page-load';
import loadMenu from './menu';
import loadAbout from './about';

loadPage();
// loadMenu();
// loadAbout();

const switchTab = (() => {
  const tabs = document.querySelectorAll('.tab');
  let currentTab = 'Home';
  const homeContent = document.querySelector('#home-content');
  const menuContent = document.querySelector('#menu-content');
  const aboutContent = document.querySelector('#about-content');

  const removeHomeContent = () => {
    homeContent.style.display = 'none';
  };

  const setCurrentTab = (tab) => {
    if (tab === menuContent) {
      loadMenu();
    }
    if (tab === aboutContent) {
      loadAbout();
    }
    if (tab === homeContent) {
      loadPage();
    }

    tab.style.display = 'block';
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (currentTab === 'Home' && tab.textContent === 'Home') {
        return 1;
      }
      if (currentTab === 'Home' && tab.textContent === 'Menu') {
        currentTab = 'Menu';
        removeHomeContent();
        setCurrentTab(menuContent);
      }
    });
  });
})();
