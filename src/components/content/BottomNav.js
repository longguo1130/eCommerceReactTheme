import React, { Component } from 'react';


class TopNav extends Component {
    render() {
      return (
          <nav className="bottom-nav"> 
              <div className="company-id">
              <div>&copy; 2017</div>
              <div className="emdash">&mdash;</div>
              <div>SPARTA PLAESENT</div> 
              <div className="dash">&ndash;</div> 
              </div>

              <div className="social-media-links">
                <a href="#">instagram</a> 
                <div className="dash">&ndash;</div> 
                <a href="#">facebook</a> 
                <div className="dash">&ndash;</div> 
                <a href="#">twitter</a>
              </div>

          </nav>
      );
    }
  }

  export default TopNav;