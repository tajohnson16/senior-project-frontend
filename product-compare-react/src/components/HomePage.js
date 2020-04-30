/**
 * Home page displaying two analytical charts
 * 
 * @author Tim Johnson
 * Senior Project
 */

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

/**
 * Bar graph state for average prices of all products
 */
const state = {
    labels: ['Saks', 'Neiman Marcus'],
    datasets: [
        {
            label: 'Price (USD)',
            backgroundColor: ['rgba(75,192,192,1)', "#c45850"],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [778.51, 733.74]
        }
    ]
}

/**
 * Pie graph state for total number of shoes, belts, and watches
 */
const state2 = {
    labels: ['Shoes', 'Belts', 'Watches'],
    datasets: [
        {
            label: 'Items',
            backgroundColor: [
                '#c45850',
                '#C9DE00',
                '#70DBDB'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#388E8E'
            ],
            data: [270, 270, 270]
        }
    ]
}

/**
 * Methods for HTML/CSS graph styling
 */
const divStyle = {
    width: '500px', height: 'auto',
    margin: 'auto',
    'box-shadow': '0 13px 21px -5px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    'border-radius': '5px'
};

const grids = {
    display: 'grid',
    grid: 'auto / auto auto'
};

/**
 * HTML rendering of home page
 */
export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <span>
                    <h2>Analytics</h2>
                </span>
                <hr />
                <br />
                <div style={grids}>
                    <div style={divStyle}>
                        <Bar
                            data={state}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Saks vs. Neiman Marcus Average Price',
                                    fontSize: 20
                                },
                                legend: {
                                    display: false,
                                    position: 'right'
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }],
                                    xAxes: [{
                                        barPercentage: 0.4
                                    }]
                                }
                            }}
                        />
                    </div>
                    <div style={divStyle}>
                        <Pie
                            data={state2}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Total Number of Items',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>);
    }
}
