import React from 'react';

class Articleb extends React.Component {

  render () {
    var date = "8 сентября, 2019";

    return  (
      <div className="blocks-cont">

        <div className="block-wrap">
        <h4>Деньги - это золото, и ничто другое</h4>
        <p className="published"> {date} </p>
        <div className='block1'>
        </div>
        </div>

        <div className="block-wrap">
        <h4>Накопление серебра JPMorgan</h4>
        <p className="published"> {date} </p>
        <div className='block2'></div>
        </div>

        <div className="block-wrap">
        <h4>Золото - это магнит, Роберт Кийосаки</h4>
        <p className="published"> {date} </p>
        <div className='block3'> </div>
        </div>

        <div className="block-wrap">
        <h4>Миллиарды</h4>
        <p className="published"> {date} </p>
        <div className='block4'></div>
        </div>

      </div>
    );
  }
}



export default Articleb;
