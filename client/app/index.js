import React from 'react';
import {render} from 'react-dom';
import App from './components/App'
import './assets/style/chat.sass'
import { AppContainer } from 'react-hot-loader';
import ws from './utill/ws'

window.ws = ws;

localStorage.removeItem('auth');

const renderApp = Comment => {
  render(
      <AppContainer>
        <Comment/>
      </AppContainer>,
      document.querySelector('#mount_place')
  )
};

renderApp(App);

if(module.hot) {
  module.hot.accept('containers/App', () => {renderApp(App)});
}
