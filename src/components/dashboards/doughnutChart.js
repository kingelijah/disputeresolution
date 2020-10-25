import React from 'react';
import { Doughnut } from 'react-chartjs-2'

function doughnutchart() {
    var datas = JSON.parse(localStorage.getItem("un"));
    const data = {
        labels: ['Asssigned', 'Resolved', 'Unresolved'],
        datasets: [
            {
                label: 'sales for 2020 (M)',
                data: [datas.TotalAssigned, datas.TotalResolved, datas.TotalAssigned - datas.TotalResolved],
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
        <Doughnut data={data} options={options} />
    );
}

export default doughnutchart;
