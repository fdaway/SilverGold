import React from 'react';

class Alex extends React.Component {
  render () {
  var style = {
      display: 'flex',
      justifyContent: 'space-evenly'
    }
    return (
      <div>

      <div style={style}>
      <img src='Александр-Мельник-золото.jpg' />
      <h2>Мельник Александр</h2>
      </div>

      </div>
    );
  }
}



export default Alex;
