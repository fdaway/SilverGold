import React from 'react';

class Contacts extends React.Component {

  constructor() {
    super()
    this.state = {
      firstName: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }
  render () {
    return (
        <div >
        <h1>Конакты</h1>
        <form>
          <input type="text" placeholder="Имя" onChange={this.handleChange} />
          <input type="text" placeholder="Фамилия" />
        </form>
       <h2>{this.state.firstName}</h2>
        </div>
    );
  }
}
export default Contacts;
