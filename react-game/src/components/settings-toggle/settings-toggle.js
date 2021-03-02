import React, {Component} from 'react';

import './settings-toggle.css';

export default class SettingsToggle extends Component {
  render() {
    const {title, options } = this.props;
    return(
      <div className='settings-toggle'>
        <div className='settings-toggle__title'>{title}</div>
        <div className='settings-toggle__body'>
          <div className='settings-toggle__option'>{options[0]}</div>
          <label className='settings-toggle__label'>
            <input name='' type='checkbox'/>
            <span></span>
          </label>
          <div className='settings-toggle__option'>{options[1]}</div>
        </div>
      </div>
    )
  }
}