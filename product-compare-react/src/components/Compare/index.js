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
      data: [562.78, 499.33]
    }
  ]
}

const state2 = {
  labels: ['Saks', 'Neiman Marcus'],
  datasets: [
    {
      label: 'Price (USD)',
      backgroundColor: ['rgba(75,192,192,1)', "#c45850"],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [407.05, 326.88]
    }
  ]
}

const state3 = {
  labels: ['Saks', 'Neiman Marcus'],
  datasets: [
    {
      label: 'Price (USD)',
      backgroundColor: ['rgba(75,192,192,1)', "#c45850"],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: [1365.71, 1375.00]
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

const align = {
  width: '100px',
  'text-align': 'center',
  margin: 'auto',
  'box-shadow': '0 13px 21px -5px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  'border-radius': '5px'
}

const align2 = {
  width: '130px',
  'text-align': 'center',
  margin: 'auto',
  'box-shadow': '0 13px 21px -5px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  'border-radius': '5px'
}

export default class Compare extends React.Component {
  render() {
    return (
      <div>
        <span>
          <h2>Comparing...</h2>
        </span>
        <hr />
        <h3 style={align}>Shoes</h3>
        <br />
        <div>
          <div style={divStyle}>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Shoe Price',
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
        </div>
        <br />
        <hr />
        <h3 style={align}>Belts</h3>
        <br />
        <div>
          <div style={divStyle}>
            <Bar
              data={state2}
              options={{
                title: {
                  display: true,
                  text: 'Average Belt Price',
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
        </div>
        <br />
        <hr />
        <h3 style={align2}>Watches</h3>
        <br />
        <div >
          <div style={divStyle}>
            <Bar
              data={state3}
              options={{
                title: {
                  display: true,
                  text: 'Average Watch Price',
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
        </div>
        <br />
        <hr />
        <br />
      </div>);
  }
}
