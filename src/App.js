import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Store from './pages/coins-store';
import GoldInvesting from './pages/gold-investing';
import GoldStories from './pages/gold-news-articles-interviews';
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
      <Route exact path='/coins-store' component={Store} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/gold-investing' component={GoldInvesting} />
      <Route exact path='/gold-news-articles-interviews' component={GoldStories} />
      <Route exact path='/contacts' component={Contacts} />
      </div>

      <Footer />

      </div>
    </Router>
  );
}
}
export default App;
