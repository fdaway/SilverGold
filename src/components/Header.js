import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
  <div>
  <ul className='main-nav'>
      <li><Link to='/'>Серебро</Link></li>
      <li><Link to='/portfolio'>Портфель</Link></li>
      <li><Link to='/contacts'>Конакты</Link></li>
  </ul>
  </div>
    );
  }
}



export default Header;
