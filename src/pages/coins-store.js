import React from 'react';
import CoinCard from '../components/coinCard';

class Store extends React.Component {
  render () {
    return (
      <div>
      <h1>Магазин золотых и серебрянных монет</h1>
      <div className="store">
      <CoinCard
      coinPrice = {690}
      coinName = {'Американский Серебрянный Орел 1oz(33.1г)'}
      frontImage= {'coins/american-eagle-silver-coin-1-oz-front.png'}
      backImage= {'coins/american-eagle-silver-coin-1-oz-back.png'}
      frontImageAlt = {'Американский Серебрянный Орел 1oz перед'}
      backImageAlt = {'Американский Серебрянный Орел 1oz зад'}
      />
      <CoinCard
      coinPrice = {49450}
      coinName = {'Американский Золотой Орел 1oz(33.1г)'}
      frontImage= {'coins/american-eagle-gold-coin-front-1-oz-2.png'}
      backImage= {'coins/american-eagle-gold-coin-back-1-oz.png'}
      frontImageAlt = {'Американский Золотой Орел 1oz перед'}
      backImageAlt = {'Американский Золотой Орел 1oz зад'}
      />
      <CoinCard
      coinPrice = {5750}
      coinName = {'Американский Золотой Орел 1/10oz(3.31г) 2019'}
      frontImage= {'coins/american-eagle-gold-coin-front-1-10-oz.png'}
      backImage= {'coins/american-eagle-gold-coin-back-1-10-oz.png'}
      frontImageAlt = {'Американский Золотой Орел 1oz перед'}
      backImageAlt = {'Американский Золотой Орел 1oz зад'}
      />
      <CoinCard
      coinPrice = {720}
      coinName = {'Канадский Серебрянный Кленовый Лист 1oz(31.1г)'}
      frontImage= {'coins/silver-canadian-maple-leaf-coin-front.jpg'}
      backImage= {'coins/silver-canadian-maple-leaf-coin-back.jpg'}
      frontImageAlt = {'монета Канадский Серебрянный Кленовый Лист 1oz(31.1г), перед'}
      backImageAlt = {'монета Канадский Серебрянный Кленовый Лист 1oz(31.1г), зад'}
      />
      <CoinCard
      coinPrice = {49910}
      coinName = {'Канадский Золотой Кленовый Лист 1oz(31.1г)'}
      frontImage= {'coins/gold-canadian-maple-leaf-coin-front.jpg'}
      backImage= {'coins/gold-canadian-maple-leaf-coin-back.jpg'}
      frontImageAlt = {'монета Канадский Золотой Кленовый Лист 1oz(31.1г), перед'}
      backImageAlt = {'монета Канадский Золотой Кленовый Лист 1oz(31.1г), зад'}
      />
      <CoinCard
      coinPrice = {12450}
      coinName = {'Американский Серебрянный Орел туб 20 монет US Mint'}
      frontImage= {'coins/silver-american-eagle-tube-20-coins.jpg'}
      backImage= {'coins/treasury-united-states-mint-20-eagles-tube.jpg'}
      frontImageAlt = {'Туб на 20 монет Американский Серебрянный Орел'}
      backImageAlt = {'US Mint туб на 20 монет Американский Серебрянный Орел'}
      />

      <div className="deliveryTerms">
        <p>Доставка и оплата</p>
      Доставка по Новой Почте наложенным платежом для заказов до 15000грн. Заказы свыше 15000грн доставляются при по полной предоплате на счет ПриватБанка.
        <p>Качество товара и возврат</p>
        Все монеты соответствуют заявленной чистоте содержания золота или серебра. Качество монет - <span>uncirculated</span>, то  есть, не бывавшие в обращении.
        Важно понимать, что при этом монеты выглядят новыми, но могут иметь незначительные дефекты, допущенные при производстве.
        Монеты идеального внешнего вида относятся к категории BU - brilliant uncirculated, и их стоимость значительно выше стандартной.
        При доставке наложенным платежом вы имеете возможность проверить товар, однако, если вы планируете возврат,
        то делать это нужно исключительно в хлопковых/тканевых перчатках.
        <p>Сроки доставки</p>
        С момента подверждения заказа или оплаты монеты отправляются в течении 1-2 рабочих дней. Далее срок доставки зависит от Новой Почты и обычно составляет 2-3 рабочих дня.
      </div>

       <div className="deliveryLogos">

       <div><img width="90px" src="/nova-poshta-logo.jpg" /></div>
      <div><img width="150px" src="/ПриватБанк.png" /></div>

      </div>
      </div>
      </div>
    )
  }
}

export default Store;
