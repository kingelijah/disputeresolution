import React from 'react';
import { Doughnut } from 'react-chartjs-2'

function doughnutchart() {
    const data = {
        labels: ['jan','feb','mar'],
        datasets: [
            {
                label: 'sales for 2020 (M)',
                data: [3, 2, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)'
                    
                ]
            }         
        ]
    }
    const options = {
        title: {
            display: true
        },
        cutoutPercentage: 80
    }
  return (
   <Doughnut data={data} options={options}/>
  );
}

export default doughnutchart;
