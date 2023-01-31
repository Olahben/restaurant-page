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

  const image = document.createElement('img');
  image.src = 'https://source.unsplash.com/random/200x250';

  infoContent.style.backgroundColor = '#cbcbcb';
  infoContent.style.color = 'white';
  infoContent.style.fontFamily = 'Abril Fatface';

  infoContent.style.display = 'flex';
  infoContent.style.flexDirection = 'column';
  infoContent.style.alignContent = 'center';
  infoContent.style.flexWrap = 'wrap';

  aboutContent.append(infoContent);
  infoContent.append(address, telNumber, image);
  content.append(aboutContent);
};

export default loadAbout;
