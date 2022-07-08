import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';
import './index.css';

const domElementGetter = () => document.getElementById('root');

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter,
});

export const { bootstrap, mount, unmount } = lifecycles;
