import React, {Component} from 'react';
import './main-menu.css';

export default class MainMenu extends Component {
  render(){
    const {changeScreen, newGame, hasSavedGame} = this.props;
    return(
      <div className="menu__wrap">
        {hasSavedGame &&
          <div className="menu__unit" onClick={() => { changeScreen('game') }}>Continue</div>
        }
        <div className="menu__unit" onClick={() => { newGame() }}>New game</div>
        <div className="menu__unit" onClick={() => { changeScreen('settings') }}>Settings</div>
      </div>
    )
  }
}