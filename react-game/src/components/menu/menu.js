import React, {Component} from 'react';
import MainMenu from '../main-menu';
import Settings from '../settings';
import Game from '../game';

import './menu.css';


export default class Menu extends Component {
  render() {
    const {activeSection, changeScreen, changeSetting, settings, gameField, updateField, newGame } = this.props;
    let currentSection;
    switch(activeSection){
      case 'main':
        currentSection = <MainMenu 
          changeScreen={changeScreen}
          newGame={newGame} />
        break;
      case 'settings':
        currentSection = <Settings
          changeScreen={changeScreen}
          settings={settings}
          changeSetting={changeSetting}
        />
        break;
      case 'game':
        currentSection = <Game
          changeScreen={changeScreen}
          gameField={gameField}
          updateField={updateField}
        />
        break;
      default:
        currentSection = <MainMenu 
          changeScreen={changeScreen}
          newGame={newGame} />
    }
    return(
      <div className="menu">
        {currentSection}
      </div>
    )
  }
}