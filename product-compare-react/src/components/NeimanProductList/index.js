import React from 'react'
import NeimanProduct from '../NeimanProduct'

const NeimanProductList = ({ products, compare }) =>
  <div className="container">
    <div className="row mt-3">
      {products.map(product =>
        <NeimanProduct key={product.id} product={product} compare={compare} />
      )}
    </div>
  </div>;

export default NeimanProductList
