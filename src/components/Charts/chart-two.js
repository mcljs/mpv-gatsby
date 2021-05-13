import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';


const ChartTwo = () => {
  
const etiquetas = ['Formación','Deporte','Cultura', 'Política', 'Producción'];

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

 const datosMarzo= {
   label: "Marzo",
    data: [264, 443, 271, 202,52],
    backgroundColor: 'rgb(0,128,0,0.7)', 

  }

  const datosAbril= {
   label: "Abril",
    data: [185, 279, 186, 306,55],
    backgroundColor: 'rgb(255,153,0,0.7)', 

  }

 const datosMayo= {
   label: "Mayo",
    data: [202, 266, 202, 199,31],
    backgroundColor: 'rgb(119,47,60,0.7)', 

  }





const [barData] = useState({
    labels: etiquetas,
    datasets: [
      datosEnero,
      datosFebrero,
      datosMarzo,
      datosAbril,
      datosMayo
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
