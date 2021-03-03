import React, {Component} from 'react';

import Footer from '../footer';
import Menu from '../menu';

import './app.css';

export default class App extends Component {
  
  state={
    activeSection:"main",
    hasSavedGame:false,
    theme:'light',
    settings:{
      altMode:false,
      altStartWith:false,
      withAI:false,
    },
    gameEnded: false,
    gameMessage:"Player X turn",
    elementsToHighlight:[],
    startPlayer:'X',
    currentPlayer:'X',
    field:new Array(9).fill(null),
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
    this.setState(() => {
      return {
        elementsToHighlight:[],
        gameEnded:false,
        hasSavedGame: false,
        currentPlayer:this.state.startPlayer,
        gameMessage:`Player ${this.state.startPlayer} turn`,
        field: new Array(9).fill(null),
      }
    })
  }
  changeScreen = (val) => {
    this.setState(() => {
      return {
        activeSection: val,
      }
    })
    
  }
  updateField = (position) => {
    this.setState(({field}) => {
      const newArray = [...field.slice(0, position),this.state.currentPlayer, ...field.slice(position + 1)];

      return {
        hasSavedGame: true,
        field: newArray,
      }
    },()=>{
      if(this.state.field.indexOf(null) < 0 ){
        this.endGame('',true)
      } else {
        let winCondition = this.checkWinCondition();
        if(!winCondition){
          this.switchCurrentPlayer();
        } else {
          this.endGame(winCondition);
        }
      }
    })
  }
  endGame = (winCondition, tie = false) => {
    this.setState(() => {
      return {
        gameEnded:true,
        elementsToHighlight: tie ? [] : winCondition.combination,
        gameMessage: tie ? 'Its a tie!' : `Player ${winCondition.winner} won!`
      }
    })
  }
  switchStartPlayer = () => {
    this.setState(() => {
      let newStartPlayer = this.state.settings.altStartWith ? 'O' : 'X';
      return{
        startPlayer: newStartPlayer,
      }
    })
  }
  switchTheme = () => {
    this.setState(({theme}) => {
      return {
        theme: theme === 'light' ? 'dark' : 'light'
      }
    }, () => {
      document.documentElement.setAttribute('data-theme',this.state.theme);
    })
  }
  switchCurrentPlayer = () => {
    this.setState(({currentPlayer}) => {
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      return{
        gameMessage: `Player ${nextPlayer} turn`,
        currentPlayer: nextPlayer
      }
    })
  }
  changeSetting = (e) => {
    this.setState(({settings}) => {
      let newSettings = {...settings,[e.target.name]:e.target.checked}
      return {
        settings:newSettings
      }
    },() => {
      if(e.target.name === 'altStartWith' || e.target.name === 'withAI'){
        this.resetGame();
      }
      if (e.target.name === 'altStartWith'){
        this.switchStartPlayer();
      }
      if (e.target.name === 'altMode'){
        this.switchTheme();
      }
    })
  }
  
  checkWinCondition = () => {
    // source: https://reactjs.org/tutorial/tutorial.html#declaring-a-winner 
    const field = this.state.field; 
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        return {
          combination:[a, b, c],
          winner: field[a]
        };
      }
    }
    return null;
  }
  
  render(){
    const {activeSection, settings, field, hasSavedGame, gameMessage, gameEnded, elementsToHighlight} = this.state;
    return (
      <div className="app">
        <div className="app__body">
          <Menu
            gameField={field}
            updateField={this.updateField}
            activeSection = {activeSection}
            hasSavedGame = {hasSavedGame}
            changeScreen={this.changeScreen}
            settings={settings}
            gameEnded={gameEnded}
            elementsToHighlight={elementsToHighlight}
            newGame={this.newGame}
            gameMessage = {gameMessage}
            changeSetting={this.changeSetting}/>
        </div>
        <Footer />
      </div>
    );
  }
}
