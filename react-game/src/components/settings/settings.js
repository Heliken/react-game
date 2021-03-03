import React, {Component} from 'react';

import SettingsToggle from '../settings-toggle';

import './settings.css';

export default class Settings extends Component {
  
  render() {
    const {changeScreen, changeSetting, settings,vocabulary,lang} = this.props;
    return(
      <div className="menu__wrap">
        <div className="menu__unit">
          <SettingsToggle 
            title={vocabulary[lang].settingsOptions.theme.title}
            name="altMode"
            options={vocabulary[lang].settingsOptions.theme.options}
            changeSetting={changeSetting}
            isChecked = {settings.altMode}
            />
        </div>
        <div className="menu__unit">
          <SettingsToggle 
            title={vocabulary[lang].settingsOptions.startAs.title}
            name="altStartWith"
            options={vocabulary[lang].settingsOptions.startAs.options}
            changeSetting={changeSetting}
            isChecked = {settings.altStartWith}
          />
        </div>
        <div className="menu__unit">
          <SettingsToggle 
            title={vocabulary[lang].settingsOptions.lang.title}
            name="lang"
            options={vocabulary[lang].settingsOptions.lang.options}
            isChecked = {settings.lang === 'ru'}
            changeSetting={changeSetting}
          />
        </div>
        <div className="menu__unit">
          <span className="underline" onClick={()=> changeScreen('menu')}>{vocabulary[lang].back}</span>
        </div>
      </div>
    )
  }
}