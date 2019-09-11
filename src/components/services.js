import React from 'react';

class Services extends React.Component {

  constructor() {
    super()
    this.state = {
      isChecked: "",
      packagePrice: "19",
      coinName: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
     isChecked: !this.state.isChecked,
     packagePrice: this.state.isChecked ? 19 : 33,
     coinName: this.state.isChecked ? '' : 'Американский Орел ',
     coinDetail: this.state.isChecked ? '' : 'Серебро 99.9% 1oz (31.1г)'
    })
  }

  getStyle = () => {
    return {
      filter: this.state.isChecked ? 'none' : 'opacity(42%)'
    }
  }
  render () {
  var style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  var coinStyle = {
      display: 'block',
      filter: 'opacity(42%)'
  }
    return (
      <div style={style}>
        <div className="priceColumn">
          <h4>Практическое пособие</h4>
          <div className='priceBlock'>
            <p className="priceP">{this.state.packagePrice}</p>
            <p className="priceC">USD</p>
            </div>
          <ul>
          <li>8 основных инструментов</li>
          <li>Преимущества и недостатки</li>
          <li>Контрагенты, брокеры</li>
          <li>Защита инвесторов</li>
          </ul>
          <input type='checkbox' onChange={this.handleChange} /> Добавить со скидкой 40%
          <div style={this.getStyle()} className="coinImage">
          <img width="161px" src="ag.png" />
          </div>
          <p>{this.state.coinName}</p>
          <p style={{marginBottom: '1rem'}}>{this.state.coinDetail}</p>
          <button className="buyButton">Купить</button>
        </div>

        <div className="priceColumn">
        <h4>Портфель биржевой</h4>
        <div className='priceBlock'>
        <p className="priceP">99</p>
        <p className="priceC">USD</p>
        </div>
        <ul>
        <li>11 позиций</li>
        <li>Текущая доходность позиции</li>
        <li>Изменение капитала портфеля</li>
        <li>Изменение долей позиций</li>
        <li>Подсчет количества акций</li>
        </ul>
        <button className="buyButton">Купить и скачать</button>
        </div>
        <div className="priceColumn">
        <h4>Управление капиталом</h4>
        <div className='priceBlock'>
        <p className="priceP">2/12</p>
        <p className="priceC">%</p>
        </div>
        <ul>
        <li>Управление брокерским счетом</li>
        <li>Без доступа к выводу капитала</li>
        <li>Реинвестирование доходов/дивидендов</li>
        <li>Постоянная связь с инвестором</li>
        <li>Оперативное изменение позиций</li>
        </ul>
        <button className="buyButton">Cвязаться</button>
        </div>
      </div>
    );
  }
}



export default Services;
