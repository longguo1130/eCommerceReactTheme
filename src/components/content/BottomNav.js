import React, { Component } from 'react';


class TopNav extends Component {
    render() {
      return (
          <nav className="bottom-nav"> 
              &copy; 
              <div>2017 SPARTA PLAESENT</div> 
              <div className="dash">-</div> 
              <a href="#">instagram</a> 
              <div className="dash">-</div> 
              <a href="#">facebook</a> 
              <div className="dash">-</div> 
              <a href="#">twitter</a>
          </nav>
      );
    }
  }

  export default TopNav;