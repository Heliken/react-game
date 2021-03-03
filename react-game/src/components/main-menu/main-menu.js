import React, {Component} from 'react';
import './main-menu.css';

export default class MainMenu extends Component {
  render(){
    const {changeScreen, newGame, hasSavedGame, vocabulary,lang} = this.props;
    return(
      <div className="menu__wrap">
        {hasSavedGame &&
          <div className="menu__unit" >
            <span className='underline' onClick={() => { changeScreen('game') }}>{vocabulary[lang].continue}</span>
          </div>
        }
        <div className="menu__unit">
          <span className='underline' onClick={() => { newGame() }}>{vocabulary[lang].newGame}</span>
        </div>
        <div className="menu__unit" >
          <span className="underline" onClick={() => { changeScreen('settings') }}>{vocabulary[lang].settings}</span>
        </div>
        <div className="menu__unit" >
          <span className="underline" onClick={() => { changeScreen('records') }}>{vocabulary[lang].records}</span>
        </div>
      </div>
    )
  }
}