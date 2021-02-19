import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

//Actualizada hasta Marzo//
class ChartFour extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Formación','Deporte','Cultura','Política','Producción'],
        datasets:[{
            label: 'Beneficiaros',
            data:[17,39,21,19,4],
            backgroundColor:[
               'rgb(0,128,0,0.7)',
                'rgb(255,153,0,0.7)',
                'rgb(220,57,28,0.7)',
                'rgb(70,132,238,0.7)',
                'rgb(119,47,60,0.7)',
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
              display: false
            },
tooltips: {
		enabled: true,
		callbacks: {
			label: function (tooltipItem, data) {
				
				var dataset = data.datasets[tooltipItem.datasetIndex];
				var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
					return previousValue + currentValue;
				});
				var currentValue = dataset.data[tooltipItem.index];
				var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
				return percentage + "%";
			},                    
			title: function (tooltipItem, data) {
				return data.labels[tooltipItem[0].index];
			},
			
			
		},
		
	},
       
          }}
        />





      </div>
    )
  }
}

export default ChartFour;
