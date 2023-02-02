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

     font-family: 'Abril FatFace';

    `;
  });

  const mealNames = document.querySelectorAll('p');
  mealNames.forEach((name) => {
    name.style.cssText = `font-size: 24px;
    color: grey;
    `;
  });
};

export default loadMenu;
