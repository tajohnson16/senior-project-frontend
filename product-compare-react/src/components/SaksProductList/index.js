import React from 'react'
import SaksProduct from '../SaksProduct'

const SaksProductList = ({ products, compare }) =>
  <div className="container">
    <div className="row mt-3">
      {products.map(product =>
        <SaksProduct key={product.id} product={product} compare={compare} />
      )}
    </div>
  </div>;

export default SaksProductList
