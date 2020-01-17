
import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Sidebar from './sidebar.js';
import Content from './content.js';
class App extends Component{
render(){
  return(
    <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}
    


export default App;
