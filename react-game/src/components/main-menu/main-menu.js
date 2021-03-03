import React, {Component} from 'react';
import './main-menu.css';

export default class MainMenu extends Component {
  render(){
    const {changeScreen, newGame, hasSavedGame} = this.props;
    return(
      <div className="menu__wrap">
        {hasSavedGame &&
          <div className="menu__unit" >
            <span className='underline' onClick={() => { changeScreen('game') }}>Continue</span>
          </div>
        }
        <div className="menu__unit">
          <span className='underline' onClick={() => { newGame() }}>New game</span>
        </div>
        <div className="menu__unit" >
          <span className="underline" onClick={() => { changeScreen('settings') }}>Settings</span>
        </div>
      </div>
    )
  }
}