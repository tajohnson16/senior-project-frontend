/**
 * Page to display Neiman Marcus shoes
 * 
 * @author Tim Johnson
 * Senior Project
 */

import React, { Component } from 'react';
import './styles.css';

/**
 * HTML/CSS styling of products on page
 */
const grids = {
    display: 'grid',
    grid: 'auto / auto auto auto',
    'grid-row-gap': '50px'
};

const grids2 = {
    display: 'grid',
    grid: 'auto / auto auto',
};

/**
 * Sum of product prices in collection
 */
var sumNeiman = 0;

/**
 * Number of products in collection
 */
var lenNeiman = 0;

/**
 * Average product price in collection
 */
var avgNeiman = 0;

/**
 * Dividing two numbers
 * 
 * @param {number} $a - Dividend
 * @param {number} $b - Divisor
 */
function divide($a, $b) {
    return ($a / $b);
}

class index extends Component {
    state = {
        data: [],
        id: 0,
        message: null,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
    };

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            /*let interval = setInterval(this.getDataFromDb, 1000);*/
            this.setState({ intervalIsSet: null }); //change back to 'interval" if needed
        }
    }


    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getDataFromDb = () => {
        fetch('http://localhost:3004/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    /**
    * HTML rendering of products on page
    */
    render() {
        const { data } = this.state;
        data.map((dat) => sumNeiman += dat.price)
        lenNeiman = data.length;
        avgNeiman = divide(sumNeiman, lenNeiman).toFixed(2);
        return (

            <div key={data.message} className="col-md" >
                <h2><i>Neiman Marcus</i>: Shoes</h2>
                <h3>Average Price: ${avgNeiman}</h3>
                <hr />
                <div>
                    <a className="button" href='/productsNeiman'>Shoes</a>
                    <a className="button" href='/neimanBelts'>Belts</a>
                    <a className="button" href='/neimanWatches'>Watches</a>
                </div>
                <br />
                <div style={grids}>
                    {data.length <= 0
                        ? 'No entries'
                        : data.map((dat) => (
                            <div className="product">
                                <view>
                                    <img src={dat.image} alt="Product image" />
                                    <div className="image_overlay" />
                                    <a className="view_details" href={dat.prodURL} target="_blank"/*onClick={}*/>
                                        Go to site
                                </a>
                                    <div className="stats-container">
                                        <span className="product_name">{dat.name}</span>
                                        <div style={grids2}>
                                            <span className="product_price">{dat.designer}</span>
                                            <span id="price">${dat.price.toFixed(2)}</span>
                                        </div>

                                    </div>
                                </view>
                            </div>
                        ))
                    }
                </div>
            </div>


        );
    }
}

export default index;
