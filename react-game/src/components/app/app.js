import React, {Component} from 'react';

import Footer from '../footer';
import Menu from '../menu';

import './app.css';

export default class App extends Component {
  state={
    activeSection:"main",
    hasSavedGame:false,
    settings:{
      altMode:false,
      altStartWith:false,
      withAI:false,
    },
    currentPlayer:'X',
    field:['','','','','','','','',''],
    sound:{
      music:{
        mute:false,
        value:1,
      },
      effects:{
        mute:false,
        value:1,
      }
    }
  }
  newGame = () => {
    this.resetGame();
    this.changeScreen('game');
  }
  resetGame = () => {
    this.setState(({field}) => {
      return {
        field: ['','','','','','','','',''],
      }
    })
  }
  changeScreen = (val) => {
    this.setState(({activeSection}) => {
      return {
        activeSection: val,
      }
    })
    
  }
  updateField = (position) => {
    this.setState(({field}) => {
      const newArray = [...field.slice(0, position),this.state.currentPlayer, ...field.slice(position + 1)];

      return {
        field: newArray,
      }
    })
    this.switchCurrentPlayer();
  }
  switchCurrentPlayer = () => {
    this.setState(({currentPlayer}) => {
      return{
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X'
      }
    })
  }
  changeSetting = (e) => {
    this.setState(({settings}) => {
      let newSettings = {...settings,[e.target.name]:e.target.checked}
      return {
        settings:newSettings
      }
    })
  }
  render(){
    const {activeSection, settings, field } = this.state;
    return (
      <div className="app">
        <div className="app__body">
          <Menu
            gameField={field}
            updateField={this.updateField}
            activeSection = {activeSection}
            changeScreen={this.changeScreen}
            settings={settings}
            newGame={this.newGame}
            changeSetting={this.changeSetting}/>
        </div>
        <Footer />
      </div>
    );
  }
}
