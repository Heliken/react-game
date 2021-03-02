import React, {Component} from 'react';
import MainMenu from '../main-menu';
import Settings from '../settings';

import './menu.css';


export default class Menu extends Component {
  render() {
    const {activeMenu, hasSavedGame } = this.props;
    switch(activeMenu){
      case 'main':
        return(
          <div className="menu">
            <MainMenu />
          </div>
        )
      case 'settings':
        return(
          <div className="menu">
            <Settings/>
          </div>
        )
        
      default:
        return(
          <div className="menu">
            <MainMenu />
          </div>
        )
    }
  }
}