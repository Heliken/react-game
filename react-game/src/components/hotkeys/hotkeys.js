import React, {Component} from 'react';

import './hotkeys.css';

export default class Hotkeys extends Component {
  render() {
    return(
      <div className='hotkeys'>
        <p>Continue - C</p>
        <p>New game - N</p>
        <p>Back - B</p>
        <p>Autoplay - A</p>
        <p>Settings - S</p>
      </div>
    )
  }
}