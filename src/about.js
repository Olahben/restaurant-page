const loadAbout = () => {
  const content = document.querySelector('#div');

  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'about-wrapper');

  const infoWrapper = document.createElement('div');
  infoWrapper.classList.add('info-wrapper');

  const address = document.createElement('p');
  address.textContent = 'Storgata 100A';
  address.classList.add('about-para');

  const telNumber = document.createElement('p');
  telNumber.textContent = 'Contact us at : +0 77 166 1223';
  telNumber.classList.add('about-para');

  const image = document.createElement('img');
  image.src = 'https://source.unsplash.com/random/200x250';

  infoWrapper.style.backgroundColor = '#cbcbcb';
  infoWrapper.style.color = 'white';

  wrapper.append(infoWrapper, address, telNumber, image);
  content.append(wrapper);
};

export default loadAbout;
