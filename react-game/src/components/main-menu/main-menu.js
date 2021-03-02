import React, {Component} from 'react';
import './main-menu.css';

export default class MainMenu extends Component {
  render(){
    const {changeScreen} = this.props;
    return(
      <div className="menu__wrap">
        <div className="menu__unit">Continue</div>
        <div className="menu__unit">New game</div>
        <div className="menu__unit" onClick={() => { changeScreen('settings') }}>Settings</div>
      </div>
    )
  }
}