import React, {Component} from 'react';
import MainMenu from '../main-menu';
import Settings from '../settings';
import Game from '../game';

import './menu.css';


export default class Menu extends Component {
  toggleFullScreen = () => {
    let elem = document.querySelector(".app");
    elem.requestFullscreen = elem.requestFullscreen || elem.mozRequestFullscreen || elem.msRequestFullscreen || elem.webkitRequestFullscreen;
    if (!document.fullscreenElement) {
      elem.requestFullscreen().then({}).catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  render() {
    const {activeSection, hasSavedGame, changeScreen, changeSetting, settings, gameField, updateField, newGame, gameMessage, gameEnded, elementsToHighlight, autoplay, moves, startedAutoplay } = this.props;
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
          autoplay={autoplay}
          moves={moves}
          gameField={gameField}
          updateField={updateField}
          gameMessage={gameMessage}
          gameEnded={gameEnded}
          startedAutoplay={startedAutoplay}
          elementsToHighlight={elementsToHighlight}
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
        <div className="menu__fullscreen" onClick={() =>{this.toggleFullScreen()}}></div>
        {currentSection}
      </div>
    )
  }
}