import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './../store/index'
import ChatWrap from './../containers/ChatWrap'

window.store = store;

class App extends Component {
    render() {
      return(
        <Provider store={store}>
          <div className="container clearfix">
            <ChatWrap/>
          </div>
        </Provider>
    )
  }
}

export default App;