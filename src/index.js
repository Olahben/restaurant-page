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

  const removeMenuContent = () => {
    menuContent.style.display = 'none';
  };

  const removeAboutContent = () => {
    aboutContent.style.display = 'none';
  };

  const setCurrentTab = (tab) => {
    if (tab === menuContent) {
      loadMenu();
      homeContent.style.display = 'none';
      aboutContent.style.display = 'none';
      currentTab = 'Menu';
    }
    if (tab === aboutContent) {
      loadAbout();
      homeContent.style.display = 'none';
      menuContent.style.display = 'none';
      currentTab = 'About';
    }
    if (tab === homeContent) {
      homeContent.style.display = 'block';
      menuContent.style.display = 'none';
      aboutContent.style.display = 'none';
      currentTab = 'Home';
    }

    tab.style.display = 'block';
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (currentTab === 'Home' && tab.textContent === 'Home') {
        return 1;
      }
      if (currentTab === 'Menu' && tab.textContent === 'Menu') {
        return 1;
      }
      if (currentTab === 'About' && tab.textContent === 'About') {
        return 1;
      }
      if (currentTab === 'Home' && tab.textContent === 'Menu') {
        removeHomeContent();
        setCurrentTab(menuContent);
      }
      if (currentTab === 'Home' && tab.textContent === 'About') {
        removeHomeContent();
        setCurrentTab(aboutContent);
      }
      if (currentTab === 'Menu' && tab.textContent === 'Home') {
        setCurrentTab(homeContent);
      }
    });
  });
})();
