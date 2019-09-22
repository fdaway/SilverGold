import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
  <div className='main-nav'>
  <ul>
      <li><Link to='/'>Golden Gate</Link></li>
      <li><Link to='/coins-store'>Магазин монет</Link></li>
      <li><Link to='/gold-investing'>Биржевые инвестиции</Link></li>
      <li><Link to='/portfolio'>Портфель</Link></li>
        <li><Link to='/gold-investing'>Интервью Kitco</Link></li>
      <li><Link to='/gold-news-articles-interviews'>Новости/Cтатьи</Link></li>
      <li><Link to='/contacts'>Контакты</Link></li>
  </ul>
  </div>
    );
  }
}



export default Header;
