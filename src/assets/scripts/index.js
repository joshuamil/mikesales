require('../styles/application.scss');

import * as config from '../config/content.json';

/* Start the Application */
const start = () => {
  // Get a router object
  const route = router();
  // Call rendering functions
  renderHeader(route);
  renderNavigation(route);
  renderContent(route);
  renderFooter(route);

  window.onscroll = () => {
    //stickyPanel();
    stickyPanel('nav', 'sticky', 100);
  };

};


/* Get Page Details */
const router = () => {
  const response = {};
  const hash = window.location.hash;
  response.name = (hash) ? hash.replace(/\#/g,'') : 'home';

  // Get content object from config
  response.content = config.pages.find((f) => {
    return f.name === response.name
  }) || config.pages[0];

  /* Render content when the page hash changes */
  if ("onhashchange" in window) {
    window.onhashchange = start;
  }
  return response;
};


/* Render Header */
const renderHeader = (route) => {
  const obj = route.content;
  const header = document.querySelector('header');
  const video = document.querySelector('.video-container');
  let state = 'inactive';
  if (obj.header) {
    const content = require('../content/header.html');
    state = 'active';
    header.innerHTML = content;
  }
  header.className = '';
  video.className = 'video-container';
  header.classList.add(state);
  video.classList.add(state);
};


/* Render Navigation */
const renderNavigation = (route) => {
  let li;
  const content = require('../content/navigation.html');
  const ul = document.createElement('ul');
  const nav = document.querySelector('nav');
  nav.innerHTML = content;
  config.pages.forEach( (item) => {
    if (item.hasOwnProperty('displayInNav') && item.displayInNav) {
      li = `<li><a href="#${item.name}">${item.title}</a></li>`;
      ul.innerHTML += li;
    }
  });
  nav.appendChild(ul);
  activateNavigation(nav);
};


/* Activate Navigation Button */
const activateNavigation = (nav) => {
  const button = document.querySelector('button.menu');
  const menu = nav.querySelector('ul');
  const logo = nav.querySelector('.logo');
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
const renderContent = (route) => {

  // Get content object from config
  const obj = route.content;

  // Set document content
  const content = require(`../content/${obj.file}`);
  const main = document.querySelector('main');
  main.innerHTML = content;

  // Set navigation state
  const nav = document.querySelector('nav');
  nav.className = '';
  nav.classList.add(obj.navigation);

};


/* Render Footer Content */
const renderFooter = (route) => {
  const obj = route.content;
  if (obj.footer) {
    const ul = document.createElement('ul');
    const content = require('../content/footer.html');
    const footer = document.querySelector('footer');
    footer.innerHTML = content;
  }
};


/* Make a panel sticky when it reaches the top of the page */
const stickyPanel = (target = '.execution', state = 'sticky', offset = 0) => {
  const panel = document.querySelector(target);
  const scrolled = window.pageYOffset;
  if (panel) {
    if ((panel.offsetTop + offset) <= scrolled) {
      panel.classList.add(state);
    } else {
      panel.classList.remove(state);
    }
  }
};

start();
