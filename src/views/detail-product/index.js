import React, { Component } from 'react';
import api from '../../services/api';

export default class DetailProduct extends Component  {
  state = {
      product: {}
  };

  async componentDidMount(){

    const { id } = this.props.match.params;

    const response = await api.get(`/details-product.php?id=${id}`);

    this.setState({ product: response.data });
  }

  render(){
    const { product } = this.state;

    return (
      <div>
        <p>
          ID {product.id} <br />
          Description {product.description} <br />
          Price {product.price} <br />
          Quantity {product.quantity} <br />
        </p>
      </div>
    );
  }
}
