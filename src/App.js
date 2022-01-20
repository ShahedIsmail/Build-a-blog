import React from 'react';
import Navber from './components/Navber.js';
import Card from './components/card.js';
import Example from './components/Example.js';
import Footer from './components/footer.js'
import Discription from './components/Discription.js'
import Picture from './components/Picture.js'
import './App.css';
import card from './components/card.js';

function App() {
  return (
    <div>
      <header>
       <Navber/>
      </header>
      <div class="container">
        <h1 class="section-title"><Picture/></h1>
        <ul class="cards">
          <li class="cards-item quarter">
            <div class="card">
              <div class="card-content">
                <div class="card-image"></div>
                <div class="card-container">
                  <div class="card-title"><Card/></div>
                  <p class="card-text"><Discription/></p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
                <div class="btn-block">
                  <button class="btn full">
                    <span role="img" aria-label="Comment">💬</span> 
                    <span class="small">[100]</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
         
        </ul>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
