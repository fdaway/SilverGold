import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  render () {
    return (
      <div>
      <ul className='foot-nav'>
          <li><Link to='/'>Gold Hub</Link></li>
          <li><Link to='/portfolio'>Портфель</Link></li>
          <li><Link to='/contacts'>Контакты</Link></li>
      </ul>
      </div>
    );
  }
}



export default Footer;
