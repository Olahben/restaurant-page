const loadPage = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('h1');
  header.textContent = 'My Restaurant!';
  header.setAttribute('id', 'header');

  for (let i = 0; i < 4; i++) {
    const para = document.createElement('p');
    para.classList.add('para');
    para.textContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vehicula eros, id sodales quam. Sed sodales magna eget velit cursus, ut rutrum risus vestibulum. Cras quis odio urna. Ut erat sapien, interdum viverra augue ut, aliquam pretium ipsum.';
    content.appendChild('para');
  }

  const image = document.createElement('img');
  image.src = 'https://source.unsplash.com/random/300x300';

  content.append('header', 'image');
};

export default loadPage;
