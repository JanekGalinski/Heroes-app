import React from 'react';
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

  getAndRenderHero = async () => {
    const heroes = [];
    
    for (const id of myHeroesIds) {
      const data = await getHeroById(id)
      heroes.push(data);
    }
    this.setState({heroList: heroes});
  }

  componentDidMount = () => {
    this.getAndRenderHero();
  }

  render() {
    return (
      <div className="body">
        <nav>
           <div className="container container-nav">
             <span>My heroes app</span>
             <form>
               <input className="nav-input" type="text" placeholder="Hero"></input>
               <button className="nav-button">Search</button>
             </form>
           </div>
        </nav>
        <main>
          <div className="landing-page">
            <div className="container">
              <section className="title">
                  <h1 className="main-title">Heroes</h1>
                </section>
                <section className="container-heroes">
                  
                    {
                      this.state.heroList.map(({data: hero}) => {
                        return (
                          <article className="about-hero" key={hero.id}>
                            <p className="about-hero-title">{hero.name}</p>
                            <img className="about-hero-img" src={hero.image.url} alt="hero"></img>
                          </article>
                        )
                      })
                    }
          
                </section>
            </div>
          </div>
        </main>
        <footer>
        </footer>
      </div>
    )
  }
}


export default App;
