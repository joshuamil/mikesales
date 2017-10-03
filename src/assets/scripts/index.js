require('../styles/application.scss');

const start = () => {
  /* Call rendering function */
  renderNavigation();
  renderContent();
  renderFooter();
  /* Render content when the page hash changes */
  if ("onhashchange" in window) {
    window.onhashchange = start;
  }
};

/* Render Navigation */
const renderNavigation = () => {
  const content = require('../content/navigation.md');
  const nav = document.querySelector('nav');
  nav.innerHTML = content;
  activateNavigation();
};

/* Activate Navigation Button */
const activateNavigation = () => {
  const button = document.querySelector('button.menu');
  const menu = document.querySelector('nav ul');
  const logo = document.querySelector('nav .logo');
  button.addEventListener('click', (event) => {
    const btn = event.target;
    menu.classList.toggle('active');
    btn.classList.toggle('open');
    logo.classList.toggle('reverse');
  });
};

/* Render Markdown Content into HTML */
const renderContent = () => {
  const hash = window.location.hash;
  let file = (hash) ? hash.replace(/\#/g,'') : 'home';
  const content = require(`../content/${file}.md`);
  const main = document.querySelector('main');
  main.innerHTML = content;
};

/* Render Footer Content */
const renderFooter = () => {
  const content = require('../content/footer.md');
  const footer = document.querySelector('footer');
  footer.innerHTML = content;
};

start();
