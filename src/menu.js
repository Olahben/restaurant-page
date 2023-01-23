const loadMenu = () => {
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

  menu.append(meal1, meal2, meal3, meal4, meal5, meal6);
};

export default { loadMenu };
