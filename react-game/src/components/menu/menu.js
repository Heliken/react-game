import React, {Component} from 'react';
import MainMenu from '../main-menu';
import Settings from '../settings';
import Game from '../game';
import Records from '../records';

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
    const {activeSection, hasSavedGame, changeScreen, changeSetting, settings, gameField, updateField, newGame, gameMessage, gameEnded, elementsToHighlight, autoplay, moves, startedAutoplay, records, vocabulary, lang } = this.props;
    let currentSection;
    switch(activeSection){
      case 'main':
        currentSection = <MainMenu 
          changeScreen={changeScreen}
          newGame={newGame}
          vocabulary={vocabulary}
          lang={lang}
          hasSavedGame={hasSavedGame} />
        break;
      case 'settings':
        currentSection = <Settings
          changeScreen={changeScreen}
          settings={settings}
          vocabulary={vocabulary}
          lang={lang}
          changeSetting={changeSetting}
        />
        break;
      case 'game':
        currentSection = <Game
          vocabulary={vocabulary}
          lang={lang}
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
      case 'records':
        currentSection = <Records 
          vocabulary={vocabulary}
          lang={lang}
          records={records}
          changeScreen={changeScreen}/>
        break;
      default:
        currentSection = <MainMenu 
          vocabulary={vocabulary}
          lang={lang}
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