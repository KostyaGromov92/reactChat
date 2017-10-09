import React, {Component} from 'react';
import PeopleList from './../containers/PeopleList';
import MessagesList from './../containers/MessagesList';
import {Provider} from 'react-redux'
import store from './../store/index'
window.store = store;

class Chat extends Component {
    render() {
      return(
        <Provider store={store}>
          <div className="container clearfix">
            <PeopleList/>
            <MessagesList/>
          </div>
        </Provider>
    )
  }
}

export default Chat;