import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    products: []
  }
  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/select-products.php');
    this.setState({ products : response.data.Products});
  }

  render(){
    const { products } = this.state;
    return(
      <div>
        <h1>Home</h1>
        <h2>Seja Bem-vindo!!</h2>

        <h3> Quantidade de produtos {products.length}</h3>

        <div>
        {
          products.map(product =>
            <article key={product.id}>
              <p>
                ID {product.id} <br />
                Description {product.description} <br />
                Price {product.price} <br />
                Quantity {product.quantity} <br />

                <Link to={`/detail-product/${product.id}`}>Detalhes do produto.</Link>
              </p>
            </article>
          )
        }
        </div>

      </div>
    );
  }

}
