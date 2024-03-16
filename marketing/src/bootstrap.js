import React from 'react';
import ReactDOM from 'react-dom';

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<h1>Hi there!</h1>, el);
};

const devRoot = document.querySelector('#_marketing-dev-root');

if (devRoot) {
  mount(devRoot);
}
