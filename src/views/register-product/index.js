import React, { Component } from 'react';
import api from '../../services/api';

export default class RegisterProduct extends Component{

  constructor(props){
    super(props);

    this.state = {
      description: '',
      price: 0,
      quantity: 0
    };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    console.log("name: "+name);

    this.setState({
      [name]:value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("state -> " + this.state);
    this.registerProduct();
  }

  registerProduct = async () => {

    await api.post('/create-products.php', this.state)
    .then(response =>{
      alert("OK");
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  };

  render(){
    return(
      <div>
      <h2>Cadastro de Produtos</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Description:
            <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
            name="price"
            type="text"
            value={this.state.price}
            onChange={this.handleInputChange} />
        </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
            name="quantity"
            type="text"
            value={this.state.quantity}
            onChange={this.handleInputChange} />
        </label>
        </div>

        <input type="submit" value="Register" />
      </form>
      </div>
    )
  }
}
