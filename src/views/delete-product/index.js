import React, { useState }from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

export default function DeleteProduct() {

  const { id } = useParams();

    const [setProduct] = useState();
      api
        .get(`/delete-product.php?id=${ id }`)
        .then((response) => setProduct(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

    return (
      <div>
        <p>
          Produto deletado!
        </p>
      </div>
    );
}
