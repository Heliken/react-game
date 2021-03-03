import React, {Component} from 'react';

import './records.css';

export default class Records extends Component {
  render() {
    const {records, changeScreen} = this.props;
    let elements;
    if(records.length<1){
      elements = <tr><td style={{textAlign: 'center'}} colSpan={3}>No data yet</td></tr>
    } else {
      elements = records.map((item,index) => {
        return(
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{`Player ${item.player}`}</td>
            <td>{item.moves}</td>
          </tr>
        )
      })
    }
    return(
      <div className="menu__wrap">
        <table className='records'>
          <thead>
            <tr>
              <td>№</td>
              <td>Winner</td>
              <td>Moves</td>
            </tr>
          </thead>
          <tbody>
            {elements}
          </tbody>
        </table>
        <div className="menu__unit">
          <span className="underline" onClick={()=> changeScreen('menu')}>Back</span>
        </div>
      </div>
    )
  }
}