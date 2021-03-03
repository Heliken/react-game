import React, {Component} from 'react';

import './game.css';

export default class Game extends Component {
  shakeTile(e) {
    e.target.classList.add('game__field-section--shake');
    setTimeout(function(){
      e.target.classList.remove('game__field-section--shake')
    },200)
  }
  render(){
    const {gameField, changeScreen, updateField, gameMessage, gameEnded, elementsToHighlight, autoplay, moves, startedAutoplay } = this.props;
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
          onClick={canClick && !gameEnded && !startedAutoplay ? () => updateField(index) : this.shakeTile}
          ></div>
      )
    })
    return(
      <div className="game">
        <div className="game__header">
          <div className="game__back underline" onClick={()=>{changeScreen('menu');}}>Back</div>
          <div className="game__autoplay underline" onClick={()=>{autoplay();}}>Autoplay</div>
          <div className="game__stats">
            <div className="game__moves ">{moves}</div>
          </div>
        </div>
        <div className="game__field">
          {fields}
        </div>
        <div className="game__message">{gameMessage}</div>
      </div>
    )
  }
}