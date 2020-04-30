/**
 * Page to display Saks shoes
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
var sumSaks = 0;

/**
 * Number of products in collection
 */
var lenSaks = 0;

/**
 * Average product price in collection
 */
var avgSaks = 0;

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
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    /**
    * HTML rendering of products on page
    */
    render() {
        const { data } = this.state;
        data.map((dat) => sumSaks += dat.price)
        lenSaks = data.length;
        avgSaks = divide(sumSaks, lenSaks).toFixed(2);
        return (
            <div key={data.message} className="col-md" >
                <h2><i>Saks Fifth Avenue</i>: Shoes</h2>
                <h3>Average Price: ${avgSaks}</h3>
                <hr />
                <div>
                    <a className="button" href='/products'>Shoes</a>
                    <a className="button" href='/saksBelts'>Belts</a>
                    <a className="button" href='/saksWatches'>Watches</a>
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
