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

  let menuFlag = false;
  let aboutFlag = false;

  const removeHomeContent = () => {
    homeContent.style.display = 'none';
  };

  const removeMenuContent = () => {
    const menuContent = document.querySelector('#menu-content');
    menuContent.style.display = 'none';
  };

  const removeAboutContent = () => {
    const aboutContent = document.querySelector('#about-content');
    aboutContent.style.display = 'none';
  };

  const setMenuTab = () => {
    if (menuFlag) {
      const menuContent = document.querySelector('#menu-content');
      menuContent.style.display = 'block';
      currentTab = 'Menu';
      return 1;
    }
    menuFlag = true;
    loadMenu();
    currentTab = 'Menu';
  };

  const setAboutTab = () => {
    if (aboutFlag) {
      const aboutContent = document.querySelector('#about-content');
      aboutContent.style.display = 'block';
      currentTab = 'About';
      return 1;
    }
    aboutFlag = true;
    loadAbout();
    currentTab = 'About';
  };

  const setHomeTab = () => {
    homeContent.style.display = 'block';
    currentTab = 'Home';
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
        setMenuTab();
        return 1;
      }
      if (currentTab === 'Home' && tab.textContent === 'About') {
        removeHomeContent();
        setAboutTab();
        return 1;
      }
      if (currentTab === 'Menu' && tab.textContent === 'Home') {
        removeMenuContent();
        setHomeTab();
        return 1;
      }
      if (currentTab === 'Menu' && tab.textContent === 'About') {
        removeMenuContent();
        setAboutTab();
        return 1;
      }
      if (currentTab === 'About' && tab.textContent === 'Home') {
        removeAboutContent();
        setHomeTab();
        return 1;
      }
      if (currentTab === 'About' && tab.textContent === 'Menu') {
        removeAboutContent();
        setMenuTab();
        return 1;
      }
    });
  });
})();
