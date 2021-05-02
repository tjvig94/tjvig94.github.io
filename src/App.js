import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
    </div>
    
  );
}

export default App;
