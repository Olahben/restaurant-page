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

export default loadPage;
