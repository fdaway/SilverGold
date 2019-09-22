import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  render () {
    return (
      <div className='foot-nav'>
      <ul>
          <li><Link to='/'>Golden Gate, 2019</Link></li>
      </ul>
      </div>
    );
  }
}



export default Footer;
