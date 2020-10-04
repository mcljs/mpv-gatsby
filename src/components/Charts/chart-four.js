import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

//Actualizada hasta Marzo//
class ChartFour extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Directos','Indirectos'],
        datasets:[{
            label: 'Beneficiaros',
            data:[189.631,207.394],
            backgroundColor:[
                'rgb(70,132,238,0.8)',
                    'rgb(220,57,28,0.8)',
            ],
        }]
      }
    }
  }


  render(){
    return (
      <div className="chart">
        <Pie
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

export default ChartFour;