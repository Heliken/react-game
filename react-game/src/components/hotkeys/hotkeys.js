import React, {Component} from 'react';

import './hotkeys.css';

export default class Hotkeys extends Component {
  render() {
    const {vocabulary,lang} = this.props;
    return(
      <div className='hotkeys'>
        <p>{vocabulary[lang].hotkeys}:</p>
        <p>{vocabulary[lang].continue} - C</p>
        <p>{vocabulary[lang].newGame} - N</p>
        <p>{vocabulary[lang].back} - B</p>
        <p>{vocabulary[lang].autoplay} - A</p>
        <p>{vocabulary[lang].settings} - S</p>
      </div>
    )
  }
}