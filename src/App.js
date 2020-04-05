import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Header from './components/Header';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Footer from './components/Footer';


import './style.css';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Footer />
      </div>
    );
  }
}

export default App;
