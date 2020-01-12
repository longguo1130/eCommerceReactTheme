import React, { Component } from 'react';

import Header from './components/layout/Header.js'
import Main from './components/layout/Main.js'
import Footer from './components/layout/Footer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [
        {
          heroImageLink: '/images/hero1.png',
          heroTitle: 'Screening: DVF Secret Agent Part 1',
          heroDate: 'October 15, 2017',
          heroBody: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
        },
        {
          heroImageLink: '/images/hero2.png',
          heroTitle: 'Screening: DVF Secret Agent Part 2',
          heroDate: 'October 20, 2017',
          heroBody: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
        },
        {
          heroImageLink: '/images/hero3.png',
          heroTitle: 'Screening: DVF Secret Agent Part 3',
          heroDate: 'October 25, 2017',
          heroBody: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'
        }
        
      ],
      posts: [
        {
          postImageLink: '/images/post1.png',
          postDate: 'FEBRUARY 10 2017',
          postTitle: 'Bureaux exquisite delightful carefully curated soft power.',
          postLink: '#'
        },
        {
          postImageLink: '/images/post2.png',
          postDate: 'FEBRUARY 2 2017',
          postTitle: 'Sharp bureaux sleepy K-pop carefully curated.',
          postLink: '#'
        },
        {
          postImageLink: '/images/post3.png',
          postDate: 'JANUARY 27 2017',
          postTitle: 'St Moritz uniforms Beams.',
          postLink: '#'
        },
        {
          postImageLink: '/images/post6.png',
          postDate: 'JANUARY 12 2017',
          postTitle: 'Artisanal iconic cutting-edge business class.',
          postLink: '#'
        },
        {
          postImageLink: '/images/post4.png',
          postDate: 'JANUARY 21 2017',
          postTitle: 'Esse airport veniam ryokan soft power.',
          postLink: '#'
        },
        {
          postImageLink: '/images/post5.png',
          postDate: 'JANUARY 18 2017',
          postTitle: 'K-pop extraordinary.',
          postLink: '#'
        },
      ]
    };
  }
  render(){
    return (
      <div className="App">
        <Header/>
            <Main slides={this.state.hero} posts={this.state.posts}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
