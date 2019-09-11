import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";


import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/portfolio';
import Homepage from './pages/homepage';
import Contacts from './pages/contacts';

class App extends React.Component {


render () {
  return (
    <Router>
      <div className="App">
      <Header />
      <div className='container'>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contacts' component={Contacts} />
      </div>

      <Footer />

      </div>
    </Router>
  );
}
}
export default App;
