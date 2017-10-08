require('../styles/application.scss');

const start = () => {
  /* Call rendering function */
  renderHeader();
  renderNavigation();
  renderContent();
  renderFooter();
  /* Render content when the page hash changes */
  if ("onhashchange" in window) {
    window.onhashchange = start;
  }
};

/* Render Header */
const renderHeader = () => {
  const content = require('../content/header.html');
  const header = document.querySelector('header');
  header.innerHTML = content;
};

const toggleHeader = (state) => {
  const header = document.querySelector('body');
  if (state && state.length > 0) {
    header.className = '';
    header.classList.add(state);
  } else {
    header.classList.toggle('active');
  }
};

/* Render Navigation */
const renderNavigation = () => {
  const content = require('../content/navigation.html');
  const nav = document.querySelector('nav');
  nav.innerHTML = content;
  activateNavigation();
};

/* Activate Navigation Button */
const activateNavigation = () => {
  const button = document.querySelector('button.menu');
  const menu = document.querySelector('nav ul');
  const logo = document.querySelector('nav .logo');
  logo.addEventListener('click', () => {
    window.location.href = '#home';
  });
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
  const content = require(`../content/${file}.html`);
  const main = document.querySelector('main');
  main.innerHTML = content;
  const state = (file === 'home') ? 'active' : 'inactive';
  toggleHeader(state);
  if (file === 'about') {
    document.querySelector('nav').classList.add('black');
  } else {
    document.querySelector('nav').classList.remove('black');
  }
};

/* Render Footer Content */
const renderFooter = () => {
  const content = require('../content/footer.html');
  const footer = document.querySelector('footer');
  footer.innerHTML = content;
};

start();
