import React, {Component} from 'react';
import vocabulary from '../vocabulary';

import './sound.css';

export default class Sound extends Component {
  render() {
    const {vocabulary,lang,music, effects, setSoundValue} = this.props;
    return(
      <div className="sounds">
        <div className={`sounds-block ${music === 0 ? 'sounds-block--disabled' : ''}`}>
          <div className='sounds-block__title'>{`${vocabulary[lang].music}: `}</div>
          <label className='settings-toggle__label sounds-block__toggle'>
            <input name='music' type='checkbox' checked={music > 0} onChange={setSoundValue}/>
            <span></span>
          </label>
          <input name='music' value={music} className="sounds-block__range" type='range' min={0} max={1} step={0.1} onChange={setSoundValue}/>
        </div>
        <div className={`sounds-block ${effects === 0 ? 'sounds-block--disabled' : ''}`}>
          <div className='sounds-block__title'>{`${vocabulary[lang].sounds}: `}</div>
          <label className='settings-toggle__label sounds-block__toggle'>
            <input name='effects' type='checkbox' checked={effects > 0} onChange={setSoundValue}/>
            <span></span>
          </label>
          <input name='effects' value={effects} className="sounds-block__range" type='range' min={0} max={1} step={0.1} onChange={setSoundValue}/>
        </div>
      </div>
    )
  }
}