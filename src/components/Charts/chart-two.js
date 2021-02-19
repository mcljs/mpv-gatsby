import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';


const ChartTwo = () => {
  
const etiquetas = ['Formación','Deporte','Cultura','Producción'];

  const datosEnero= {
   label: "Enero",
    data: [56, 149, 64, 59,13],
    backgroundColor: 'rgb(70,132,238,0.8)', 

  }

  const datosFebrero= {
   label: "Febero",
    data: [109, 227, 140, 124,21],
    backgroundColor: 'rgb(220,57,28,0.8)', 

  }


const [barData] = useState({
    labels: etiquetas,
    datasets: [
      datosEnero,
      datosFebrero
     ]
});

    return (
      <div className="chart">
        <Bar
          data={barData}
          var options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
           
          }}
        />





      </div>
    )
  }

export default ChartTwo;
