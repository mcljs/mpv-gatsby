import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
class ChartThree extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Enero','Febrero','Marzo','Abril'],
        datasets:[{
            label: 'Beneficiaros',
            data:[189.631,207.394,122.308,64.879],
            backgroundColor:[
                'rgb(70,132,238,0.7)',
                'rgb(70,132,238,0.7)',
                'rgb(70,132,238,0.7)',
                'rgb(70,132,238,0.7)'
            ],
            borderColor:[
                'rgb(70,132,238,0.7)',
            ],
            fill:false,
                borderWidth: 3,
                pointHoverRadius: 5,
        }]
      }
    }
  }


  render(){
    return (
      <div className="chart">
        <Line
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

export default ChartThree;
