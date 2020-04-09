import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';

const state = {
    labels: ['Saks', 'Neiman Marcus'],
    datasets: [
        {
            label: 'Price (USD)',
            backgroundColor: ['rgba(75,192,192,1)', "#c45850"],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [850.60, 870.20]
        }
    ]
}

const state2 = {
    labels: ['Shoes', 'Shirts', 'Pants',
        'Under Garments', 'Accessories'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                '#c45850',
                '#C9DE00',
                '#2FDE00',
                'rgba(75,192,192,1)',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
        }
    ]
}

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

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <span>
                    <h2>Analytics</h2>
                </span>
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
