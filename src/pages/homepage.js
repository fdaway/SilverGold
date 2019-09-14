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
        <div className="logo-image"></div>
        </div>

        <h3>Золотые резервы стран</h3>
        <div className="reserves">

        <div>
        <p>Китай</p>
        <ImageZoom
        image={{
        src: 'reserves/Китай-золотые-резервы.png',
        alt: 'Golden Gate Bridge',
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
        <p>Россия</p>
        <ImageZoom
        image={{
        src: 'reserves/золотые-резервы-России.png',
        alt: 'Golden Gate Bridge',
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
        <p>Индия</p>
        <ImageZoom
        image={{
        src: 'reserves/золотые-резервы-Индии.png',
        alt: 'Golden Gate Bridge',
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
  <p>Венгрия</p>
  <ImageZoom
  image={{
  src: 'reserves/золотые-резервы-Венгрия.png',
  alt: 'Golden Gate Bridge',
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
  <p>Казахстан</p>
  <ImageZoom
  image={{
  src: 'reserves/золотые-резервы-Казахстан.png',
  alt: 'Golden Gate Bridge',
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
  <p>Турция</p>
  <ImageZoom
  image={{
  src: 'reserves/золотые-резервы-Турция.png',
  alt: 'Golden Gate Bridge',
  className: 'img',
  style: { width: '430px' }
  }}
  zoomImage={{
  src: 'reserves/золотые-резервы-Турция.png',
  alt: 'Golden Gate Bridge'
  }}
  />
  </div>



        </div>



      </div>
  );
}

}
export default Homepage;
