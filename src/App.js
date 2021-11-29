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
            <li><Link to={`/register-product`}>Register Product</Link></li>
            <li><Link to={`/about`}>About</Link></li>
          </ul>
        </nav>
        <Footer />

        <Router />

      </BrowserRouter>
    </div>
  );
}

export default App;
