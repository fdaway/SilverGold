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
      frontImage= {'coins/американский-серебрянный-орел-монета-2018-s.png'}
      backImage= {'coins/американский-серебрянный-орел-монета-2018-b-s.png'}
      frontImageAlt = {'Американский Серебрянный Орел 1oz перед'}
      backImageAlt = {'Американский Серебрянный Орел 1oz зад'}
      />
      <CoinCard
      coinPrice = {49450}
      coinName = {'Американский Золотой Орел 1oz(33.1г)'}
      frontImage= {'coins/американский-золотой-орел-1-унция.png'}
      backImage= {'coins/американский-золотой-орел-монета-1-унция-зад.png'}
      frontImageAlt = {'Американский Золотой Орел 1oz перед'}
      backImageAlt = {'Американский Золотой Орел 1oz зад'}
      />
      <CoinCard
      coinPrice = {5750}
      coinName = {'Американский Золотой Орел 1/10oz(3.31г) 2019'}
      frontImage= {'coins/американский-золотой-орел-1-10-унция-монета.png'}
      backImage= {'coins/американский-золотой-орел-1-10-унция-монета-зад.png'}
      frontImageAlt = {'Американский Золотой Орел 1oz перед'}
      backImageAlt = {'Американский Золотой Орел 1oz зад'}
      />
     
      </div>
      </div>
    )
  }
}

export default Store;
