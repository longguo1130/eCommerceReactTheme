import React, { Component } from 'react';


class TopNav extends Component {
    render() {
      return (
        <nav className="top-nav"> 
            <a href="#">212.555.5555</a>
            <a href="#">Log In</a>
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="20" height="13" viewBox="0 0 20 13">
            <image id="hamburger" width="20" height="13" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAAKElEQVQ4jWNkYGD4z0BFwPj/P1XNY2Ciqmkj08DRWB4JBlI3lhkYGAC+EgkNXhpwQgAAAABJRU5ErkJggg=="/>
            </svg>

        </nav>
      );
    }
  }

  export default TopNav;