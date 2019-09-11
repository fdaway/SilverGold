import React from 'react';
import Articleb from '../components/articleb';
import Services from '../components/services';
import ImageZoom from 'react-medium-image-zoom';

class Homepage extends React.Component {
render () {
  var styles= {
    marginBottom: '70px',
    marginTop: '0'
}
  var thisHeader = {
height: '96vh',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
flexDirection: 'column'
  }
  return (
      <div >

        <div style={thisHeader}>
        <div className="logo-image"></div>
        <h1 style={styles}>Инвестиции в золото и серебро</h1>
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

        <h3>4 истории</h3>
        <div>
        <Articleb />
        </div>

        <h3>Услуги</h3>
        <div>
        <Services />
        </div>

      </div>
  );
}

}
export default Homepage;
