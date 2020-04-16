import React, { Component } from 'react';

class dropDown extends Component {
    render() {
        return (
            <select id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
        );
    }
}

export default dropDown;