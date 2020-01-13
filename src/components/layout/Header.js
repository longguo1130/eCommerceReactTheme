import React, { Component } from 'react';
import TopNav from '../content/TopNav.js'
import logo from '../../images/logo.png'; 

class Header extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    }
  }
  componentDidMount() {
    window.onscroll = ()=> {
      if(window.pageYOffset === 0) {
        this.setState({ scrolled: false})
      } else {
        this.setState({ scrolled: true})
      }
    };
  }
  render() {
    return (
        <div>
          <div className={this.state.scrolled ? 'scrolled' : ''} id="header_fill"></div>
          <header className={this.state.scrolled ? 'scrolled' : ''}>
              <div className="content-wrapper">
                <a href="#" className="logo-link">
                    <img src={logo} className="logo"/>
                </a>
                <TopNav />
              </div>

          </header>
        </div>
    );
  }
  }

  export default Header;