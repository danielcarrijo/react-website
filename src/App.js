import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Contact from './components/Contact.js'

import './style.css';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />

          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
