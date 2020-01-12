import React, { Component } from 'react';
import BottomNav from '../content/BottomNav.js';

class Footer extends Component {
    render() {
      return (
        <footer>
          <div className="content-wrapper">
            <BottomNav  />
          </div>

        </footer>
      );
    }
  }

  export default Footer;