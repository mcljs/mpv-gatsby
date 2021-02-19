import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chartone extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Enero','Febrero'],
        datasets:[{
            label: 'Balance',
            data:[341,621],
            backgroundColor:[
               'rgb(70,132,238,0.8)',
                'rgb(220,57,28,0.8)',
                'rgb(220,57,28,0.7)',
                'rgb(70,132,238,0.7)',
                'rgb(119,47,60,0.7)',
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

export default Chartone;
