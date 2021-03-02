import React, {Component} from 'react';

import Footer from '../footer';
import Menu from '../menu';

import './app.css';

export default class App extends Component {
  state={
    activeSection:"menu",
    hasSavedGame:false,
    settings:{
      altMode:false,
      altStartWith:false,
      withAI:false,
    },
    sound:{
      music:{
        mute:false,
        value:1,
      },
      effects:{
        mute:false,
        value:1,
      }
    }
  }
  changeScreen = (val) => {
    this.setState(({activeSection}) => {
      return {
        activeSection: val,
      }
    })
    
  }
  changeSetting = (e) => {
    this.setState(({settings}) => {
      let newSettings = {...settings,[e.target.name]:e.target.checked}
      return {
        settings:newSettings
      }
    })
  }
  render(){
    const {activeSection, settings } = this.state;

    return (
      <div className="app">
        <div className="app__body">
          <Menu
            activeSection = {activeSection}
            changeScreen={this.changeScreen}
            settings={settings}
            changeSetting={this.changeSetting}/>
        </div>
        <Footer />
      </div>
    );
  }
}
