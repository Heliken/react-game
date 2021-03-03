import React, {Component} from 'react';

import Footer from '../footer';
import Menu from '../menu';
import Hotkeys from '../hotkeys';

import './app.css';

export default class App extends Component {
  componentWillMount() {
    const defaultState = {
      activeSection:"main",
      hasSavedGame:false,
      theme:'light',
      settings:{
        altMode:false,
        altStartWith:false,
        withAI:false,
      },
      moves:0,
      startedAutoplay: false,
      gameEnded: false,
      gameMessage:"Player X turn",
      elementsToHighlight:[],
      startPlayer:'X',
      currentPlayer:'X',
      field:new Array(9).fill(null),
      records:[],
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
    const savedState = JSON.parse(localStorage.getItem('heliken-tic-tac-toe-data'));
    const appliedState = savedState ? savedState : defaultState;
    this.setState(()=>{
      return appliedState
    },() => {
      this.updateLocalStorage();
    })
  }
  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      let keyCode = e.code;
      switch(keyCode){
        case "KeyB":
          if(this.state.activeSection!=='main') this.changeScreen('main');
          break;
        case "KeyS":
          if(this.state.activeSection === 'main') this.changeScreen('settings');
          break;
        case "KeyN":
          if(this.state.activeSection === 'main') this.newGame();
          break;
        case "KeyC":
          if(this.state.activeSection==='main' && this.state.hasSavedGame) this.changeScreen('game');
          break;  
        case "KeyA":
          if(this.state.activeSection==='game') this.autoplay();
          break;
        default:
          break;
      }
    })
  }
  autoplayInterval

  autoplay = () => {
    this.resetGame();
    if(!this.state.startedAutoplay){
      this.setState(() => {
        return{
          startedAutoplay: true
        }
      },() => {
        this.updateLocalStorage();
      })
      this.autoplayInterval = setInterval(() => {
        const emptyField = this.getRandomEmptyField();
        if(emptyField || emptyField === 0){
          this.updateField(emptyField);
        }
      }, 500)
    }
  }
  updateLocalStorage = () => {
    localStorage.setItem('heliken-tic-tac-toe-data',JSON.stringify(this.state));
  }
  getRandomEmptyField = () => {
    const emptyFields = this.state.field.map((item, index) => item === null ? index: null ).filter((item)=> item !== null);
    const randomEmptyField = emptyFields[Math.floor(Math.random() * emptyFields.length)];
    return randomEmptyField
  }
  newGame = () => {
    this.resetGame();
    this.changeScreen('game');
  }
  resetGame = () => {
    this.setState(() => {
      return {
        moves:0,
        startedAutoplay:false,
        elementsToHighlight:[],
        gameEnded:false,
        hasSavedGame: false,
        currentPlayer:this.state.startPlayer,
        gameMessage:`Player ${this.state.startPlayer} turn`,
        field: new Array(9).fill(null),
      }
    },() => {
      this.updateLocalStorage();
    })
  }
  changeScreen = (val) => {
    if(!this.state.startedAutoplay){
      this.setState(() => {
        return {
          activeSection: val,
        }
      },() => {
        this.updateLocalStorage();
      })
    }
  }
  checkIfRecord = (recordObject) => {
    if(this.state.records.length > 9){
      if(recordObject.moves < this.state.records[this.state.records.length - 1]){
        this.addNewRecord(recordObject);
      }
    } else{
      this.addNewRecord(recordObject);
    }
  }
  addNewRecord = (recordObject) =>{
    let newRecords = [...this.state.records];
    newRecords.push(recordObject);
    newRecords.sort((a,b) => a.moves - b.moves);
    this.setState(()=>{
      return{
        records:newRecords.slice(0,9)
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
      this.updateMoves();
      let winCondition = this.checkWinCondition();
      if(!winCondition){
        if(this.state.field.indexOf(null) < 0 ){
          this.endGame('',true)
        } else {
          this.switchCurrentPlayer();
        }
      } else {
        this.endGame(winCondition);
      }
      this.updateLocalStorage();
    })
  }
  updateMoves = () => {
    this.setState(({moves})=>{
      return{
       moves: moves + 1
      }
    },() => {
      this.updateLocalStorage();
    })
  }
  endGame = (winCondition, tie = false) => {
    if(this.autoplayInterval) window.clearInterval(this.autoplayInterval);
    this.setState(() => {
      return {
        startedAutoplay: false,
        gameEnded:true,
        elementsToHighlight: tie ? [] : winCondition.combination,
        gameMessage: tie ? 'Its a tie!' : `Player ${winCondition.winner} won!`
      }
    },() => {
      if(!tie && winCondition){
        this.checkIfRecord({player:winCondition.winner,moves:this.state.moves});
      }
      this.updateLocalStorage();
    })
  }
  switchStartPlayer = () => {
    this.setState(() => {
      let newStartPlayer = this.state.settings.altStartWith ? 'O' : 'X';
      return{
        startPlayer: newStartPlayer,
      }
    },() => {
      this.updateLocalStorage();
    })
  }
  switchTheme = () => {
    this.setState(({theme}) => {
      return {
        theme: theme === 'light' ? 'dark' : 'light'
      }
    }, () => {;
      this.updateLocalStorage();
    })
  }
  switchCurrentPlayer = () => {
    this.setState(({currentPlayer}) => {
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      return{
        gameMessage: `Player ${nextPlayer} turn`,
        currentPlayer: nextPlayer
      }
    },() => {
      this.updateLocalStorage();
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
      this.updateLocalStorage();
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
    const {activeSection, settings, field, hasSavedGame, gameMessage, gameEnded, elementsToHighlight, moves, theme, startedAutoplay, records} = this.state;
    return (
      <div className="app" data-theme={theme}>
        <Hotkeys/>
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
            autoplay={this.autoplay}
            moves = {moves}
            gameMessage = {gameMessage}
            startedAutoplay = {startedAutoplay}
            records={records}
            changeSetting={this.changeSetting}/>
        </div>
        <Footer />
      </div>
    );
  }
}
