import React, {Component} from 'react';

import './game.css';

export default class Game extends Component {
  render(){
    const {gameField, changeScreen, updateField, gameMessage, gameEnded, elementsToHighlight, autoplay } = this.props;
    const fields = gameField.map((item,index) => {
      const canClick = !item ;
      let additionalClass='';
      switch(item){
        case 'X':
          additionalClass += ' game__field-section--x'
          break;
        case 'O':
          additionalClass += ' game__field-section--o'  
          break;
        default:
          additionalClass += '';
      }
      if(gameEnded && elementsToHighlight.indexOf(index) < 0) {
        additionalClass += ' game__field-section--semi-hidden';
      }
      return (
        <div className={`game__field-section${additionalClass}`}
          key={index} 
          onClick={canClick && !gameEnded ? () => updateField(index) : undefined}
          ></div>
      )
    })
    return(
      <div className="game">
        <div className="game__header">
          <div className="game__back underline" onClick={()=>{changeScreen('menu');}}>Back</div>
          <div className="game__autoplay underline" onClick={()=>{autoplay();}}>Autoplay</div>
          <div className="game-stats game__time">
            <span className=""></span>
          </div>
          <div className="game__moves "></div>
        </div>
        <div className="game__field">
          {fields}
        </div>
        <div className="game__message">{gameMessage}</div>
      </div>
    )
  }
}