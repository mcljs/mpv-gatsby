import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class ChartTwo extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Organizativa','Recreativa','Deportiva',
        'Cultural','Productiva','Formativa','Comunicacional'
        , 'Preventiva'],
        datasets:[{
            label: 'Actividades',
            data:[153,80,47,30,61,128,174,268],
            backgroundColor:[
                'rgb(70,132,238,0.7)',
                    'rgb(220,57,28,0.7)',
                    'rgb(255,153,0,0.7)',
                    'rgb(0,128,0,0.7)',
                    'rgb(119,47,60,0.7)',
                    'rgb(103,0,206,0.7)',
                    'rgb(152,72,7,0.7)',
                    'rgb(0,32,96,0.7)',
            ]
        }]
      }
    }
  }


  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          var options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend:{
                display:this.props.displayLegend,
              }
          }}
        />





      </div>
    )
  }
}

export default ChartTwo;