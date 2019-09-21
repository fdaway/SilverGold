import React from 'react';
import ImageZoom from 'react-medium-image-zoom';


class Homepage extends React.Component {

render () {
  var styles = {
    txt1: {
    fontSize: '4rem',
    marginBottom: '0px',
    marginTop: '0',
    padding: '10',
    paddingTop: 0
  },
  txt2: {
    marginBottom: '20px',
    marginTop: '-30px',
    padding: '10',
    fontSize: '1.40rem'
  },
    heading : {
    height: '94vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
  }
  return (
      <div >

        <div style={styles.heading}>
        <h1 style={styles.txt1}>Golden Gate</h1>
        <h2 style={styles.txt2}>Инвестиции в золото и серебро</h2>
        <div className="logo-image">
        <img src="/reserves/american-eagle-coins-gold-and-silver.png" alt="Американский Орел Золотая и Серебрянная монеты"/>
        </div>
        </div>

        <h3>Золотой резерв стран</h3>
        <div className="reserves">

        <div>
        <p className="country">Китай</p>
        <ImageZoom
        image={{
        src: 'reserves/China-gold-reserves-2019.png',
        alt: 'Золотые резервы Китая в 2019',
        className: 'img',
        style: { width: '430px' }
        }}
        zoomImage={{
        src: 'bridge-big.jpg',
        alt: 'Золотые резервы Китая в 2019'
        }}
        />
        </div>

        <div>
        <p className="country">Россия</p>
        <ImageZoom
        image={{
        src: 'reserves/Russia-gold-reserves-2019.png',
        alt: 'Золотые резервы России в 2019',
        className: 'img',
        style: { width: '430px' }
        }}
        zoomImage={{
        src: 'bridge-big.jpg',
        alt: 'Золотые резервы Китая в 2019'
        }}
        />
        </div>

        <div>
        <p className="country">Индия</p>
        <ImageZoom
        image={{
        src: 'reserves/India-gold-reserves-2019.png',
        alt: 'Золотые резервы Индии в 2019',
        className: 'img',
        style: { width: '430px' }
        }}
        zoomImage={{
        src: 'bridge-big.jpg',
        alt: 'Золотые резервы Китая в 2019'
        }}
        />
        </div>

  <div>
  <p className="country">Венгрия</p>
  <ImageZoom
  image={{
  src: 'reserves/Hungary-gold-reserves-2019.png',
  alt: 'Золотые резервы Венгрии в 2019',
  className: 'img',
  style: { width: '430px' }
  }}
  zoomImage={{
  src: 'bridge-big.jpg',
  alt: 'Золотые резервы Венгрии в 2019'
  }}
  />
  </div>

  <div>
  <p className="country">Казахстан</p>
  <ImageZoom
  image={{
  src: 'reserves/Kazakhstan-gold-reserves-2019.png',
  alt: 'Золотые резервы Казахстана в 2019',
  className: 'img',
  style: { width: '430px' }
  }}
  zoomImage={{
  src: 'bridge-big.jpg',
  alt: 'Golden Gate Bridge'
  }}
  />
  </div>

  <div>
  <p className="country">Турция</p>
  <ImageZoom
  image={{
  src: 'reserves/Turkey-gold-reserves-2019.png',
  alt: 'Золотые резервы Турции в 2019',
  className: 'img',
  style: { width: '430px' }
  }}
  zoomImage={{
  src: 'reserves/Turkey-gold-reserves-2019.png',
  alt: 'Золотые резервы Турции в 2019'
  }}
  />
  </div>



        </div>



      </div>
  );
}

}
export default Homepage;
