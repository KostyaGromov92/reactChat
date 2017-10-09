import React, {Component} from 'react';
import './../assets/style/style.sass'
import ws from './../utill/ws'

export default (ChildComponent) => {
  return class AuthHoc extends Component {

    auth() {

      if(localStorage.getItem('auth')) return true;

      let name = prompt('Enter your name : ');

      if( !name || name.trim().length ) {
        return name;
      }

      localStorage.setItem('auth', name);
      ws.emit(name);
      return false;
    }

    noName() {
      return (
          <div className="noname-wrap">
            You didn't enter name :
            <button onClick={() => {window.location.reload()}}>try again ?</button>
          </div>
      )
    }

    render() {
      return(
          this.auth() ? <ChildComponent /> : this.noName()
      )
    }
  }
}