import React, { Component } from 'react';

import Header from './components/layout/Header.js'
import Main from './components/layout/Main.js'
import Footer from './components/layout/Footer.js'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Header/>
            <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
