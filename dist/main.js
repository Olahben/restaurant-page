/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadAbout = () => {
  const content = document.querySelector('#content');

  const aboutContent = document.createElement('div');
  aboutContent.setAttribute('id', 'about-content');

  const infoContent = document.createElement('div');
  infoContent.classList.add('info-aboutContent');

  const address = document.createElement('p');
  address.textContent = 'Storgata 100A';
  address.classList.add('about-para');

  const telNumber = document.createElement('p');
  telNumber.textContent = 'Contact us at : +0 77 166 1223';
  telNumber.classList.add('about-para');

  infoContent.style.backgroundColor = '#cbcbcb';
  infoContent.style.color = 'white';
  infoContent.style.fontFamily = 'Abril Fatface';

  infoContent.style.display = 'flex';
  infoContent.style.flexDirection = 'column';
  infoContent.style.alignContent = 'center';
  infoContent.style.flexWrap = 'wrap';
  infoContent.style.backgroundImage = "url('https://source.unsplash.com/random/2000x1500')";

  aboutContent.append(infoContent);
  infoContent.append(address, telNumber);
  content.append(aboutContent);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadMenu = () => {
  const content = document.querySelector('#content');
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');

  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');

  const meal1 = document.createElement('div');
  meal1.classList.add('meal');
  const meal1Name = document.createElement('p');
  meal1Name.textContent = 'Margharita';
  meal1.textContent = 'Just tomato sauce and Mozarella';
  meal1.appendChild(meal1Name);

  const meal2 = document.createElement('div');
  meal2.classList.add('meal');
  const meal2Name = document.createElement('p');
  meal2Name.textContent = 'Kebab Pizza';
  meal2.textContent = 'Meat, corn, mozarella, ham, sauce, pepper';
  meal2.appendChild(meal2Name);

  const meal3 = document.createElement('div');
  meal3.classList.add('meal');
  const meal3Name = document.createElement('p');
  meal3Name.textContent = 'Crema';
  meal3.textContent = 'White sauce, shrimps, mozarella, chicken, lemon';
  meal3.appendChild(meal3Name);

  const meal4 = document.createElement('div');
  meal4.classList.add('meal');
  const meal4Name = document.createElement('p');
  meal4Name.textContent = 'Pomodoro';
  meal4.textContent = 'Jalapeno, pepper, carolina reaper, mozarella';
  meal4.appendChild(meal4Name);

  const meal5 = document.createElement('div');
  meal5.classList.add('meal');
  const meal5Name = document.createElement('p');
  meal5Name.textContent = 'Greek Pizza';
  meal5.textContent = 'Tomato sauce, olives, mozarella, onion, basil';
  meal5.appendChild(meal5Name);

  const meal6 = document.createElement('div');
  meal6.classList.add('meal');
  const meal6Name = document.createElement('p');
  meal6Name.textContent = 'Chicago Pizza';
  meal6.textContent = 'Tomato sauce, pepperoni, mozarella, thick crust';
  meal6.appendChild(meal6Name);

  menu.style.display = 'grid';
  menu.style.gridTemplateColumns = 'repeat(1, minmax(300px, 1fr))';
  menu.style.gridTemplateRows = 'repeat(6, minmax(200px, 1fr))';
  menu.style.gap = '3vw';
  menu.style.placeContent = 'center';
  menu.style.paddingLeft = '30%';
  menu.style.paddingRight = '30%';

  menu.append(meal1, meal2, meal3, meal4, meal5, meal6);
  menuContent.append(menu);
  content.append(menuContent);

  const meals = document.querySelectorAll('.meal');
  meals.forEach((meal) => {
    meal.style.cssText = `background-color: #F4EEFF;
     display: flex;
     flex-direction: column;
     margin-top: 5%;
     padding-left: 5%;
     padding-right: 10%;
     

     font-family: 'Abril FatFace';

     border-radius: 8px;

    `;
  });

  const mealNames = document.querySelectorAll('p');
  mealNames.forEach((name) => {
    name.style.cssText = `font-size: 24px;
    color: grey;
    `;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadPage = () => {
  const content = document.querySelector('#content');
  const homeContent = document.createElement('div');
  homeContent.setAttribute('id', 'home-content');

  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute(
    'href',
    'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap',
  );
  document.head.appendChild(link);

  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  const headerName = document.createElement('h1');
  headerName.classList.add('header-name');
  headerName.textContent = 'Margharita';
  header.append(headerName);

  header.style.backgroundColor = 'black'; // Style hader and headerName
  header.style.opacity = '0.2';
  headerName.style.color = 'white';
  headerName.style.fontFamily = 'Abril Fatface';
  headerName.style.fontWeight = '400';

  const nav = document.createElement('nav');
  nav.classList.add('nav');
  header.appendChild(nav);

  const home = document.createElement('span');
  home.classList.add('tab');
  home.textContent = 'Home';

  nav.style.color = 'white'; // Style nav text
  nav.style.color = 'white';
  nav.style.fontFamily = 'Abril Fatface';
  nav.style.fontWeight = '400';
  nav.style.fontSize = '130%';

  header.style.display = 'flex'; // Position header elements
  header.style.flexWrap = 'wrap';
  header.style.flexDirection = 'column';
  header.style.alignContent = 'center';

  nav.style.display = 'flex'; // Position nav elements
  nav.style.gap = '10%';
  nav.style.marginLeft = '-1%';

  const navMenu = document.createElement('span');
  navMenu.classList.add('tab');
  navMenu.textContent = 'Menu';

  const about = document.createElement('span');
  about.classList.add('tab');
  about.textContent = 'About';

  nav.append(home, navMenu, about);

  const image = document.createElement('img');
  image.src = 'https://source.unsplash.com/random/300x300';

  content.append(header, image, homeContent);
  homeContent.append(image);

  for (let i = 0; i < 4; i++) {
    const para = document.createElement('p');
    para.classList.add('para');
    para.textContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vehicula eros, id sodales quam. Sed sodales magna eget velit cursus, ut rutrum risus vestibulum. Cras quis odio urna. Ut erat sapien, interdum viverra augue ut, aliquam pretium ipsum.';
    content.appendChild(para);
    homeContent.appendChild(para);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXRDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtY29udGVudCcpO1xuXG4gIGNvbnN0IGluZm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2luZm8tYWJvdXRDb250ZW50Jyk7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdTdG9yZ2F0YSAxMDBBJztcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYXJhJyk7XG5cbiAgY29uc3QgdGVsTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZWxOdW1iZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyBhdCA6ICswIDc3IDE2NiAxMjIzJztcbiAgdGVsTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhcmEnKTtcblxuICBpbmZvQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2NiY2JjYic7XG4gIGluZm9Db250ZW50LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgaW5mb0NvbnRlbnQuc3R5bGUuZm9udEZhbWlseSA9ICdBYnJpbCBGYXRmYWNlJztcblxuICBpbmZvQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBpbmZvQ29udGVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gIGluZm9Db250ZW50LnN0eWxlLmFsaWduQ29udGVudCA9ICdjZW50ZXInO1xuICBpbmZvQ29udGVudC5zdHlsZS5mbGV4V3JhcCA9ICd3cmFwJztcbiAgaW5mb0NvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20vMjAwMHgxNTAwJylcIjtcblxuICBhYm91dENvbnRlbnQuYXBwZW5kKGluZm9Db250ZW50KTtcbiAgaW5mb0NvbnRlbnQuYXBwZW5kKGFkZHJlc3MsIHRlbE51bWJlcik7XG4gIGNvbnRlbnQuYXBwZW5kKGFib3V0Q29udGVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7XG4iLCJjb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVDb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1jb250ZW50Jyk7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gIGNvbnN0IG1lYWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lYWwxLmNsYXNzTGlzdC5hZGQoJ21lYWwnKTtcbiAgY29uc3QgbWVhbDFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWFsMU5hbWUudGV4dENvbnRlbnQgPSAnTWFyZ2hhcml0YSc7XG4gIG1lYWwxLnRleHRDb250ZW50ID0gJ0p1c3QgdG9tYXRvIHNhdWNlIGFuZCBNb3phcmVsbGEnO1xuICBtZWFsMS5hcHBlbmRDaGlsZChtZWFsMU5hbWUpO1xuXG4gIGNvbnN0IG1lYWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lYWwyLmNsYXNzTGlzdC5hZGQoJ21lYWwnKTtcbiAgY29uc3QgbWVhbDJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWFsMk5hbWUudGV4dENvbnRlbnQgPSAnS2ViYWIgUGl6emEnO1xuICBtZWFsMi50ZXh0Q29udGVudCA9ICdNZWF0LCBjb3JuLCBtb3phcmVsbGEsIGhhbSwgc2F1Y2UsIHBlcHBlcic7XG4gIG1lYWwyLmFwcGVuZENoaWxkKG1lYWwyTmFtZSk7XG5cbiAgY29uc3QgbWVhbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVhbDMuY2xhc3NMaXN0LmFkZCgnbWVhbCcpO1xuICBjb25zdCBtZWFsM05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lYWwzTmFtZS50ZXh0Q29udGVudCA9ICdDcmVtYSc7XG4gIG1lYWwzLnRleHRDb250ZW50ID0gJ1doaXRlIHNhdWNlLCBzaHJpbXBzLCBtb3phcmVsbGEsIGNoaWNrZW4sIGxlbW9uJztcbiAgbWVhbDMuYXBwZW5kQ2hpbGQobWVhbDNOYW1lKTtcblxuICBjb25zdCBtZWFsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZWFsNC5jbGFzc0xpc3QuYWRkKCdtZWFsJyk7XG4gIGNvbnN0IG1lYWw0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVhbDROYW1lLnRleHRDb250ZW50ID0gJ1BvbW9kb3JvJztcbiAgbWVhbDQudGV4dENvbnRlbnQgPSAnSmFsYXBlbm8sIHBlcHBlciwgY2Fyb2xpbmEgcmVhcGVyLCBtb3phcmVsbGEnO1xuICBtZWFsNC5hcHBlbmRDaGlsZChtZWFsNE5hbWUpO1xuXG4gIGNvbnN0IG1lYWw1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lYWw1LmNsYXNzTGlzdC5hZGQoJ21lYWwnKTtcbiAgY29uc3QgbWVhbDVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWFsNU5hbWUudGV4dENvbnRlbnQgPSAnR3JlZWsgUGl6emEnO1xuICBtZWFsNS50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIG9saXZlcywgbW96YXJlbGxhLCBvbmlvbiwgYmFzaWwnO1xuICBtZWFsNS5hcHBlbmRDaGlsZChtZWFsNU5hbWUpO1xuXG4gIGNvbnN0IG1lYWw2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lYWw2LmNsYXNzTGlzdC5hZGQoJ21lYWwnKTtcbiAgY29uc3QgbWVhbDZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZWFsNk5hbWUudGV4dENvbnRlbnQgPSAnQ2hpY2FnbyBQaXp6YSc7XG4gIG1lYWw2LnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgcGVwcGVyb25pLCBtb3phcmVsbGEsIHRoaWNrIGNydXN0JztcbiAgbWVhbDYuYXBwZW5kQ2hpbGQobWVhbDZOYW1lKTtcblxuICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIG1lbnUuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICdyZXBlYXQoMSwgbWlubWF4KDMwMHB4LCAxZnIpKSc7XG4gIG1lbnUuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9ICdyZXBlYXQoNiwgbWlubWF4KDIwMHB4LCAxZnIpKSc7XG4gIG1lbnUuc3R5bGUuZ2FwID0gJzN2dyc7XG4gIG1lbnUuc3R5bGUucGxhY2VDb250ZW50ID0gJ2NlbnRlcic7XG4gIG1lbnUuc3R5bGUucGFkZGluZ0xlZnQgPSAnMzAlJztcbiAgbWVudS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMzAlJztcblxuICBtZW51LmFwcGVuZChtZWFsMSwgbWVhbDIsIG1lYWwzLCBtZWFsNCwgbWVhbDUsIG1lYWw2KTtcbiAgbWVudUNvbnRlbnQuYXBwZW5kKG1lbnUpO1xuICBjb250ZW50LmFwcGVuZChtZW51Q29udGVudCk7XG5cbiAgY29uc3QgbWVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVhbCcpO1xuICBtZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgbWVhbC5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtY29sb3I6ICNGNEVFRkY7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgIFxuXG4gICAgIGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0RmFjZSc7XG5cbiAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgYDtcbiAgfSk7XG5cbiAgY29uc3QgbWVhbE5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncCcpO1xuICBtZWFsTmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIG5hbWUuc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgYDtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsImNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZUNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWNvbnRlbnQnKTtcblxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgJ2hyZWYnLFxuICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFicmlsK0ZhdGZhY2UmZGlzcGxheT1zd2FwJyxcbiAgKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1uYW1lJyk7XG4gIGhlYWRlck5hbWUudGV4dENvbnRlbnQgPSAnTWFyZ2hhcml0YSc7XG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyTmFtZSk7XG5cbiAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7IC8vIFN0eWxlIGhhZGVyIGFuZCBoZWFkZXJOYW1lXG4gIGhlYWRlci5zdHlsZS5vcGFjaXR5ID0gJzAuMic7XG4gIGhlYWRlck5hbWUuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICBoZWFkZXJOYW1lLnN0eWxlLmZvbnRGYW1pbHkgPSAnQWJyaWwgRmF0ZmFjZSc7XG4gIGhlYWRlck5hbWUuc3R5bGUuZm9udFdlaWdodCA9ICc0MDAnO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgbmF2LnN0eWxlLmNvbG9yID0gJ3doaXRlJzsgLy8gU3R5bGUgbmF2IHRleHRcbiAgbmF2LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgbmF2LnN0eWxlLmZvbnRGYW1pbHkgPSAnQWJyaWwgRmF0ZmFjZSc7XG4gIG5hdi5zdHlsZS5mb250V2VpZ2h0ID0gJzQwMCc7XG4gIG5hdi5zdHlsZS5mb250U2l6ZSA9ICcxMzAlJztcblxuICBoZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgLy8gUG9zaXRpb24gaGVhZGVyIGVsZW1lbnRzXG4gIGhlYWRlci5zdHlsZS5mbGV4V3JhcCA9ICd3cmFwJztcbiAgaGVhZGVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgaGVhZGVyLnN0eWxlLmFsaWduQ29udGVudCA9ICdjZW50ZXInO1xuXG4gIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAvLyBQb3NpdGlvbiBuYXYgZWxlbWVudHNcbiAgbmF2LnN0eWxlLmdhcCA9ICcxMCUnO1xuICBuYXYuc3R5bGUubWFyZ2luTGVmdCA9ICctMSUnO1xuXG4gIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIG5hdk1lbnUuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIG5hdk1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBhYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XG5cbiAgbmF2LmFwcGVuZChob21lLCBuYXZNZW51LCBhYm91dCk7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2Uuc3JjID0gJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20vMzAweDMwMCc7XG5cbiAgY29udGVudC5hcHBlbmQoaGVhZGVyLCBpbWFnZSwgaG9tZUNvbnRlbnQpO1xuICBob21lQ29udGVudC5hcHBlbmQoaW1hZ2UpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoJ3BhcmEnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID1cbiAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gYXQgdmVoaWN1bGEgZXJvcywgaWQgc29kYWxlcyBxdWFtLiBTZWQgc29kYWxlcyBtYWduYSBlZ2V0IHZlbGl0IGN1cnN1cywgdXQgcnV0cnVtIHJpc3VzIHZlc3RpYnVsdW0uIENyYXMgcXVpcyBvZGlvIHVybmEuIFV0IGVyYXQgc2FwaWVuLCBpbnRlcmR1bSB2aXZlcnJhIGF1Z3VlIHV0LCBhbGlxdWFtIHByZXRpdW0gaXBzdW0uJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vcGFnZS1sb2FkJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRBYm91dCBmcm9tICcuL2Fib3V0JztcblxubG9hZFBhZ2UoKTtcbi8vIGxvYWRNZW51KCk7XG4vLyBsb2FkQWJvdXQoKTtcblxuY29uc3Qgc3dpdGNoVGFiID0gKCgpID0+IHtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgbGV0IGN1cnJlbnRUYWIgPSAnSG9tZSc7XG4gIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtY29udGVudCcpO1xuXG4gIGxldCBtZW51RmxhZyA9IGZhbHNlO1xuICBsZXQgYWJvdXRGbGFnID0gZmFsc2U7XG5cbiAgY29uc3QgcmVtb3ZlSG9tZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaG9tZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCByZW1vdmVNZW51Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWNvbnRlbnQnKTtcbiAgICBtZW51Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUFib3V0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtY29udGVudCcpO1xuICAgIGFib3V0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IHNldE1lbnVUYWIgPSAoKSA9PiB7XG4gICAgaWYgKG1lbnVGbGFnKSB7XG4gICAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWNvbnRlbnQnKTtcbiAgICAgIG1lbnVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY3VycmVudFRhYiA9ICdNZW51JztcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBtZW51RmxhZyA9IHRydWU7XG4gICAgbG9hZE1lbnUoKTtcbiAgICBjdXJyZW50VGFiID0gJ01lbnUnO1xuICB9O1xuXG4gIGNvbnN0IHNldEFib3V0VGFiID0gKCkgPT4ge1xuICAgIGlmIChhYm91dEZsYWcpIHtcbiAgICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1jb250ZW50Jyk7XG4gICAgICBhYm91dENvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjdXJyZW50VGFiID0gJ0Fib3V0JztcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBhYm91dEZsYWcgPSB0cnVlO1xuICAgIGxvYWRBYm91dCgpO1xuICAgIGN1cnJlbnRUYWIgPSAnQWJvdXQnO1xuICB9O1xuXG4gIGNvbnN0IHNldEhvbWVUYWIgPSAoKSA9PiB7XG4gICAgaG9tZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY3VycmVudFRhYiA9ICdIb21lJztcbiAgfTtcblxuICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50VGFiID09PSAnSG9tZScgJiYgdGFiLnRleHRDb250ZW50ID09PSAnSG9tZScpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFRhYiA9PT0gJ01lbnUnICYmIHRhYi50ZXh0Q29udGVudCA9PT0gJ01lbnUnKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUYWIgPT09ICdBYm91dCcgJiYgdGFiLnRleHRDb250ZW50ID09PSAnQWJvdXQnKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUYWIgPT09ICdIb21lJyAmJiB0YWIudGV4dENvbnRlbnQgPT09ICdNZW51Jykge1xuICAgICAgICByZW1vdmVIb21lQ29udGVudCgpO1xuICAgICAgICBzZXRNZW51VGFiKCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUYWIgPT09ICdIb21lJyAmJiB0YWIudGV4dENvbnRlbnQgPT09ICdBYm91dCcpIHtcbiAgICAgICAgcmVtb3ZlSG9tZUNvbnRlbnQoKTtcbiAgICAgICAgc2V0QWJvdXRUYWIoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFRhYiA9PT0gJ01lbnUnICYmIHRhYi50ZXh0Q29udGVudCA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIHJlbW92ZU1lbnVDb250ZW50KCk7XG4gICAgICAgIHNldEhvbWVUYWIoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFRhYiA9PT0gJ01lbnUnICYmIHRhYi50ZXh0Q29udGVudCA9PT0gJ0Fib3V0Jykge1xuICAgICAgICByZW1vdmVNZW51Q29udGVudCgpO1xuICAgICAgICBzZXRBYm91dFRhYigpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50VGFiID09PSAnQWJvdXQnICYmIHRhYi50ZXh0Q29udGVudCA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIHJlbW92ZUFib3V0Q29udGVudCgpO1xuICAgICAgICBzZXRIb21lVGFiKCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUYWIgPT09ICdBYm91dCcgJiYgdGFiLnRleHRDb250ZW50ID09PSAnTWVudScpIHtcbiAgICAgICAgcmVtb3ZlQWJvdXRDb250ZW50KCk7XG4gICAgICAgIHNldE1lbnVUYWIoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==