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
        <h2>Welcome!</h2>

        <h3> Quantity of products {products.length}</h3>

        <div>
        {
          products.map(product =>
            <article key={product.id}>
              <p>
                ID {product.id} <br />
                Description {product.description} <br />
                Price R$ {product.price} <br />
                Quantity {product.quantity} <br />

                <Link to={`/detail-product/${product.id}`}>Detalhes do produto.</Link>
                <br />
                <Link to={`/delete-product/${product.id}`}>Deletar produto.</Link>
              </p>
            </article>
          )
        }
        </div>

      </div>
    );
  }

}
