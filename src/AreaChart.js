import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const AreaChart = ({data}) => {
    const newData = data.slice(1,100)
    const result = newData.map(item =>  Number(item["Electric Range"]));
    const options = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Area chart for Electric Range of countries',
            align: 'left'
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Electric Range'
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span>' +
                '<br>'
        },
        plotOptions: {
            series: {
                pointStart: 2012
            },
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Year',
            data: result
        }
     ]
      }; 
  return (
    <div>
       <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
  )
}

export default AreaChart
