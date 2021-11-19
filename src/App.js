import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Message from './components/message';

import Router from './routes';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <nav>
          <ul>
            <li><Link to={`/`}>Home Page</Link></li>
            <li><Link to={`/about`}>Sobre</Link></li>
          </ul>
        </nav>

        <Router />

        <Message message='This is a message from beyond~'/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
