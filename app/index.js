import React from 'react';
import {render} from 'react-dom';
import Chat from './components/Chat'
import './assets/style/chat.sass'
import { AppContainer } from 'react-hot-loader';

const renderApp = Comment => {
  render(
      <AppContainer>
        <Comment/>
      </AppContainer>,
      document.querySelector('#mount_place')
  )
};

renderApp(Chat);

if(module.hot) {
  module.hot.accept('containers/Chat', () => {renderApp(Chat)});
}

// render (
//     <Chat/>,
//     document.querySelector('#mount_place')
// );

// https://codepen.io/drehimself/pen/KdXwxR
