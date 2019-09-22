import React from 'react';
import ReactCardFlip from 'react-card-flip';


class CoinCard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      isFlipped: false,
      coinName: '',
      coinPrice: '',
      frontImage: 'coins/американский-серебрянный-орел-монета-2018-s.png',
      backImage: 'coins/американский-серебрянный-орел-монета-2018-b-s.png',
      frontImageAlt: '',
      backImageAlt: ''
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render () {

 const styles = {
   textAlign: 'center',
   margin: '0.77em'
 };

    return (
      <div className="coinCard" style={styles}>
        <h4>{this.props.coinName}</h4>
        <div>
        <ReactCardFlip  isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
        infinite={true}
        flipSpeedBackToFront={0.81}
        flipSpeedFrontToBack={0.81}>
       <div onMouseEnter={this.handleHover}   key="front">
       <img width="150px" src={this.props.frontImage} alt={this.props.frontImageAlt} />
       </div>

       <div onMouseEnter={this.handleHover} key="back">

       <img width="150px" src={this.props.backImage} alt={this.props.backImageAlt} />
       </div>
       </ReactCardFlip>
        </div>
        <div className="buySection">
          <p>от {this.props.coinPrice} грн</p>
          <input type="number" id="buyQuantity" min="1"  />
          <button>Купить</button>
        </div>
      </div>
    )
  }
}

export default CoinCard;
