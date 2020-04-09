import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';

const grids = {
    display: 'grid',
    grid: 'auto / auto auto auto',
    'grid-row-gap': '50px'
};

const grids2 = {
    display: 'grid',
    grid: 'auto / auto auto',
};

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
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
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

    render() {
        const { data } = this.state;
        return (
            <div key={data.message} className="col-md" >
                <h2><i>Saks Fifth Avenue</i>: Product List</h2>
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
                                            <span id="price">${dat.price}</span>
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





/* const Product = ({ product, compare }) =>
    ;
 */
export default index;
