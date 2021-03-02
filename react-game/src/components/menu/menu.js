import React, {Component} from 'react';
import MainMenu from '../main-menu';
import Settings from '../settings';

import './menu.css';


export default class Menu extends Component {
  render() {
    const {activeSection, changeScreen, changeSetting, settings } = this.props;
    let currentSection;
    switch(activeSection){
      case 'main':
        currentSection = <MainMenu changeScreen={changeScreen} />
        break;
      case 'settings':
        currentSection = <Settings
              changeScreen={changeScreen}
              settings={settings}
              changeSetting={changeSetting}
            />
        break;
      default:
        currentSection = <MainMenu changeScreen={changeScreen} />
    }
    return(
      <div className="menu">
        {currentSection}
      </div>
    )
  }
}