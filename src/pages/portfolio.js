import React from 'react';

class Portfolio extends React.Component {
  render () {

    return (
      <div> <h1>Портфель</h1>
      <div className="centered">
      <div className="imAuto">
      <img src="/gold-investing-portfolio.png" alt="Инвестиционный портфель Золото и Серебро" />
      </div>
      <div className="garanties">
      <span className="str">Требования</span>
      <p>Доступ к основным мировым фондовым биржам. Рекомендуемый брокер предоставляет услуги более 30 лет, является публичной компанией с собственным капиталом более 6 млрд USD и многократно выбирался лучшим брокером США. Минимальный депозит составляет <span className="str">10,000 USD</span>.</p>
      <span className="str">Гарантии</span>
      <p>Безопасность сделок обеспечивается <span className="str">SEC</span>(Комиссия США по обмену ценными бумагами) и <span className="str">СFTC</span>(Комиссия по торговле товарными фьючерсами) - регуляторами, известными самым высоким уровнем надежности.</p>
      </div>
      </div>
        <div>

          <div className="wrapInfo">
           <div className="wrapp1">61% Акции добывающих компаний</div>
           <div className="wrapp">Акции реагируют на изменения рынка быстрее, чем сами металлы. Выбраны акции компаний, которые не хеджируют производство, то есть не заключают на бирже фьючерсы на понижение цен золота или серебра в качестве страховки. Такие компании могут терять при стагнирующих ценах на металлы, однако при возобновлении интереса их акции обычно показывают сверхприбыльность</div>
          </div>

          <div className="wrapInfo">
          <div className="wrapp1">21% Акции роста</div>
            <div className="wrapp">Акции роста, которые коррелируют с общим состоянием экономики, показывая хороший возврат на протяжении многих лет. Эти компании предоставляют глобальное снабжение водой, пищевые технологии и другие услуги. Они включены, чтобы сделать портфель более сбалансированным</div>
          </div>

          <div className="wrapInfo">
          <div className="wrapp1">18% Золото, Серебро</div>
          <div className="wrapp">Здесь мы выделяем два основных фактора. Во-первых, часть активов должна находиться в непосредственном физическом владении вне банковской системы. Во-вторых, цены на драг металлы более стабильны, чем акции, которые в случае кризиса могут изначально просесть как часть глобального индекса или в ходе срочной ликвидации активов инвесторами</div>
          </div>
        </div>

    </div>
    )
  }
}

export default Portfolio;
