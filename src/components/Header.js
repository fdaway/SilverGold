import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
  <div>
  <ul className='main-nav'>
      <li><Link to='/'>Golden Gate</Link></li>
      <li><Link to='/coins-store'>Магазин монет</Link></li>
      <li><Link to='/gold-investing'>Биржевые инвестиции</Link></li>
      <li><Link to='/portfolio'>Портфель</Link></li>
      <li><Link to='/gold-news-articles-interviews'>Новости/Cтатьи/Интервью</Link></li>
      <li><Link to='/contacts'>Контакты</Link></li>
  </ul>
  </div>
    );
  }
}



export default Header;
