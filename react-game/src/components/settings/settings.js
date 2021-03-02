import React, {Component} from 'react';

import SettingsToggle from '../settings-toggle';

import './settings.css';

export default class Settings extends Component {
  
  render() {
    const {changeScreen, changeSetting, settings} = this.props;
    return(
      <div className="menu">
        <div className="menu__wrap">
          <div className="menu__unit">
            <SettingsToggle 
              title='Mode'
              name="altMode"
              options={['light','dark']}
              changeSetting={changeSetting}
              isChecked = {settings.altMode}
              />
          </div>
          <div className="menu__unit">
            <SettingsToggle 
              title='Start as'
              name="altStartWith"
              options={['X','O']}
              changeSetting={changeSetting}
              isChecked = {settings.altStartWith}
            />
          </div>
          <div className="menu__unit">
            <SettingsToggle 
              title='Players'
              name="withAI"
              options={['2 players','vs AI']}
              isChecked = {settings.withAI}
              changeSetting={changeSetting}
            />
          </div>
          <div className="menu__unit" onClick={()=> changeScreen('menu')}>Back</div>
        </div>
      </div>
    )
  }
}