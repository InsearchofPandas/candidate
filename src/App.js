import React, { Component } from 'react';
//import logo from './logo.svg';
import Grid from './components/Grid/Grid'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center my-2">
          <Grid />
        </div>
        <footer class="flex justify-center flex-col lg:flex-row w-full py-10 ">
          <a href="https://kylehumphrey.com" target="_blank" rel="noopener noreferrer" className="text-black no-underline px-4">
            Made by Kyle Humphrey
          </a>
          <a href="https://github.com/InsearchofPandas/candidate" target="_blank" rel="noopener noreferrer" className="text-black no-underline px-4">
            View Code on GitHub
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
