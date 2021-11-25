import React, { useState }from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

export default function DetailProduct() {

  const { id } = useParams();

    const [product, setProduct] = useState();
      api
        .get(`/details-product.php?id=${ id }`)
        .then((response) => setProduct(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

    return (
      <div>
        <p>
          ID { product?.id } <br />
          Description { product?.description } <br />
          Price R$ { product?.price } <br />
          Quantity { product?.quantity } <br />

        </p>
      </div>
    );
}
