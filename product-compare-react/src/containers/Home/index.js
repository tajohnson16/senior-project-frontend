import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Compare, SaksProductList } from '../../components'
import HomePage from '../../components/HomePage'
import * as productActions from '../../actions/product'
import { connect } from 'react-redux'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const { products, actions } = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (

      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
          </div>
        </div>
        <SaksProductList products={products} compare={actions.compare} />
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts} />
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
