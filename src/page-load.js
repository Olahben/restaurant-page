const loadPage = () => {
  const content = document.querySelector('#content');

  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute(
    'href',
    'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap'
  );
  document.head.appendChild(link);

  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  const headerName = document.createElement('h1');
  headerName.classList.add('header-name');
  headerName.textContent = 'Margharita';
  header.append(headerName);
  header.style.backgroundColor = 'black';
  header.style.opacity = '0.2';
  headerName.style.color = 'white';
  headerName.style.fontFamily = 'Abril Fatface';
  headerName.style.fontWeight = '400';

  const nav = document.createElement('nav');
  nav.classList.add('nav');
  header.appendChild(nav);

  const home = document.createElement('span');
  home.textContent = 'Home';
  nav.style.color = 'white';

  const navMenu = document.createElement('span');
  navMenu.textContent = 'Menu';

  const about = document.createElement('span');
  about.textContent = 'About';

  nav.append(home, navMenu, about);

  const image = document.createElement('img');
  image.src = 'https://source.unsplash.com/random/300x300';

  content.append(header, image);

  for (let i = 0; i < 4; i++) {
    const para = document.createElement('p');
    para.classList.add('para');
    para.textContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vehicula eros, id sodales quam. Sed sodales magna eget velit cursus, ut rutrum risus vestibulum. Cras quis odio urna. Ut erat sapien, interdum viverra augue ut, aliquam pretium ipsum.';
    content.appendChild(para);
  }
};

export default loadPage;
