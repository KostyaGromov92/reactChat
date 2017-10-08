import React from 'react';
import {render} from 'react-dom';
import ChatComponents from './components/Chat'
import './assets/style/chat.sass'

render (
    <ChatComponents/>,
    document.querySelector('#mount_place')
);

// https://codepen.io/drehimself/pen/KdXwxR
