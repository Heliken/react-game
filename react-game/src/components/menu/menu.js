import React, {Component} from 'react';
import MainMenu from '../main-menu';
import Settings from '../settings';
import Game from '../game';

import './menu.css';


export default class Menu extends Component {
  render() {
    const {activeSection, hasSavedGame, changeScreen, changeSetting, settings, gameField, updateField, newGame, gameMessage, gameEnded} = this.props;
    let currentSection;
    switch(activeSection){
      case 'main':
        currentSection = <MainMenu 
          changeScreen={changeScreen}
          newGame={newGame}
          hasSavedGame={hasSavedGame} />
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
          gameMessage={gameMessage}
          gameEnded={gameEnded}
        />
        break;
      default:
        currentSection = <MainMenu 
          changeScreen={changeScreen}
          newGame={newGame}
          hasSavedGame={hasSavedGame} />
    }
    return(
      <div className="menu">
        {currentSection}
      </div>
    )
  }
}