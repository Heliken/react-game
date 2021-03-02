import React, {Component} from 'react';

import SettingsToggle from '../settings-toggle';

import './settings.css';

export default class Settings extends Component {
  
  render() {
    const {onSettingChange} = this.props;
    return(
      <div className="menu">
        <div className="menu__wrap">
          <div className="menu__unit">
            <SettingsToggle 
              title='Mode'
              options={['light','dark']}
              />
          </div>
          <div className="menu__unit">
            <SettingsToggle 
              title='Start as'
              options={['X','O']}
            />
          </div>
          <div className="menu__unit">
            <SettingsToggle 
              title='Players'
              options={['2 players','vs AI']}
            />
          </div>
          <div className="menu__unit">Back</div>
        </div>
      </div>
    )
  }
}