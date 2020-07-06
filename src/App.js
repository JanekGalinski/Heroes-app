import React from 'react';
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      heroes: [],
      heroeId: '',
      heroePhoto: '',
    }

  }

  getAndRenderHeroe = () => {
    axios.get('https://superheroapi.com/api/access-token/251').then(resp => {
      this.setState({heroeId: resp.data});
    })
  }
  getAndRenderHeroePhoto = () => {
    axios.get('https://superheroapi.com/api/access-token/251/image').then(resp => {
      this.setState({heroePhoto: resp.data});
    })
  }

  componentDidMount() {
    this.getAndRenderHeroe();
    this.getAndRenderHeroePhoto();
  }

  render() {
    return (
      <main>
        <header>
         <h1>Heroes</h1>
        </header>
        
      </main>
    )
  }
}


export default App;
