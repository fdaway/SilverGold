import React from 'react';
 
class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    fname: '',
    email: '',
    message: '',
    mailSent: false,
    error: null
  }
  this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
      <h1>Контакты</h1>

    <form action="/index.php" className="formCont"  >
      <label>Имя</label>
      <input type="text" id="fname" name="firstname" placeholder="Ваше имя.."
        value={this.state.fname}
        onChange={e => this.setState({ fname: e.target.value })}
      />


      <label>Email*</label>
      <input type="email" id="email" name="email" placeholder="Ваш email"
        value={this.state.email}
        onChange={e => this.setState({ email: e.target.value })}
      />


      <label>Сообщение*</label>
      <textarea id="message" name="message" placeholder="Ваше сообщение.."
        onChange={e => this.setState({ message: e.target.value })}
        value={this.state.message}
      ></textarea>
      <input className="submitB" type="submit" onClick={e => this.handleFormSubmit(e)} value="Отправить" />
  </form >
  </div>
    );
    }
}
export default Contacts;
