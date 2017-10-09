import React, {Component} from 'react';
import PeopleList from './PeopleList'
import MessagesList from './MessagesList'
import AuthHoc from './AuthHoc'

class ChatWrap extends Component {
  render() {
    return(
      <div className="container clearfix">
        <PeopleList/>
        <MessagesList/>
      </div>

    )
  }
}

export default AuthHoc(ChatWrap);