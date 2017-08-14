import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {

    var booksData = [
      {name: 'Book 1', price: 150},
      {name: 'Book 2', price: 300},
      {name: 'Book 3', price: 120},
      {name: 'Book 4', price: 133}
    ];


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Book shopping cart app</h2>
        </div>
        <Coursesales books={booksData}/>
      </div>
    );
  }
}

export default App;
