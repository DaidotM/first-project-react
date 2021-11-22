import './App.css';
import Header from './components/header';
import Footer from './components/footer';

import Router from './routes';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <nav id='main-nav'>
          <ul>
            <li><Link to={`/`}>Home Page</Link></li>
            <li><Link to={`/my-Components`}>Meus Componentes</Link></li>
            <li><Link to={`/about`}>Sobre</Link></li>
          </ul>
        </nav>

        <Router />

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
