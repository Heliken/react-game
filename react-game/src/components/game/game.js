import React, {Component} from 'react';

import './game.css';

export default class Game extends Component {
  render(){
    const {gameField, changeScreen, updateField} = this.props;
    const fields = gameField.map((item,index) => {
      const canClick = item === '';
      let additionalClass;
      switch(item){
        case 'X':
          additionalClass = 'game__field-section--x'
          break;
        case 'O':
          additionalClass = 'game__field-section--o'  
          break;
        default:
          additionalClass = '';
      }
      return (
        <div className={`game__field-section ${additionalClass}`}
          key={index} 
          onClick={canClick ? () => updateField(index) : undefined}
          ></div>
      )
    })
    return(
      <div className="game">
        <div className="game__header">
          <div className="game__back" onClick={()=>{changeScreen('menu')}}>Back</div>
        </div>
        <div className="game__field">
          {fields}
        </div>
      </div>
    )
  }
}