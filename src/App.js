import React from 'react';
import axios from "axios";
import './App.css';
import { getHeroById } from './requests';

const myHeroesIds = [201, 140, 309]

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      heroList: [],
    }

  }

  getAndRenderHero = () => {
    const heroes = [];
    myHeroesIds.forEach(id => {
      getHeroById(id).then (response => {
        heroes.push(response.data)
      })
    })
    
  }

  componentDidMount = () => {
    this.getAndRenderHero();
  }

  render() {
    return (
      <div>
        <header>
         <nav>
           <div className="container container-nav">
             <span>My heroes app</span>
             <form>
               <input type="text"></input>
               <button>Search</button>
             </form>
           </div>
         </nav>
        </header>
        <main>
          <div className="container"></div>
            <section className="title">
              <h1 className="main-title">Heroes</h1>
            </section>
            <section className="container-heroes">
              
                {
                  this.state.heroList.map(hero => {
                    return (
                      <article className="about-hero" key={hero.id}>
                        <p className="about-hero-title">{hero.name}</p>
                        <img className="about-hero-img" src={hero.image.url} alt="hero"></img>
                      </article>
                    )
                  })
                }
      
            </section>
        </main>
        <footer>

        </footer>
        
      </div>
    )
  }
}


export default App;
