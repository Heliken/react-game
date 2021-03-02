import React, {Component} from 'react';

import Footer from '../footer';
import Menu from '../menu';
import Settings from '../settings';

import './app.css';

export default class App extends Component {
  state={
    activeMenu:"settings",
    hasSavedGame:false,
    settings:{
      mode:'light',
      startWith:"X",
      withAI:false,
    },
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
  render(){
    const {activeMenu, hasSavedGame } = this.state;
    const { settings } = this.state;
    return (
      <div className="app">
        <div className="app__body">
          <Menu 
            activeMenu = {activeMenu}
            hasSavedGame={hasSavedGame}/>
        </div>
        <Footer />
      </div>
    );
  }
}
