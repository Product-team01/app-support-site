import React, { Component } from 'react';
import './App.css';
import './reveal.css';

class Title extends Component {
  render() {
    return (
      <div>
        <main className="containerreveal">
      
          <section className="animation">
            <div className="first"><div> Welcome to </div></div>
            <div className="second"><div>VueLearn</div></div>
            <div className="third"><div></div>Welcome to </div>
          </section>
        </main>
     
      </div>
    );
  }
}

export default Title;
